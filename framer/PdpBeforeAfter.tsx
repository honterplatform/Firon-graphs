// @ts-nocheck
// Generated from pdp-before-after.html by tools/to-framer.mjs. Edit the HTML, then regenerate:
//   node tools/to-framer.mjs pdp-before-after
import { useEffect, useRef } from "react"

const LABEL = "Product page before and after: an auto-pulled description with a missing H1 and empty alt text, then the same page with an H1, alt text and five declared facts: material, origin, style, dimensions and care."

// Rendered as plain HTML so Framer's server render puts it in the page's own markup.
const HTML = "<style>@import url(\"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap\");\n.fx-pdp-before-after { position: relative; display: block; width: 100%; height: 100%; overflow: hidden; container-type: size; container-name: fx-pdp-before-after; }\n.fx-pdp-before-after, .fx-pdp-before-after * { margin: 0; padding: 0; box-sizing: border-box; }\n.fx-pdp-before-after { width: 100%; height: 100%; overflow: hidden; }\n.fx-pdp-before-after { background: transparent;\n    font-family: 'Geist', -apple-system, system-ui, sans-serif;\n    color: #000;\n    letter-spacing: -0.01em; }\n.fx-pdp-before-after .stage { width: 100%; height: 100%;\n    display: flex; align-items: stretch; justify-content: center;\n    padding: 0; }\n.fx-pdp-before-after .shell { width: 100%; height: 100%;\n    background: #F2F2F2;\n    padding: 0;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: clamp(8px, 1.2cqw, 13px);\n    overflow: hidden; }\n.fx-pdp-before-after .panel { background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,0.07);\n    border-radius: 8px;\n    display: flex; flex-direction: column;\n    min-width: 0; min-height: 0;\n    overflow: hidden; }\n.fx-pdp-before-after .ph { display: flex; align-items: center; gap: 8px;\n    padding: clamp(8px, 1.3cqh, 12px) clamp(11px, 1.4cqw, 16px);\n    border-bottom: 1px solid rgba(0,0,0,0.06);\n    background: #F2F2F2;\n    flex-shrink: 0; }\n.fx-pdp-before-after .pt { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 9.5px; font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.07em;\n    color: #000;\n    white-space: nowrap; }\n.fx-pdp-before-after .pc { margin-left: auto;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 9.5px; font-weight: 500;\n    color: rgba(0,0,0,0.35);\n    white-space: nowrap;\n    transition: color 0.3s ease; }\n.fx-pdp-before-after .panel.after .ph { background: #FB3B24; border-bottom-color: #FB3B24; }\n.fx-pdp-before-after .panel.after .pt { color: #fff; }\n.fx-pdp-before-after .panel.after .pc { color: rgba(255,255,255,0.7); }\n.fx-pdp-before-after .panel.after .pc.fixed { color: #fff; }\n.fx-pdp-before-after .panel.after { transition: box-shadow 0.4s ease, border-color 0.4s ease; }\n.fx-pdp-before-after .panel.after.done { border-color: #FB3B24; box-shadow: inset 0 0 0 1px #FB3B24; }\n@keyframes fx-pdp-before-after-flash { from { background-color: rgba(251,59,36,0.18); } to { background-color: transparent; } }\n.fx-pdp-before-after .flash { animation: fx-pdp-before-after-flash 1s ease-out both; }\n.fx-pdp-before-after .pbody { flex: 1; min-height: 0;\n    display: flex;\n    gap: clamp(10px, 1.4cqw, 16px);\n    padding: clamp(10px, 1.6cqh, 14px) clamp(11px, 1.4cqw, 16px); }\n.fx-pdp-before-after .pimg { width: 40%;\n    flex-shrink: 0;\n    border-radius: 6px;\n    background: #F2F2F2 url(\"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&q=75\") center 20% / cover no-repeat;\n    position: relative;\n    overflow: hidden;\n    min-height: 0;\n    filter: grayscale(1);\n    transition: filter 0.7s ease; }\n.fx-pdp-before-after .pimg.alive { filter: none; }\n.fx-pdp-before-after .alt { position: absolute; left: 7px; bottom: 7px; right: 7px;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: clamp(8px, 1.1cqh, 9.5px);\n    font-weight: 500;\n    color: rgba(0,0,0,0.45);\n    background: rgba(255,255,255,0.92);\n    border: 1px solid rgba(0,0,0,0.08);\n    border-radius: 4px;\n    padding: 4px 6px;\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n    transition: color 0.3s ease, opacity 0.24s ease; }\n.fx-pdp-before-after .alt.written { color: #fff; background: #FB3B24; border-color: #FB3B24; }\n.fx-pdp-before-after .alt.dim { opacity: 0; }\n.fx-pdp-before-after .ptext { flex: 1; min-width: 0; min-height: 0;\n    display: flex; flex-direction: column;\n    gap: clamp(6px, 1cqh, 9px); }\n.fx-pdp-before-after .h1slot { min-height: clamp(20px, 3.2cqh, 26px);\n    display: flex; align-items: center;\n    border: 1px dashed rgba(0,0,0,0.25);\n    border-radius: 4px;\n    padding: 0 7px;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: clamp(8.5px, 1.15cqh, 10px);\n    font-weight: 500;\n    color: rgba(0,0,0,0.38);\n    letter-spacing: 0.03em;\n    transition: border-color 0.35s ease, padding 0.35s ease;\n    flex-shrink: 0; }\n.fx-pdp-before-after .h1slot .h1txt { display: none;\n    font-family: 'Geist', sans-serif;\n    font-size: clamp(13px, 2cqh, 17px);\n    font-weight: 600;\n    color: #000;\n    letter-spacing: -0.02em;\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.fx-pdp-before-after .h1slot.declared { border-color: transparent; padding: 0; }\n.fx-pdp-before-after .h1slot.declared .h1miss { display: none; }\n.fx-pdp-before-after .h1slot.declared .h1txt { display: block; animation: fx-pdp-before-after-rise 0.4s ease both; font-size: clamp(15px, 2.4cqh, 20px); }\n.fx-pdp-before-after .h1slot.checked::after { content: '\\2713';\n    margin-left: auto;\n    padding-left: 8px;\n    color: #FB3B24;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: clamp(11px, 1.6cqh, 14px);\n    animation: fx-pdp-before-after-rise 0.4s ease both; }\n@keyframes fx-pdp-before-after-rise { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }\n.fx-pdp-before-after .price { font-size: clamp(11.5px, 1.6cqh, 13.5px);\n    font-weight: 500;\n    color: rgba(0,0,0,0.75);\n    flex-shrink: 0; }\n.fx-pdp-before-after .copy { flex: 1; min-height: 0;\n    position: relative; }\n.fx-pdp-before-after .desc { position: absolute; inset: 0;\n    font-size: clamp(10.5px, 1.45cqh, 12.5px);\n    line-height: 1.45;\n    color: rgba(0,0,0,0.5);\n    overflow: hidden;\n    transition: opacity 0.3s ease; }\n.fx-pdp-before-after .desc.dim { opacity: 0; }\n.fx-pdp-before-after .tag { display: inline-block;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 8.5px; font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.06em;\n    color: rgba(0,0,0,0.4);\n    background: #F2F2F2;\n    border-radius: 3px;\n    padding: 2px 5px;\n    margin-bottom: 5px; }\n.fx-pdp-before-after .facts { position: absolute; inset: 0;\n    display: flex; flex-direction: column; justify-content: center;\n    gap: clamp(3px, 0.6cqh, 6px);\n    border-left: 2px solid #FB3B24;\n    padding-left: clamp(8px, 1cqw, 11px);\n    pointer-events: none; }\n.fx-pdp-before-after .fact { display: flex; align-items: baseline; gap: 8px;\n    min-width: 0;\n    opacity: 0; transform: translateY(4px);\n    transition: opacity 0.32s ease, transform 0.32s ease; }\n.fx-pdp-before-after .fact.in { opacity: 1; transform: none; }\n.fx-pdp-before-after .fk { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: clamp(8px, 1.1cqh, 9.5px);\n    font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em;\n    color: rgba(0,0,0,0.38);\n    width: clamp(56px, 6.5cqw, 74px);\n    flex-shrink: 0; }\n.fx-pdp-before-after .fv { font-size: clamp(10.5px, 1.45cqh, 12.5px);\n    font-weight: 500;\n    color: #000;\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n    min-width: 0; }\n.fx-pdp-before-after .cta { flex-shrink: 0;\n    height: clamp(26px, 4cqh, 32px);\n    border-radius: 5px;\n    background: rgba(0,0,0,0.06);\n    display: flex; align-items: center; justify-content: center;\n    font-size: clamp(10.5px, 1.4cqh, 12px);\n    font-weight: 500;\n    color: rgba(0,0,0,0.45); }\n.fx-pdp-before-after .pf { flex-shrink: 0;\n    display: flex; align-items: center; gap: 6px;\n    padding: clamp(7px, 1.1cqh, 10px) clamp(11px, 1.4cqw, 16px);\n    border-top: 1px solid rgba(0,0,0,0.06);\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: clamp(8.5px, 1.15cqh, 10px);\n    font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.05em;\n    color: rgba(0,0,0,0.4);\n    white-space: nowrap; overflow: hidden;\n    min-width: 0; }\n.fx-pdp-before-after .pf span { transition: color 0.3s ease; }\n.fx-pdp-before-after .pf .sep { color: rgba(0,0,0,0.2); }\n.fx-pdp-before-after .pf span.def::before { content: '\\2715  '; color: rgba(0,0,0,0.3); }\n.fx-pdp-before-after .pf span.ok { color: #000; }\n.fx-pdp-before-after .pf span.ok::before { content: '\\2713  '; color: #FB3B24; }\n.fx-pdp-before-after .read { flex-shrink: 0;\n    display: flex; flex-direction: column; gap: 3px;\n    padding: clamp(7px, 1.1cqh, 10px) clamp(11px, 1.4cqw, 16px);\n    border-top: 1px solid rgba(0,0,0,0.06);\n    background: #F2F2F2;\n    min-width: 0; }\n.fx-pdp-before-after .rhead { display: flex; align-items: center; gap: 6px; }\n.fx-pdp-before-after .rmark { display: inline-flex; width: 11px; height: 11px; }\n.fx-pdp-before-after .rmark svg { width: 100%; height: 100%; }\n.fx-pdp-before-after .rmark svg path { fill: rgba(0,0,0,0.55); }\n.fx-pdp-before-after .rlab { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 8.5px; font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.06em;\n    color: rgba(0,0,0,0.4);\n    white-space: nowrap; }\n.fx-pdp-before-after .rtxt { font-size: clamp(10.5px, 1.45cqh, 12.5px);\n    line-height: 1.35;\n    color: rgba(0,0,0,0.45);\n    min-height: 2.7em;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    transition: color 0.3s ease; }\n.fx-pdp-before-after .rtxt.good { color: #000; font-weight: 500; }\n.fx-pdp-before-after .rtxt .cur { display: inline-block; width: 2px; height: 0.95em;\n    background: #FB3B24; vertical-align: -0.12em; margin-left: 2px;\n    animation: fx-pdp-before-after-blink 0.9s step-end infinite; }\n@keyframes fx-pdp-before-after-blink { 50% { opacity: 0; } }\n@container fx-pdp-before-after (max-width: 760px) or (max-aspect-ratio: 1/1) {\n.fx-pdp-before-after .shell { grid-template-columns: 1fr; grid-template-rows: 1fr 1fr; }\n.fx-pdp-before-after .pimg { width: 34%; }\n.fx-pdp-before-after .cta { display: none; }\n.fx-pdp-before-after .pf { display: none; }\n.fx-pdp-before-after .rtxt { min-height: 1.35em; -webkit-line-clamp: 1; }\n.fx-pdp-before-after .fk { width: 52px; }\n}\n@media (prefers-reduced-motion: reduce) {\n.fx-pdp-before-after .h1slot.declared .h1txt { animation: none; }\n.fx-pdp-before-after .fact, .fx-pdp-before-after .desc, .fx-pdp-before-after .alt, .fx-pdp-before-after .h1slot { transition: none; }\n.fx-pdp-before-after .rtxt .cur { animation: none; }\n}</style><div class=\"stage\">\n  <section class=\"shell\">\n\n    <!-- BEFORE: the page as it stands -->\n    <article class=\"panel before\">\n      <header class=\"ph\">\n        <span class=\"pt\">Before</span>\n        <span class=\"pc\">As it stands</span>\n      </header>\n      <div class=\"pbody\">\n        <div class=\"pimg\"><span class=\"alt\">alt=\"\"</span></div>\n        <div class=\"ptext\">\n          <div class=\"h1slot\"><span class=\"h1miss\">&lt;h1&gt; missing</span></div>\n          <div class=\"price\">&#163;38</div>\n          <div class=\"copy\">\n            <div class=\"desc\">\n              <span class=\"tag\">Auto-pulled</span><br>\n              Premium quality t-shirt made from soft fabric. Comfortable and stylish. Suitable for everyday wear. Available in a range of sizes. Please allow 1&#8211;3 cm difference due to manual measurement.\n            </div>\n          </div>\n          <div class=\"cta\">Add to cart</div>\n        </div>\n      </div>\n      <footer class=\"pf\">\n        <span class=\"def\">H1 missing</span><span class=\"sep\">&#183;</span>\n        <span class=\"def\">alt empty</span><span class=\"sep extra\">&#183;</span>\n        <span class=\"def extra\">description: supplier feed</span>\n      </footer>\n      <div class=\"read\">\n        <div class=\"rhead\"><span class=\"rmark\"></span><span class=\"rlab\">What ChatGPT sees</span></div>\n        <div class=\"rtxt\">A white t-shirt. No material, origin or sizing given.</div>\n      </div>\n    </article>\n\n    <!-- AFTER: the same page with facts declared -->\n    <article class=\"panel after\">\n      <header class=\"ph\">\n        <span class=\"pt\">After</span>\n        <span class=\"pc\" id=\"fx-pdp-before-after-apc\">0 of 3 fixed</span>\n      </header>\n      <div class=\"pbody\">\n        <div class=\"pimg\" id=\"fx-pdp-before-after-aimg\"><span class=\"alt\" id=\"fx-pdp-before-after-aalt\">alt=\"\"</span></div>\n        <div class=\"ptext\">\n          <div class=\"h1slot\" id=\"fx-pdp-before-after-ah1\">\n            <span class=\"h1miss\">&lt;h1&gt; missing</span>\n            <span class=\"h1txt\">Heavyweight Crew Tee</span>\n          </div>\n          <div class=\"price\">&#163;38</div>\n          <div class=\"copy\">\n            <div class=\"desc\" id=\"fx-pdp-before-after-adesc\">\n              <span class=\"tag\">Auto-pulled</span><br>\n              Premium quality t-shirt made from soft fabric. Comfortable and stylish. Suitable for everyday wear. Available in a range of sizes. Please allow 1&#8211;3 cm difference due to manual measurement.\n            </div>\n            <div class=\"facts\" id=\"fx-pdp-before-after-afacts\">\n              <div class=\"fact\"><span class=\"fk\">Material</span><span class=\"fv\">100% organic Supima cotton, 220 gsm</span></div>\n              <div class=\"fact\"><span class=\"fk\">Origin</span><span class=\"fv\">Knit, dyed and sewn in Porto, Portugal</span></div>\n              <div class=\"fact\"><span class=\"fk\">Style</span><span class=\"fv\">Regular fit, crew neck, ribbed collar</span></div>\n              <div class=\"fact\"><span class=\"fk\">Dimensions</span><span class=\"fv\">Chest 52 cm &#183; Length 71 cm (M)</span></div>\n              <div class=\"fact\"><span class=\"fk\">Care</span><span class=\"fv\">Cold wash &#183; tumble low &#183; no bleach</span></div>\n            </div>\n          </div>\n          <div class=\"cta\">Add to cart</div>\n        </div>\n      </div>\n      <footer class=\"pf\">\n        <span id=\"fx-pdp-before-after-f1\" class=\"def\">H1 missing</span><span class=\"sep\">&#183;</span>\n        <span id=\"fx-pdp-before-after-f2\" class=\"def\">alt empty</span><span class=\"sep extra\">&#183;</span>\n        <span id=\"fx-pdp-before-after-f3\" class=\"def extra\">description: supplier feed</span>\n      </footer>\n      <div class=\"read\">\n        <div class=\"rhead\"><span class=\"rmark\"></span><span class=\"rlab\">What ChatGPT sees</span></div>\n        <div class=\"rtxt\" id=\"fx-pdp-before-after-aread\">A white t-shirt. No material, origin or sizing given.</div>\n      </div>\n    </article>\n\n  </section>\n</div>"

