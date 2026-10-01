// @ts-nocheck
// Generated from collection-reading.html by tools/to-framer.mjs. Edit the HTML, then regenerate:
//   node tools/to-framer.mjs collection-reading
import { useEffect, useRef } from "react"

const LABEL = "Automated collection, human reading: twenty minutes of collection across 412 prompts and 4 engines, then each finding triaged by a senior architect as costs you money, noise, or do first."

// Rendered as plain HTML so Framer's server render puts it in the page's own markup.
const HTML = "<style>@import url(\"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap\");\n.fx-collection-reading { position: relative; display: block; width: 100%; height: 100%; overflow: hidden; container-type: size; container-name: fx-collection-reading; }\n.fx-collection-reading, .fx-collection-reading * { margin: 0; padding: 0; box-sizing: border-box; }\n.fx-collection-reading { width: 100%; height: 100%; overflow: hidden; }\n.fx-collection-reading { background: transparent;\n    font-family: 'Geist', -apple-system, system-ui, sans-serif;\n    color: #000;\n    letter-spacing: -0.01em; }\n.fx-collection-reading .stage { width: 100%; height: 100%;\n    display: flex; align-items: stretch; justify-content: center;\n    padding: clamp(6px, 1.2cqh, 10px); }\n.fx-collection-reading .shell { width: 100%; height: 100%;\n    max-width: 1080px;\n    background: #F2F2F2;\n    border: 1px solid rgba(0,0,0,0.05);\n    border-radius: 10px;\n    padding: clamp(9px, 1.5cqh, 13px);\n    display: flex; flex-direction: column;\n    gap: clamp(8px, 1.3cqh, 12px);\n    overflow: hidden; }\n.fx-collection-reading .cols { flex: 1; min-height: 0;\n    display: grid;\n    grid-template-columns: 0.86fr 1.14fr;\n    gap: clamp(8px, 1.2cqw, 13px); }\n.fx-collection-reading .panel { background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,0.07);\n    border-radius: 8px;\n    display: flex; flex-direction: column;\n    min-width: 0; min-height: 0;\n    overflow: hidden; }\n.fx-collection-reading .ph { display: flex; align-items: center; gap: 8px;\n    padding: clamp(8px, 1.3cqh, 12px) clamp(11px, 1.4cqw, 16px);\n    border-bottom: 1px solid rgba(0,0,0,0.06);\n    background: #F2F2F2;\n    flex-shrink: 0; }\n.fx-collection-reading .pt { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 9.5px; font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.07em;\n    color: #000;\n    white-space: nowrap; }\n.fx-collection-reading .pc { margin-left: auto;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 9.5px; font-weight: 500;\n    color: rgba(0,0,0,0.35);\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.fx-collection-reading .mbody { flex: 1; min-height: 0;\n    display: flex; flex-direction: column;\n    padding: clamp(10px, 1.6cqh, 15px) clamp(11px, 1.4cqw, 16px);\n    gap: clamp(7px, 1.1cqh, 11px); }\n.fx-collection-reading .clock { display: flex; align-items: baseline; gap: 8px; flex-shrink: 0; }\n.fx-collection-reading .time { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: clamp(21px, 4.4cqh, 36px);\n    font-weight: 500;\n    color: #000;\n    font-variant-numeric: tabular-nums;\n    line-height: 1; }\n.fx-collection-reading .tlab { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 9.5px; font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.07em;\n    color: rgba(0,0,0,0.35); }\n.fx-collection-reading .done { margin-left: auto;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 9px; font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.06em;\n    color: rgba(0,0,0,0.55);\n    background: #F2F2F2;\n    border-radius: 4px;\n    padding: 3px 7px;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    white-space: nowrap; }\n.fx-collection-reading .done.on { opacity: 1; }\n.fx-collection-reading .bar { height: 5px;\n    background: rgba(0,0,0,0.07);\n    border-radius: 3px;\n    overflow: hidden;\n    flex-shrink: 0; }\n.fx-collection-reading .bar i { display: block; height: 100%; width: 0;\n    background: rgba(0,0,0,0.75);\n    border-radius: 3px; }\n.fx-collection-reading .mets { flex: 1; min-height: 0;\n    display: flex; flex-direction: column;\n    justify-content: center; }\n.fx-collection-reading .met { display: flex; align-items: center; gap: 8px;\n    flex: 1; min-height: 0;\n    border-bottom: 1px solid rgba(0,0,0,0.05);\n    min-width: 0; }\n.fx-collection-reading .met:last-child { border-bottom: 0; }\n.fx-collection-reading .mk { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: clamp(8.5px, 1.15cqh, 10px);\n    font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;\n    color: rgba(0,0,0,0.35);\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.fx-collection-reading .mv { margin-left: auto;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: clamp(11px, 1.6cqh, 13.5px);\n    font-weight: 500;\n    color: #000;\n    font-variant-numeric: tabular-nums;\n    white-space: nowrap; }\n.fx-collection-reading .fbody { flex: 1; min-height: 0;\n    display: flex; flex-direction: column;\n    padding: 0 clamp(11px, 1.4cqw, 16px); }\n.fx-collection-reading .frow { flex: 1; min-height: 0;\n    display: flex; align-items: center; gap: clamp(8px, 1.2cqw, 14px);\n    border-bottom: 1px solid rgba(0,0,0,0.05);\n    min-width: 0;\n    opacity: 0; transform: translateY(5px);\n    transition: opacity 0.36s ease, transform 0.36s ease; }\n.fx-collection-reading .frow:last-child { border-bottom: 0; }\n.fx-collection-reading .frow.in { opacity: 1; transform: translateY(0); }\n.fx-collection-reading .ftext { font-size: clamp(11.5px, 1.7cqh, 14.5px);\n    font-weight: 500;\n    color: rgba(0,0,0,0.82);\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n    transition: color 0.32s ease, text-decoration-color 0.32s ease, opacity 0.24s ease;\n    text-decoration: line-through transparent;\n    min-width: 0; }\n.fx-collection-reading .frow.noise .ftext { color: rgba(0,0,0,0.28);\n    text-decoration: line-through rgba(0,0,0,0.25); }\n.fx-collection-reading .frow.money .ftext { color: #000; }\n.fx-collection-reading .frow.first .ftext { color: #000; font-weight: 600; }\n.fx-collection-reading .v { margin-left: auto;\n    flex-shrink: 0;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: clamp(8.5px, 1.15cqh, 10px);\n    font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;\n    background: #F2F2F2;\n    border-radius: 4px;\n    padding: 4px 8px;\n    color: rgba(0,0,0,0.35);\n    white-space: nowrap;\n    opacity: 0;\n    transform: translateY(-3px);\n    transition: opacity 0.3s ease, transform 0.3s ease; }\n.fx-collection-reading .v.on { opacity: 1; transform: translateY(0); }\n.fx-collection-reading .frow.money .v { color: #FB3B24; }\n.fx-collection-reading .frow.first .v { color: #000; }\n.fx-collection-reading .foot { display: flex; align-items: center; gap: 7px;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 9.5px; font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.06em;\n    color: rgba(0,0,0,0.38);\n    padding: 0 2px;\n    flex-shrink: 0;\n    white-space: nowrap; overflow: hidden; }\n@container fx-collection-reading (max-width: 760px) or (max-aspect-ratio: 1/1) {\n.fx-collection-reading .cols { grid-template-columns: 1fr; grid-template-rows: 0.82fr 1.18fr; }\n.fx-collection-reading .mets { flex-direction: row; flex-wrap: wrap; }\n.fx-collection-reading .met { flex: 1 1 45%;\n      border-bottom: 0;\n      gap: 6px; }\n.fx-collection-reading .time { font-size: clamp(19px, 6cqw, 28px); }\n.fx-collection-reading .foot .extra { display: none; }\n}\n@container fx-collection-reading (max-width: 430px) {\n.fx-collection-reading .v { font-size: 8px; padding: 3px 6px; }\n.fx-collection-reading .ftext { font-size: 11px; }\n}\n@media (prefers-reduced-motion: reduce) {\n.fx-collection-reading .frow, .fx-collection-reading .v, .fx-collection-reading .ftext, .fx-collection-reading .done { transition: none; }\n}</style><div class=\"stage\">\n  <section class=\"shell\">\n\n    <div class=\"cols\">\n      <!-- machine: no accent anywhere in this panel -->\n      <section class=\"panel\">\n        <header class=\"ph\">\n          <span class=\"pt\">Collection</span>\n          <span class=\"pc\">Automated</span>\n        </header>\n        <div class=\"mbody\">\n          <div class=\"clock\">\n            <span class=\"time\" id=\"fx-collection-reading-time\">20:00</span>\n            <span class=\"tlab\">elapsed</span>\n            <span class=\"done\" id=\"fx-collection-reading-done\">Complete</span>\n          </div>\n          <div class=\"bar\"><i id=\"fx-collection-reading-bar\"></i></div>\n          <div class=\"mets\" id=\"fx-collection-reading-mets\"><div class=\"met\"><span class=\"mk\">Prompts run</span><span class=\"mv\">412</span></div><div class=\"met\"><span class=\"mk\">Engines queried</span><span class=\"mv\">4</span></div><div class=\"met\"><span class=\"mk\">Answers parsed</span><span class=\"mv\">1,284</span></div><div class=\"met\"><span class=\"mk\">Citations mapped</span><span class=\"mv\">96</span></div></div>\n        </div>\n      </section>\n\n      <!-- reading: the only accent in the graphic lives here -->\n      <section class=\"panel\">\n        <header class=\"ph\">\n          <span class=\"pt\">Reading</span>\n          <span class=\"pc\">Senior architect</span>\n        </header>\n        <div class=\"fbody\" id=\"fx-collection-reading-fbody\"><div class=\"frow in money\"><span class=\"ftext\">Category page absent from 3 of 4 engines</span><span class=\"v on\">Costs you money</span></div><div class=\"frow in noise\"><span class=\"ftext\">Meta descriptions under 155 characters</span><span class=\"v on\">Noise</span></div><div class=\"frow in money\"><span class=\"ftext\">Competitor owns the comparison query</span><span class=\"v on\">Costs you money</span></div><div class=\"frow in first\"><span class=\"ftext\">Rebuild the category page as the answer</span><span class=\"v on\">Do first · 01</span></div></div>\n      </section>\n    </div>\n\n    <footer class=\"foot\">\n      <span>4 engines &#183; 412 prompts</span>\n      <span class=\"extra\">&#183; 1,284 answers parsed &#183; 4 findings triaged</span>\n    </footer>\n\n  </section>\n</div>"

