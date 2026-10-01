#!/usr/bin/env node
// Converts a standalone widget (one .html file with a <style>, body markup and
// a single IIFE <script>) into a Framer code component.
//
// Why: an <iframe> is indexed as its own document on the host's domain, so its
// content never counts for the Framer page it sits on. A code component is
// server-rendered by Framer into the page's own HTML instead.
//
// What changes in the port, and why:
//   - CSS is scoped under one root class. html/body/* rules move onto the root,
//     everything else is prefixed, so nothing leaks into or out of the page.
//   - Viewport media queries become container queries. Inside an iframe the
//     "viewport" was the iframe; in a page it is the whole window, so a
//     max-width query would otherwise fire on the wrong box. vh/vw → cqh/cqw.
//   - @keyframes are renamed (they are global in a page). Only animation values
//     are rewritten, never selectors — a class and a keyframe may share a name.
//   - Every id is prefixed. Framer's own page root is <div id="main">, so an
//     unprefixed id="main" would collide with it.
//   - document.getElementById / querySelector(All) are rewritten to search the
//     component's root only, translating #ids in selector strings.
//   - <main> becomes <div>: a page may only have one main landmark.
//   - The script's IIFE becomes init(root), which returns a dispose function so
//     timers and async loops stop when Framer unmounts the component.
//
// Usage: node tools/to-framer.mjs <slug>   (config for each slug lives below)

import fs from 'node:fs'
import path from 'node:path'

const CONFIG = {
  'hero-scan': {
    component: 'HeroScan',
    label:
      'Example AI visibility scan across ChatGPT, Claude, Gemini and Perplexity, ' +
      'showing which brands each answer names, the sources it cites, and share of voice',
    width: 900,
    height: 560,
    // runs inside init(); must stop every loop and timer the script started
    dispose: 'gen++; paused = true; if (idleTimer) clearTimeout(idleTimer);',
  },
}

const slug = process.argv[2]
const cfg = CONFIG[slug]
if (!cfg) {
  console.error('unknown slug "' + slug + '". known: ' + Object.keys(CONFIG).join(', '))
  process.exit(1)
}

const repo = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const src = fs.readFileSync(path.join(repo, slug + '.html'), 'utf8')
const R = 'fx-' + slug // root class, container name and id/keyframe prefix

function between(s, a, b) {
  const i = s.indexOf(a)
  const j = s.indexOf(b, i + a.length)
  if (i < 0 || j < 0) throw new Error('could not find ' + a + ' … ' + b)
  return s.slice(i + a.length, j)
}

// ---------------------------------------------------------------- CSS ----

