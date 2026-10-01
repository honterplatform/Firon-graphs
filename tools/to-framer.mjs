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
//   - guardLoops (canvas charts): requestAnimationFrame / setTimeout are wrapped
//     so they go inert on dispose, and window 'resize' becomes a ResizeObserver
//     on the component — on a page the box can resize without the window doing so.
//   - Container queries that test aspect-ratio or height switch the root to
//     container-type: size; inline-size containers cannot answer them, so the
//     narrow layout would otherwise never trigger.
//   - fallback (canvas charts): canvas output is pixels, not text. The chart's
//     data is placed inside <canvas> as a table — canvas fallback content, the
//     standard accessible description of a canvas, and real text in the HTML.
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
  'asking-google': {
    component: 'AskingGoogle',
    width: 900,
    height: 330,
    guardLoops: true,
    dispose: '',
    data(src) {
      const Y = JSON.parse(src.match(/var YEARS\s*=\s*(\[[^\]]+\])/)[1].replace(/'/g, '"'))
      const G = JSON.parse(src.match(/var GOOGLE = (\[[^\]]+\])/)[1])
      const AT = +src.match(/var ACTUAL_THROUGH = (\d+)/)[1]
      const A = [...src.matchAll(/name: '([^']+)'[^\n]*?data: (\[[^\]]+\])/g)].map((m) => ({ name: m[1], data: JSON.parse(m[2]) }))
      const ai = Y.map((_, i) => A.reduce((s, a) => s + a.data[i], 0))
      return { Y, G, AT, A, ai }
    },
    label(src) {
      const { Y, G, AT, ai } = this.data(src)
      return 'Line chart of where buyers ask, ' + Y[0] + '\u2013' + Y.at(-1) + ': Google falls from ' + G[0] +
        '% to ' + G.at(-1) + '% while AI assistants rise from ' + ai[0] + '% to ' + ai.at(-1) + '%. ' +
        Y[AT + 1] + '\u2013' + Y.at(-1) + ' projected.'
    },
    fallback(src) {
      const { Y, G, AT, A, ai } = this.data(src)
      const head = ['Year', 'Google', 'All AI'].concat(A.map((a) => a.name))
      const rows = Y.map((y, i) =>
        '<tr><th scope="row">' + y + (i > AT ? ' (projected)' : '') + '</th>' +
        [G[i], ai[i]].concat(A.map((a) => a.data[i])).map((v) => '<td>' + v + '%</td>').join('') + '</tr>')
      return '<table><caption>' + this.label(src) + '</caption><thead><tr>' +
        head.map((h) => '<th scope="col">' + h + '</th>').join('') + '</tr></thead><tbody>' + rows.join('') + '</tbody></table>'
    },
  },
  'stopping-cost': {
    component: 'StoppingCost',
    width: 900,
    height: 340,
    guardLoops: true,
    dispose: 'if (resumeTimer) clearTimeout(resumeTimer);',
    model(src) {
      const js = src.match(/<script>([\s\S]*?)<\/script>/)[1]
      const consts = js.match(/var YOU_PEAK[\s\S]*?var ACCENT = '#FB3B24';/)[0]
      const fn = js.match(/  function series\(P\) \{[\s\S]*?\n  \}\n/)[0]
      return new Function(consts + fn + 'return { series: series, BUILD: BUILD, PAUSES: PAUSES };')()
    },
    label(src) {
      const { BUILD, PAUSES } = this.model(src)
      return 'Interactive chart: after ' + BUILD + ' months building visibility, stop producing for ' +
        PAUSES.join(', ').replace(/, (\d+)$/, ' or $1') + ' months and see how long it takes to climb back ' +
        'in front of a competitor who never stopped.'
    },
    fallback(src) {
      const { series, BUILD, PAUSES } = this.model(src)
      const rows = PAUSES.map((P) => {
        const m = series(P)
        return '<tr><th scope="row">' + P + ' months</th><td>' + m.R + ' months</td><td>' +
          (m.R / P).toFixed(1) + '\u00d7</td><td>Month ' + m.cross + '</td></tr>'
      })
      return '<table><caption>' + this.label(src) + ' Visibility takes ' + BUILD + ' months to earn.</caption>' +
        '<thead><tr><th scope="col">Stopped for</th><th scope="col">Time to climb back</th>' +
        '<th scope="col">Longer than the pause</th><th scope="col">Back in front</th></tr></thead><tbody>' +
        rows.join('') + '</tbody></table>'
    },
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
const label = typeof cfg.label === 'function' ? cfg.label(src) : cfg.label

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
  // an inline-size container cannot answer these; they would silently never match
  if (/aspect-ratio|height|orientation/.test(cond)) usesContainerHeight = true
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

let markupOut = markup
if (cfg.fallback) {
  const fb = cfg.fallback(src)
  const before = markupOut
  markupOut = markupOut.replace(/(<canvas\b[^>]*>)\s*<\/canvas>/, '$1' + fb + '</canvas>')
  if (markupOut === before) throw new Error('fallback configured but no empty <canvas> found')
}

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

if (cfg.guardLoops) {
  script = script
    .replace(/window\.addEventListener\('resize',\s*/g, '$onResize(')
    .replace(/\brequestAnimationFrame\(/g, '$raf(')
    .replace(/\bsetTimeout\(/g, '$st(')
  if (/window\.addEventListener\(/.test(script)) throw new Error('unguarded window listener left')
}

const scopeHelpers = [
  "  var $P = '" + R + "-';",
  '  function $sel(s) { return s.replace(/#([A-Za-z][\\w-]*)/g, "#" + $P + "$1"); }',
  '  function $id(x) { return root.querySelector("#" + $P + x); }',
  '  function $q(s) { return root.querySelector($sel(s)); }',
  '  function $qa(s) { return root.querySelectorAll($sel(s)); }',
].concat(cfg.guardLoops ? [
  '  var $dead = false, $ro = null;',
  '  function $raf(f) { return requestAnimationFrame(function (t) { if (!$dead) f(t); }); }',
  '  function $st(f, ms) { return setTimeout(function () { if (!$dead) f(); }, ms); }',
  '  function $onResize(f) {',
  '    if (typeof ResizeObserver === "undefined") { window.addEventListener("resize", f); return; }',
  '    $ro = new ResizeObserver(function () { if (!$dead) f(); });',
  '    $ro.observe(root);',
  '  }',
] : []).join('\n')

const initSource =
  'function init(root) {\n' + scopeHelpers + '\n' + script.replace(/\s+$/, '') +
  '\n\n  return function dispose() { ' +
  (cfg.guardLoops ? '$dead = true; if ($ro) $ro.disconnect(); ' : '') + cfg.dispose + ' };\n}'

// --------------------------------------------------------------- emit ----

const tsx = `// @ts-nocheck
// Generated from ${slug}.html by tools/to-framer.mjs. Edit the HTML, then regenerate:
//   node tools/to-framer.mjs ${slug}
import { useEffect, useRef } from "react"

const LABEL = ${JSON.stringify(label)}

// Rendered as plain HTML so Framer's server render puts it in the page's own markup.
const HTML = ${JSON.stringify('<style>' + css + '</style>' + markupOut)}

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
    JSON.stringify({ root: R, html: '<style>' + css + '</style>' + markupOut, init: initSource, label })
  )
}

console.log('wrote ' + path.relative(repo, out))
console.log('  root class       ' + R)
console.log('  ids prefixed     ' + ids.length)
console.log('  keyframes        ' + [...keyframes].join(', '))
console.log('  container-type   ' + (usesContainerHeight ? 'size' : 'inline-size'))
console.log('  media→container  ' + (scoped.match(/@container /g) || []).length)
