// @ts-nocheck
// Generated from competitor-set.html by tools/to-framer.mjs. Edit the HTML, then regenerate:
//   node tools/to-framer.mjs competitor-set
import { useEffect, useRef } from "react"

const LABEL = "Competitor set: five competitors typed from memory, judged one by one, against the three we test against, including one never listed that wins most buying queries."

// Rendered as plain HTML so Framer's server render puts it in the page's own markup.
const HTML = "<style>@import url(\"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap\");\n.fx-competitor-set { position: relative; display: block; width: 100%; height: 100%; overflow: hidden; container-type: size; container-name: fx-competitor-set; }\n.fx-competitor-set, .fx-competitor-set * { margin: 0; padding: 0; box-sizing: border-box; }\n.fx-competitor-set { width: 100%; height: 100%; overflow: hidden; }\n.fx-competitor-set { background: transparent;\n    font-family: 'Geist', -apple-system, system-ui, sans-serif;\n    color: #000;\n    letter-spacing: -0.01em; }\n.fx-competitor-set .stage { width: 100%; height: 100%;\n    display: flex; align-items: stretch; justify-content: center;\n    padding: clamp(6px, 1.2cqh, 10px); }\n.fx-competitor-set .shell { width: 100%; height: 100%;\n    max-width: 1080px;\n    background: #F2F2F2;\n    border: 1px solid rgba(0,0,0,0.05);\n    border-radius: 10px;\n    padding: clamp(9px, 1.5cqh, 13px);\n    display: flex; flex-direction: column;\n    gap: clamp(8px, 1.3cqh, 12px);\n    overflow: hidden; }\n.fx-competitor-set .cols { flex: 1; min-height: 0;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: clamp(8px, 1.2cqw, 13px); }\n.fx-competitor-set .panel { background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,0.07);\n    border-radius: 8px;\n    display: flex; flex-direction: column;\n    min-width: 0; min-height: 0;\n    overflow: hidden; }\n.fx-competitor-set .ph { display: flex; align-items: center; gap: 8px;\n    padding: clamp(8px, 1.3cqh, 12px) clamp(11px, 1.4cqw, 16px);\n    border-bottom: 1px solid rgba(0,0,0,0.06);\n    background: #F2F2F2;\n    flex-shrink: 0; }\n.fx-competitor-set .pt { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 9.5px; font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.07em;\n    color: rgba(0,0,0,0.45);\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.fx-competitor-set .pc { margin-left: auto;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 9.5px; font-weight: 500;\n    color: rgba(0,0,0,0.32);\n    white-space: nowrap; }\n.fx-competitor-set .panel.right .pt { color: #000; }\n.fx-competitor-set .rows { flex: 1; min-height: 0;\n    display: flex; flex-direction: column;\n    padding: 0 clamp(11px, 1.4cqw, 16px); }\n.fx-competitor-set .lrow { flex: 1; min-height: 0;\n    display: flex; align-items: center; gap: 8px;\n    border-bottom: 1px solid rgba(0,0,0,0.05);\n    opacity: 0; transform: translateY(5px);\n    transition: opacity 0.34s ease, transform 0.34s ease;\n    min-width: 0; }\n.fx-competitor-set .lrow:last-child { border-bottom: 0; }\n.fx-competitor-set .lrow.in { opacity: 1; transform: translateY(0); }\n.fx-competitor-set .lname { font-size: clamp(11.5px, 1.7cqh, 14.5px);\n    font-weight: 500;\n    color: rgba(0,0,0,0.82);\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n    transition: color 0.3s ease, text-decoration-color 0.3s ease;\n    text-decoration: line-through transparent; }\n.fx-competitor-set .lrow.drop .lname { color: rgba(0,0,0,0.28);\n    text-decoration: line-through rgba(0,0,0,0.28); }\n.fx-competitor-set .lrow.keep .lname { color: #000; font-weight: 600; }\n.fx-competitor-set .lreason { margin-left: auto;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: clamp(8.5px, 1.15cqh, 10px);\n    font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.05em;\n    color: rgba(0,0,0,0.3);\n    white-space: nowrap;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    flex-shrink: 0;\n    max-width: 58%;\n    overflow: hidden; text-overflow: ellipsis; }\n.fx-competitor-set .lreason.on { opacity: 1; }\n.fx-competitor-set .lrow.keep .lreason { color: rgba(0,0,0,0.5); }\n.fx-competitor-set .rrow { flex: 1; min-height: 0;\n    display: flex; flex-direction: column; justify-content: center;\n    gap: 2px;\n    border-bottom: 1px solid rgba(0,0,0,0.05);\n    border-left: 2px solid transparent;\n    padding-left: 0;\n    min-width: 0;\n    opacity: 0; transform: translateY(5px);\n    transition: opacity 0.38s ease, transform 0.38s ease, padding-left 0.3s ease; }\n.fx-competitor-set .rrow:last-child { border-bottom: 0; }\n.fx-competitor-set .rrow.in { opacity: 1; transform: translateY(0); }\n.fx-competitor-set .rrow.added { border-left-color: #FB3B24; padding-left: clamp(8px, 1cqw, 11px); }\n.fx-competitor-set .rname { font-size: clamp(12px, 1.8cqh, 15px);\n    font-weight: 600;\n    color: #000;\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n    transition: color 0.3s ease; }\n.fx-competitor-set .rrow.added .rname { color: #FB3B24; }\n.fx-competitor-set .rmeta { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: clamp(8.5px, 1.15cqh, 10px);\n    font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.05em;\n    color: rgba(0,0,0,0.36);\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n    transition: color 0.3s ease; }\n.fx-competitor-set .rrow.added .rmeta { color: #FB3B24; }\n.fx-competitor-set .swap .lname, .fx-competitor-set .swap .lreason, .fx-competitor-set .swap .rname, .fx-competitor-set .swap .rmeta { opacity: 0.1; }\n.fx-competitor-set .lname { transition: opacity 0.24s ease, color 0.3s ease, text-decoration-color 0.3s ease; }\n.fx-competitor-set .rname, .fx-competitor-set .rmeta { transition: opacity 0.24s ease, color 0.3s ease; }\n.fx-competitor-set .foot { display: flex; align-items: center; gap: 7px;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 9.5px; font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.06em;\n    color: rgba(0,0,0,0.38);\n    padding: 0 2px;\n    flex-shrink: 0;\n    white-space: nowrap; overflow: hidden; }\n.fx-competitor-set .foot .dot { width: 6px; height: 6px; border-radius: 50%;\n    background: #FB3B24;\n    animation: fx-competitor-set-pulse 1.7s ease-in-out infinite;\n    flex-shrink: 0; }\n@keyframes fx-competitor-set-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }\n@container fx-competitor-set (max-width: 760px) or (max-aspect-ratio: 1/1) {\n.fx-competitor-set .cols { grid-template-columns: 1fr; grid-template-rows: 1.35fr 1fr; }\n.fx-competitor-set .lreason { max-width: 50%; }\n.fx-competitor-set .foot .extra { display: none; }\n}\n@container fx-competitor-set (max-width: 430px) {\n.fx-competitor-set .lreason { font-size: 8px; max-width: 44%; }\n}\n@media (prefers-reduced-motion: reduce) {\n.fx-competitor-set .foot .dot { animation: none; }\n.fx-competitor-set .lrow, .fx-competitor-set .rrow, .fx-competitor-set .lname, .fx-competitor-set .lreason, .fx-competitor-set .rname, .fx-competitor-set .rmeta { transition: none; }\n}</style><div class=\"stage\">\n  <section class=\"shell\">\n\n    <div class=\"cols\">\n      <section class=\"panel left\">\n        <header class=\"ph\">\n          <span class=\"pt\">Typed from memory</span>\n          <span class=\"pc\">5 names</span>\n        </header>\n        <div class=\"rows\" id=\"fx-competitor-set-lrows\"><div class=\"lrow in\"><span class=\"lname\">NorthPeak Nutrition</span><span class=\"lreason\">Kept</span></div><div class=\"lrow\"><span class=\"lname\">Coreform</span><span class=\"lreason\">Different price tier</span></div><div class=\"lrow\"><span class=\"lname\">Halcyon Labs</span><span class=\"lreason\">Rivalry, not overlap</span></div><div class=\"lrow\"><span class=\"lname\">Basewell</span><span class=\"lreason\">Kept</span></div><div class=\"lrow\"><span class=\"lname\">Truleaf</span><span class=\"lreason\">Adjacent category</span></div></div>\n      </section>\n\n      <section class=\"panel right\">\n        <header class=\"ph\">\n          <span class=\"pt\">The set we test against</span>\n          <span class=\"pc\">3 competitors</span>\n        </header>\n        <div class=\"rows\" id=\"fx-competitor-set-rrows\"><div class=\"rrow\"><span class=\"rname\">NorthPeak Nutrition</span><span class=\"rmeta\">From your list · named by 4 of 4</span></div><div class=\"rrow\"><span class=\"rname\">Basewell</span><span class=\"rmeta\">From your list · named by 3 of 4</span></div><div class=\"rrow added\"><span class=\"rname\">Verdanta</span><span class=\"rmeta\">Not on your list · wins 61% of buying queries</span></div></div>\n      </section>\n    </div>\n\n    <footer class=\"foot\">\n      <span class=\"dot\"></span>\n      <span>Chosen, not auto-generated</span>\n      <span class=\"extra\">&#183; 3 of 14 candidates &#183; re-picked every scan</span>\n    </footer>\n\n  </section>\n</div>"