function parseCss(css) {
  css = css.replace(/\/\*[\s\S]*?\*\//g, '')
  let i = 0
  function block() {
    const nodes = []
    while (i < css.length) {
      while (i < css.length && /\s/.test(css[i])) i++
      if (i >= css.length) break
      if (css[i] === '}') { i++; break }
      const start = i
      while (i < css.length && css[i] !== '{' && css[i] !== ';' && css[i] !== '}') i++
      const prelude = css.slice(start, i).trim()
      if (css[i] === ';') { i++; nodes.push({ type: 'stmt', text: prelude }); continue }
      if (css[i] === '}') continue
      i++ // past '{'
      if (/^@(media|supports|container)\b/.test(prelude)) {
        nodes.push({ type: 'group', prelude, children: block() })
      } else if (/^@(-webkit-)?keyframes\b/.test(prelude)) {
        let depth = 1
        const s = i
        while (i < css.length && depth > 0) {
          if (css[i] === '{') depth++
          else if (css[i] === '}') depth--
          i++
        }
        nodes.push({ type: 'keyframes', name: prelude.split(/\s+/)[1], body: css.slice(s, i - 1) })
      } else {
        const s = i
        while (i < css.length && css[i] !== '}') i++
        nodes.push({ type: 'rule', selector: prelude, body: css.slice(s, i).trim() })
        i++
      }
    }
    return nodes
  }
  return block()
}

function collectKeyframes(nodes, out = new Set()) {
  for (const n of nodes) {
    if (n.type === 'keyframes') out.add(n.name)
    if (n.type === 'group') collectKeyframes(n.children, out)
  }
  return out
}

function scopeSelector(sel) {
  const parts = sel.split(',').map((s) => s.trim()).filter(Boolean)
  const out = []
  for (const s of parts) {
    if (s === 'html' || s === 'body' || s === ':root') out.push('.' + R)
    else if (s === '*') out.push('.' + R, '.' + R + ' *')
    else if (/^(html|body)(?=[\s.:#[>]|$)/.test(s)) out.push(s.replace(/^(html|body)/, '.' + R))
    else out.push('.' + R + ' ' + s)
  }
  return [...new Set(out)].join(', ')
}

let usesContainerHeight = false
function fixDecls(body, keyframes) {
  return body
    .split(';')
    .map((d) => {
      const k = d.indexOf(':')
      if (k < 0) return d
      const prop = d.slice(0, k).trim().toLowerCase()
      let val = d.slice(k + 1)
      // the iframe's viewport was the widget; on a page it is the window
      if (/\d(vh|vmin|vmax)\b/.test(val)) usesContainerHeight = true
      val = val
        .replace(/(\d*\.?\d+)vh\b/g, '$1cqh')
        .replace(/(\d*\.?\d+)vw\b/g, '$1cqw')
        .replace(/(\d*\.?\d+)vmin\b/g, '$1cqmin')
        .replace(/(\d*\.?\d+)vmax\b/g, '$1cqmax')
      // keyframes are global on a page; rename references in animation values only
      if (prop === 'animation' || prop === 'animation-name') {
        for (const name of keyframes) {
          val = val.replace(new RegExp('(^|[\\s,])' + name + '(?=$|[\\s,])', 'g'), '$1' + R + '-' + name)
        }
      }
      return d.slice(0, k) + ':' + val
    })
    .join(';')
}

function convertPrelude(prelude) {
  if (!prelude.startsWith('@media')) return prelude
  const q = prelude.slice('@media'.length).trim()
  // preference and capability queries describe the user, not the box: keep them
  if (/prefers-|hover|pointer|print|color-gamut|forced-colors/.test(q)) return prelude
  const cond = q
    .replace(/\b(only\s+)?screen\s+and\s+/g, '')
    .split(',')
    .map((s) => s.trim())
    .join(' or ')
  return '@container ' + R + ' ' + cond
}

function emitCss(nodes, keyframes) {
  return nodes
    .map((n) => {
      if (n.type === 'stmt') return n.text + ';'
      if (n.type === 'keyframes') return '@keyframes ' + R + '-' + n.name + ' {' + n.body + '}'
      if (n.type === 'group')
        return convertPrelude(n.prelude) + ' {\n' + emitCss(n.children, keyframes) + '\n}'
      return scopeSelector(n.selector) + ' { ' + fixDecls(n.body, keyframes) + ' }'
    })
    .join('\n')
}

const rawCss = between(src, '<style>', '</style>')
const nodes = parseCss(rawCss)
const keyframes = collectKeyframes(nodes)
const scoped = emitCss(nodes, keyframes)
const fontHref = (src.match(/href="(https:\/\/fonts\.googleapis\.com\/css2[^"]+)"/) || [])[1]

const rootRule =
  '.' + R + ' { position: relative; display: block; width: 100%; height: 100%; overflow: hidden; ' +
  'container-type: ' + (usesContainerHeight ? 'size' : 'inline-size') + '; container-name: ' + R + '; }'

const css =
  (fontHref ? '@import url("' + fontHref.replace(/&amp;/g, '&') + '");\n' : '') +
  rootRule + '\n' + scoped

// ------------------------------------------------------------- markup ----

const markup = between(src, '<body>', '<script>')
  .trim()
  .replace(/<main\b/g, '<div')
  .replace(/<\/main>/g, '</div>')
  .replace(/\sid="([^"]+)"/g, ' id="' + R + '-$1"')

const ids = [...markup.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1].slice(R.length + 1))

// ------------------------------------------------------------- script ----

let script = between(src, '<script>', '</script>').trim()
if (!/^\(function\s*\(\)\s*\{/.test(script) || !/\}\)\(\);?$/.test(script)) {
  throw new Error('expected the script to be a single IIFE')
}
script = script.replace(/^\(function\s*\(\)\s*\{/, '').replace(/\}\)\(\);?$/, '')

const lookups = [...script.matchAll(/document\.getElementById\('([^']+)'\)/g)].map((m) => m[1])
const missing = lookups.filter((id) => !ids.includes(id))
if (missing.length) throw new Error('script looks up ids not in markup: ' + missing.join(', '))

script = script
  .replace(/document\.getElementById\(/g, '$id(')
  .replace(/document\.querySelectorAll\(/g, '$qa(')
  .replace(/document\.querySelector\(/g, '$q(')
if (/document\.(getElementById|querySelector)/.test(script)) throw new Error('unscoped lookup left')

const scopeHelpers = [
  "  var $P = '" + R + "-';",
  '  function $sel(s) { return s.replace(/#([A-Za-z][\\w-]*)/g, "#" + $P + "$1"); }',
  '  function $id(x) { return root.querySelector("#" + $P + x); }',
  '  function $q(s) { return root.querySelector($sel(s)); }',
  '  function $qa(s) { return root.querySelectorAll($sel(s)); }',
].join('\n')

const initSource =
  'function init(root) {\n' + scopeHelpers + '\n' + script.replace(/\s+$/, '') +
  '\n\n  return function dispose() { ' + cfg.dispose + ' };\n}'

// --------------------------------------------------------------- emit ----

const tsx = `// @ts-nocheck
// Generated from ${slug}.html by tools/to-framer.mjs. Edit the HTML, then regenerate:
//   node tools/to-framer.mjs ${slug}
import { useEffect, useRef } from "react"

const LABEL = ${JSON.stringify(cfg.label)}

// Rendered as plain HTML so Framer's server render puts it in the page's own markup.
const HTML = ${JSON.stringify('<style>' + css + '</style>' + markup)}

${initSource}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 * @framerIntrinsicWidth ${cfg.width}
 * @framerIntrinsicHeight ${cfg.height}
 */
export default function ${cfg.component}() {
    const ref = useRef(null)
    useEffect(() => {
        const root = ref.current
        if (!root) return
        const dispose = init(root)
        return () => {
            if (typeof dispose === "function") dispose()
        }
    }, [])
    return (
        <div
            ref={ref}
            className="${R}"
            role="figure"
            aria-label={LABEL}
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: HTML }}
        />
    )
}
`

fs.mkdirSync(path.join(repo, 'framer'), { recursive: true })
const out = path.join(repo, 'framer', cfg.component + '.tsx')
fs.writeFileSync(out, tsx)

// Pieces for the test harness, so tests exercise exactly what ships.
const harnessDir = process.env.HARNESS_DIR
if (harnessDir) {
  fs.mkdirSync(harnessDir, { recursive: true })
  fs.writeFileSync(
    path.join(harnessDir, slug + '.parts.json'),
    JSON.stringify({ root: R, html: '<style>' + css + '</style>' + markup, init: initSource, label: cfg.label })
  )
}

console.log('wrote ' + path.relative(repo, out))
console.log('  root class       ' + R)
console.log('  ids prefixed     ' + ids.length)
console.log('  keyframes        ' + [...keyframes].join(', '))
console.log('  container-type   ' + (usesContainerHeight ? 'size' : 'inline-size'))
console.log('  media→container  ' + (scoped.match(/@container /g) || []).length)