function init(root) {
  var $P = 'fx-pdp-before-after-';
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

  var CANCEL = {};
  var gen = 0;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var apc   = $id('apc');
  var aalt  = $id('aalt');
  var ah1   = $id('ah1');
  var adesc = $id('adesc');
  var facts = Array.prototype.slice.call($qa('#afacts .fact'));
  var f1 = $id('f1');
  var f2 = $id('f2');
  var f3 = $id('f3');
  var aimg = $id('aimg');
  var apanel = $q('.panel.after');
  var afacts = $id('afacts');

  function flash(el) {
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
  }
  function ok(el, text) { el.textContent = text; el.classList.remove('def'); el.classList.add('ok'); }
  function def(el, text) { el.textContent = text; el.classList.remove('ok'); el.classList.add('def'); }

  var ALT_WRITTEN = 'alt="White heavyweight crew tee, regular fit, front view"';
  var H1_TEXT = 'Heavyweight Crew Tee';
  var POOR = 'A white t-shirt. No material, origin or sizing given.';
  var GOOD = 'Heavyweight organic Supima cotton crew tee, 220 gsm, made in Porto, Portugal. Regular fit; chest 52 cm, length 71 cm in a medium. Cold wash, tumble low.';

  var OPENAI = 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z';
  Array.prototype.forEach.call($qa('.rmark'), function (m) {
    m.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + OPENAI + '"/></svg>';
  });

  var h1txt = ah1.querySelector('.h1txt');
  var aread = $id('aread');
  var fvals = facts.map(function (f) {
    var fv = f.querySelector('.fv');
    var v = fv.textContent;
    fv.setAttribute('data-v', v);
    return v;
  });

  /* typed, not faded — the facts are written by hand */
  function typeChars(el, text, g, ms) {
    return new Promise(function (resolve, reject) {
      var i = 0;
      el.textContent = '';
      (function step() {
        if (g !== gen) return reject(CANCEL);
        if (i >= text.length) return resolve();
        el.textContent = text.slice(0, ++i);
        $st(step, ms);
      })();
    });
  }
  /* streamed, like an engine answering */
  function streamWords(el, text, g, ms) {
    return new Promise(function (resolve, reject) {
      var words = text.split(' '), i = 0;
      el.innerHTML = '<span class="cur"></span>';
      (function step() {
        if (g !== gen) return reject(CANCEL);
        if (i >= words.length) { el.textContent = text; return resolve(); }
        i++;
        el.innerHTML = words.slice(0, i).join(' ') + '<span class="cur"></span>';
        $st(step, ms);
      })();
    });
  }

  function sleep(ms, g) {
    return new Promise(function (resolve, reject) {
      $st(function () { g !== gen ? reject(CANCEL) : resolve(); }, ms);
    });
  }

  function count(n) { apc.textContent = n + ' of 3 fixed'; apc.classList.toggle('fixed', n === 3); }

  /* the After panel begins identical to the Before */
  function resetAfter() {
    ah1.classList.remove('declared', 'checked');
    h1txt.textContent = '';
    facts.forEach(function (f) { f.querySelector('.fv').textContent = ''; });
    aread.textContent = POOR;
    aread.classList.remove('good');
    aalt.textContent = 'alt=""';
    aalt.classList.remove('written', 'dim');
    adesc.classList.remove('dim');
    facts.forEach(function (f) { f.classList.remove('in'); });
    aimg.classList.remove('alive');
    apanel.classList.remove('done');
    [ah1, aalt, afacts].forEach(function (el) { el.classList.remove('flash'); });
    def(f1, 'H1 missing');
    def(f2, 'alt empty');
    def(f3, 'description: supplier feed');
    count(0);
  }

  function finishAfter() {
    ah1.classList.add('declared', 'checked');
    h1txt.textContent = H1_TEXT;
    aalt.textContent = ALT_WRITTEN;
    aalt.classList.add('written');
    adesc.classList.add('dim');
    facts.forEach(function (f, i) { f.classList.add('in'); f.querySelector('.fv').textContent = fvals[i]; });
    aread.textContent = GOOD;
    aread.classList.add('good');
    aimg.classList.add('alive');
    apanel.classList.add('done');
    ok(f1, 'H1 declared');
    ok(f2, 'alt written');
    ok(f3, '5 facts declared');
    count(3);
  }

  async function run() {
    var g = ++gen;
    try {
      while (true) {
        resetAfter();
        await sleep(1500, g);

        // 1. declare the H1 — typed
        ah1.classList.add('declared');
        flash(ah1);
        await typeChars(h1txt, H1_TEXT, g, 28);
        ah1.classList.add('checked');
        ok(f1, 'H1 declared');
        count(1);
        await sleep(600, g);

        // 2. write the alt text
        aalt.classList.add('dim');
        await sleep(240, g);
        aalt.classList.add('written');
        aalt.classList.remove('dim');
        await typeChars(aalt, ALT_WRITTEN, g, 14);
        aimg.classList.add('alive');          // described, the photo comes to colour
        ok(f2, 'alt written');
        count(2);
        await sleep(600, g);

        // 3. replace the supplier paragraph with declared facts
        adesc.classList.add('dim');
        await sleep(320, g);
        flash(afacts);
        for (var i = 0; i < facts.length; i++) {
          facts[i].classList.add('in');
          await typeChars(facts[i].querySelector('.fv'), fvals[i], g, 12);
          await sleep(70, g);
        }
        ok(f3, '5 facts declared');
        count(3);
        apanel.classList.add('done');
        await sleep(450, g);

        // 4. the payoff: the same engine, reading the same page, now has something to say
        await streamWords(aread, GOOD, g, 62);
        aread.classList.add('good');

        await sleep(4400, g);

        // back to the broken state, so the fix replays
        facts.forEach(function (f) { f.classList.remove('in'); });
        await sleep(280, g);
      }
    } catch (err) {
      if (err !== CANCEL) throw err;
    }
  }

  if (reduce) finishAfter(); else run();

  return function dispose() { $dead = true; if ($ro) $ro.disconnect(); gen++; };
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 * @framerIntrinsicWidth 900
 * @framerIntrinsicHeight 450
 */
export default function PdpBeforeAfter() {
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
            className="fx-pdp-before-after"
            role="figure"
            aria-label={LABEL}
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: HTML }}
        />
    )
}
