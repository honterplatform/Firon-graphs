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
//   - prerender (charts that build their content with JS): the container would
//     ship empty in Framer's server render. The original page is run in headless
//     Chrome, each listed container is snapshotted synchronously right after the
//     script runs — before any timer, so in its pre-animation state — and that
//     markup is baked into the HTML. init() empties the container first, so the
//     script rebuilds and animates it exactly as before.
//   - Scripts need not be an IIFE: a plain top-level script becomes init()'s body,
//     its top-level declarations becoming locals.
//   - window 'load' listeners run immediately: by the time a component mounts the
//     page has usually loaded already, so the handler would never fire.
//   - If the script creates elements with ids at runtime, those ids are not
//     prefixed, so id lookups fall back to the bare id — still scoped to root.
//   - html/body rules normally land on the root. But if one uses viewport units,
//     it cannot: container units on the container itself resolve against the
//     browser window, not the box. Those rules move to an inner -body wrapper
//     inside the container, so the units measure the chart's box as they did in
//     the iframe.
//
// Usage: node tools/to-framer.mjs <slug>   (config for each slug lives below)

import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

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
  'robots-txt-light': {
    component: 'RobotsTxt',
    label: 'Example Shopify robots.txt: crawl rules for adsbot-google disallowing checkout, cart, order, ' +
      'preview and private-access paths.',
    width: 600, height: 420, guardLoops: true, dispose: '',
    prerender: ['terminal'],
  },
  'citations-sources-light': {
    component: 'CitationsSources',
    label: 'Citation sources: the domains AI answers cite most, with citation count and share over the last 90 days.',
    width: 600, height: 460, guardLoops: true, dispose: '',
    prerender: ['tbody'],
  },
  'share-of-voice-light': {
    component: 'ShareOfVoice',
    label: 'AI share of voice leaderboard for the query "luxury candle brands": citation share by brand across ' +
      'ChatGPT, Perplexity, Claude and Gemini, with 30-day change.',
    width: 900, height: 480, guardLoops: true, dispose: '',
    prerender: ['tableBody'],
  },
  'pdp-before-after': {
    component: 'PdpBeforeAfter',
    label: 'Product page before and after: an auto-pulled description with a missing H1 and empty alt text, then ' +
      'the same page with an H1, alt text and five declared facts: material, origin, style, dimensions and care.',
    width: 900, height: 450, guardLoops: true, dispose: 'gen++;',
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
    if (s === 'html' || s === 'body' || s === ':root') out.push(BODY || '.' + R)
    else if (s === '*') out.push('.' + R, '.' + R + ' *')
    else if (/^(html|body)(?=[\s.:#[>]|$)/.test(s)) out.push(s.replace(/^(html|body)/, BODY || '.' + R))
    else out.push('.' + R + ' ' + s)
  }
  return [...new Set(out)].join(', ')
}

let usesContainerHeight = false
const VIEWPORT_UNIT = /\d(vh|vw|vmin|vmax)\b/
const isPageLevel = (s) => /^(html|body|:root)$|^(html|body)(?=[\s.:#[>])/.test(s.trim())
function needsBodyWrap(nodes) {
  return nodes.some((n) =>
    (n.type === 'rule' && n.selector.split(',').some(isPageLevel) && VIEWPORT_UNIT.test(n.body)) ||
    (n.type === 'group' && needsBodyWrap(n.children)))
}
let BODY = null // selector page-level rules map to; null means the root itself
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
const bodyWrap = needsBodyWrap(nodes)
if (bodyWrap) BODY = '.' + R + ' .' + R + '-body'
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

function prerender(ids) {
  const chrome = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  // runs synchronously straight after the widget script, so no timer has fired yet
  const snap = '<script>(function(){var o={};' + JSON.stringify(ids) +
    '.forEach(function(id){var e=document.getElementById(id);o[id]=e?e.innerHTML:null;});' +
    'document.documentElement.setAttribute("data-prerender",encodeURIComponent(JSON.stringify(o)));})();</script>'
  const end = src.indexOf('</script>', src.indexOf('<script>'))
  const page = src.slice(0, end + 9) + snap + src.slice(end + 9)
  const tmp = path.join(os.tmpdir(), 'to-framer-' + slug + '.html')
  fs.writeFileSync(tmp, page)
  const dom = execFileSync(chrome, ['--headless=new', '--disable-gpu', '--no-first-run', '--dump-dom', 'file://' + tmp],
    { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], timeout: 60000 })
  fs.unlinkSync(tmp)
  const m = dom.match(/data-prerender="([^"]*)"/)
  if (!m) throw new Error('prerender: no snapshot captured')
  const got = JSON.parse(decodeURIComponent(m[1]))
  for (const id of ids) if (!got[id] || !got[id].trim()) throw new Error('prerender: #' + id + ' was empty after the script ran')
  return got
}

let rawMarkup = between(src, '<body>', '<script>').trim()
const prerendered = cfg.prerender ? prerender(cfg.prerender) : {}
for (const id of Object.keys(prerendered)) {
  const re = new RegExp('(<([a-z0-9]+)\\b[^>]*\\sid="' + id + '"[^>]*>)\\s*(</\\2>)')
  if (!re.test(rawMarkup)) throw new Error('prerender: #' + id + ' is not an empty element in the markup')
  rawMarkup = rawMarkup.replace(re, (_, open, tag, close) => open + prerendered[id] + close)
}

const markup = (bodyWrap ? '<div class="' + R + '-body">' + rawMarkup + '</div>' : rawMarkup)
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
// an IIFE is unwrapped; a plain top-level script is used as the body directly
if (/^\(function\s*\(\)\s*\{/.test(script) && /\}\)\(\);?$/.test(script)) {
  script = script.replace(/^\(function\s*\(\)\s*\{/, '').replace(/\}\)\(\);?$/, '')
}
// ids written into markup by the script itself never pass through prefixing
const createsIds = /\sid=\\?["']/.test(script)

const lookups = [...script.matchAll(/document\.getElementById\('([^']+)'\)/g)].map((m) => m[1])
const missing = lookups.filter((id) => !ids.includes(id))
if (missing.length) throw new Error('script looks up ids not in markup: ' + missing.join(', '))

script = script
  .replace(/document\.getElementById\(/g, '$id(')
  .replace(/document\.querySelectorAll\(/g, '$qa(')
  .replace(/document\.querySelector\(/g, '$q(')
if (/document\.(getElementById|querySelector)/.test(script)) throw new Error('unscoped lookup left')

// a component mounts after the page has loaded, so a load listener would never fire
script = script.replace(/window\.addEventListener\(\s*'load',\s*/g, '$onLoad(')
const usesOnLoad = script.includes('$onLoad(')

if (cfg.guardLoops) {
  script = script
    .replace(/window\.addEventListener\('resize',\s*/g, '$onResize(')
    .replace(/\brequestAnimationFrame\(/g, '$raf(')
    .replace(/\bsetTimeout\(/g, '$st(')
}
if (/window\.addEventListener\(/.test(script)) throw new Error('unhandled window listener left')

const scopeHelpers = [
  "  var $P = '" + R + "-';",
  '  function $sel(s) { return s.replace(/#([A-Za-z][\\w-]*)/g, "#" + $P + "$1"); }',
  createsIds
    ? '  function $id(x) { return root.querySelector("#" + $P + x) || root.querySelector("#" + x); }'
    : '  function $id(x) { return root.querySelector("#" + $P + x); }',
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
] : []).concat(usesOnLoad ? [
  '  function $onLoad(f) {',
  '    if (document.readyState === "complete") { ' + (cfg.guardLoops ? '$st' : 'setTimeout') + '(f, 0); return; }',
  '    window.addEventListener("load", f, { once: true });',
  '  }',
] : []).concat(Object.keys(prerendered).map((id) =>
  "  $id('" + id + "').innerHTML = '';   // server-rendered copy; the script rebuilds it"
)).join('\n')

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
if (bodyWrap) console.log('  page rules       moved inside the container (viewport units)')
console.log('  media→container  ' + (scoped.match(/@container /g) || []).length)