function init(root) {
  var $P = 'fx-collection-reading-';
  function $sel(s) { return s.replace(/#([A-Za-z][\w-]*)/g, "#" + $P + "$1"); }
  function $id(x) { return root.querySelector("#" + $P + x); }
  function $q(s) { return root.querySelector($sel(s)); }
  function $qa(s) { return root.querySelectorAll($sel(s)); }
  var $dead = false, $ro = null;
  function $raf(f) { return requestAnimationFrame(function (t) { if (!$dead) f(t); }); }
  function $st(f, ms) { return setTimeout(function () { if (!$dead) f(); }, ms); }
  function $onResize(f) {
    if (typeof ResizeObserver === "undefined") { window.addEventListener("resize", f); return; }
    $ro = new ResizeObserver(function () { if (!$dead) f(); });
    $ro.observe(root);
  }
  $id('mets').innerHTML = '';   // server-rendered copy; the script rebuilds it
  $id('fbody').innerHTML = '';   // server-rendered copy; the script rebuilds it

  var METS = [
    { k: 'Prompts run',     v: 412,  fmt: 0 },
    { k: 'Engines queried', v: 4,    fmt: 0 },
    { k: 'Answers parsed',  v: 1284, fmt: 1 },
    { k: 'Citations mapped',v: 96,   fmt: 0 }
  ];

  var FINDINGS = [
    { t: 'Category page absent from 3 of 4 engines', v: 'Costs you money', c: 'money' },
    { t: 'Meta descriptions under 155 characters',   v: 'Noise',           c: 'noise' },
    { t: 'Competitor owns the comparison query',     v: 'Costs you money', c: 'money' },
    { t: 'Rebuild the category page as the answer',  v: 'Do first &#183; 01', c: 'first' }
  ];

  var CANCEL = {};
  var gen = 0;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var timeEl = $id('time');
  var barEl  = $id('bar');
  var doneEl = $id('done');
  var metsEl = $id('mets');
  var fbody  = $id('fbody');

  /* ---------- build once ---------- */
  var metNodes = METS.map(function (m) {
    var d = document.createElement('div');
    d.className = 'met';
    d.innerHTML = '<span class="mk">' + m.k + '</span><span class="mv">0</span>';
    metsEl.appendChild(d);
    return d.querySelector('.mv');
  });

  var fNodes = FINDINGS.map(function (f) {
    var d = document.createElement('div');
    d.className = 'frow';
    d.innerHTML = '<span class="ftext">' + f.t + '</span><span class="v">' + f.v + '</span>';
    fbody.appendChild(d);
    return d;
  });

  function sleep(ms, g) {
    return new Promise(function (resolve, reject) {
      $st(function () { g !== gen ? reject(CANCEL) : resolve(); }, ms);
    });
  }
  function ease(t) { return 1 - Math.pow(1 - t, 3); }
  function mmss(s) {
    var m = Math.floor(s / 60), r = Math.floor(s % 60);
    return (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r;
  }

  /* the machine half: fast, mechanical, over almost before you read it */
  function collect(g) {
    return new Promise(function (resolve, reject) {
      var DUR = 1700, start = null;
      (function tick(now) {
        if (g !== gen) return reject(CANCEL);
        if (start === null) start = now;
        var p = Math.min(1, (now - start) / DUR), e = ease(p);
        timeEl.textContent = mmss(e * 1200);
        barEl.style.width = (e * 100).toFixed(1) + '%';
        metNodes.forEach(function (el, i) {
          var val = Math.round(e * METS[i].v);
          el.textContent = METS[i].fmt ? val.toLocaleString('en-US') : val;
        });
        if (p < 1) $raf(tick); else resolve();
      })(performance.now());
    });
  }

  function resetAll() {
    timeEl.textContent = '00:00';
    barEl.style.width = '0%';
    doneEl.classList.remove('on');
    metNodes.forEach(function (el) { el.textContent = '0'; });
    fNodes.forEach(function (n) {
      n.classList.remove('in', 'money', 'noise', 'first');
      n.querySelector('.v').classList.remove('on');
    });
  }

  function finish() {
    timeEl.textContent = '20:00';
    barEl.style.width = '100%';
    doneEl.classList.add('on');
    metNodes.forEach(function (el, i) {
      el.textContent = METS[i].fmt ? METS[i].v.toLocaleString('en-US') : METS[i].v;
    });
    fNodes.forEach(function (n, i) {
      n.classList.add('in', FINDINGS[i].c);
      n.querySelector('.v').classList.add('on');
    });
  }

  async function run() {
    var g = ++gen;
    try {
      while (true) {
        resetAll();
        await sleep(400, g);

        // twenty minutes of gathering, compressed — the cheap half
        await collect(g);
        doneEl.classList.add('on');
        await sleep(700, g);

        // the reading: slower on purpose. the tempo change is the point.
        for (var i = 0; i < fNodes.length; i++) {
          fNodes[i].classList.add('in');
          await sleep(430, g);
          fNodes[i].classList.add(FINDINGS[i].c);
          fNodes[i].querySelector('.v').classList.add('on');
          await sleep(i === fNodes.length - 2 ? 620 : 420, g);
        }

        await sleep(4200, g);
      }
    } catch (err) {
      if (err !== CANCEL) throw err;
    }
  }

  if (reduce) finish(); else run();

  return function dispose() { $dead = true; if ($ro) $ro.disconnect(); gen++; };
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 * @framerIntrinsicWidth 900
 * @framerIntrinsicHeight 380
 */
export default function CollectionReading() {
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
            className="fx-collection-reading"
            role="figure"
            aria-label={LABEL}
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: HTML }}
        />
    )
}