function init(root) {
  var $P = 'fx-competitor-set-';
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
  $id('lrows').innerHTML = '';   // server-rendered copy; the script rebuilds it
  $id('rrows').innerHTML = '';   // server-rendered copy; the script rebuilds it

  var SETS = [
    {
      typed: [
        { name: 'NorthPeak Nutrition', keep: true,  reason: 'Kept' },
        { name: 'Coreform',            keep: false, reason: 'Different price tier' },
        { name: 'Halcyon Labs',        keep: false, reason: 'Rivalry, not overlap' },
        { name: 'Basewell',            keep: true,  reason: 'Kept' },
        { name: 'Truleaf',             keep: false, reason: 'Adjacent category' }
      ],
      chosen: [
        { name: 'NorthPeak Nutrition', meta: 'From your list &#183; named by 4 of 4', added: false },
        { name: 'Basewell',            meta: 'From your list &#183; named by 3 of 4', added: false },
        { name: 'Verdanta',            meta: 'Not on your list &#183; wins 61% of buying queries', added: true }
      ]
    },
    {
      typed: [
        { name: 'Mineral Theory', keep: true,  reason: 'Kept' },
        { name: 'Duskline',       keep: false, reason: 'Adjacent category' },
        { name: 'Restform',       keep: false, reason: 'Rivalry, not overlap' },
        { name: 'Calmwell',       keep: true,  reason: 'Kept' },
        { name: 'Nocturne Co.',   keep: false, reason: 'Different price tier' }
      ],
      chosen: [
        { name: 'Calmwell',        meta: 'From your list &#183; named by 4 of 4', added: false },
        { name: 'Mineral Theory',  meta: 'From your list &#183; named by 3 of 4', added: false },
        { name: 'Slate &amp; Salt',    meta: 'Not on your list &#183; wins 54% of buying queries', added: true }
      ]
    }
  ];

  var CANCEL = {};
  var gen = 0;
  var idx = 0;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var lrows = $id('lrows');
  var rrows = $id('rrows');

  /* ---------- build persistent rows once ---------- */
  var lNodes = [], rNodes = [];
  for (var i = 0; i < 5; i++) {
    var lr = document.createElement('div');
    lr.className = 'lrow';
    lr.innerHTML = '<span class="lname"></span><span class="lreason"></span>';
    lrows.appendChild(lr);
    lNodes.push(lr);
  }
  for (var j = 0; j < 3; j++) {
    var rr = document.createElement('div');
    rr.className = 'rrow';
    rr.innerHTML = '<span class="rname"></span><span class="rmeta"></span>';
    rrows.appendChild(rr);
    rNodes.push(rr);
  }

  function sleep(ms, g) {
    return new Promise(function (resolve, reject) {
      $st(function () { g !== gen ? reject(CANCEL) : resolve(); }, ms);
    });
  }

  function setNames(set) {
    lNodes.forEach(function (n, i) {
      n.querySelector('.lname').textContent = set.typed[i].name;
      var r = n.querySelector('.lreason');
      r.innerHTML = set.typed[i].reason;
      r.classList.remove('on');
      n.classList.remove('keep', 'drop');
    });
    rNodes.forEach(function (n, i) {
      n.querySelector('.rname').innerHTML = set.chosen[i].name;
      n.querySelector('.rmeta').innerHTML = set.chosen[i].meta;
      n.classList.toggle('added', !!set.chosen[i].added);
    });
  }

  function showAll() {
    lNodes.forEach(function (n, i) {
      n.classList.add('in', SETS[idx].typed[i].keep ? 'keep' : 'drop');
      n.querySelector('.lreason').classList.add('on');
    });
    rNodes.forEach(function (n) { n.classList.add('in'); });
  }

  async function run() {
    var g = ++gen;
    try {
      while (true) {
        var set = SETS[idx];
        setNames(set);

        // 1. the list they typed appears, unjudged
        for (var i = 0; i < lNodes.length; i++) {
          lNodes[i].classList.add('in');
          await sleep(90, g);
        }
        await sleep(420, g);

        // 2. each name is judged — most of the list does not survive
        for (var k = 0; k < lNodes.length; k++) {
          lNodes[k].classList.add(set.typed[k].keep ? 'keep' : 'drop');
          lNodes[k].querySelector('.lreason').classList.add('on');
          await sleep(360, g);
        }
        await sleep(320, g);

        // 3. the real set, ending on the one they never listed
        for (var m = 0; m < rNodes.length; m++) {
          rNodes[m].classList.add('in');
          await sleep(m === 1 ? 520 : 300, g);
        }

        await sleep(3900, g);

        // 4. cross-fade to the next category — panels are never emptied
        lNodes.forEach(function (n) { n.classList.add('swap'); });
        rNodes.forEach(function (n) { n.classList.add('swap'); });
        await sleep(300, g);

        idx = (idx + 1) % SETS.length;
        setNames(SETS[idx]);
        rNodes.forEach(function (n) { n.classList.remove('in'); });
        lNodes.forEach(function (n) { n.classList.remove('swap'); });
        rNodes.forEach(function (n) { n.classList.remove('swap'); });
        await sleep(260, g);
      }
    } catch (err) {
      if (err !== CANCEL) throw err;
    }
  }

  if (reduce) {
    setNames(SETS[0]);
    showAll();
  } else {
    run();
  }

  return function dispose() { $dead = true; if ($ro) $ro.disconnect(); gen++; };
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 * @framerIntrinsicWidth 900
 * @framerIntrinsicHeight 380
 */
export default function CompetitorSet() {
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
            className="fx-competitor-set"
            role="figure"
            aria-label={LABEL}
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: HTML }}
        />
    )
}
