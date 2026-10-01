// @ts-nocheck
// Generated from robots-txt-light.html by tools/to-framer.mjs. Edit the HTML, then regenerate:
//   node tools/to-framer.mjs robots-txt-light
import { useEffect, useRef } from "react"

const LABEL = "Example Shopify robots.txt: crawl rules for adsbot-google disallowing checkout, cart, order, preview and private-access paths."

// Rendered as plain HTML so Framer's server render puts it in the page's own markup.
const HTML = "<style>@import url(\"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap\");\n.fx-robots-txt-light { position: relative; display: block; width: 100%; height: 100%; overflow: hidden; container-type: size; container-name: fx-robots-txt-light; }\n.fx-robots-txt-light, .fx-robots-txt-light * { margin: 0; padding: 0; box-sizing: border-box; }\n.fx-robots-txt-light { width: 100%; height: 100%; overflow: hidden; }\n.fx-robots-txt-light { background: transparent;\n    font-family: 'Geist', -apple-system, system-ui, sans-serif;\n    color: #000;\n    letter-spacing: -0.01em; }\n.fx-robots-txt-light .card { width: 100%;\n    height: 100%;\n    background: #F2F2F2;\n    border: 1px solid rgba(0,0,0,0.05);\n    border-radius: clamp(10px, 1.6cqh, 14px);\n    padding: clamp(10px, 1.8cqh, 14px);\n    display: flex;\n    flex-direction: column;\n    overflow: hidden; }\n.fx-robots-txt-light .editor { flex: 1;\n    min-height: 0;\n    background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,0.07);\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden; }\n.fx-robots-txt-light .editor-bar { display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 10px 14px;\n    border-bottom: 1px solid rgba(0,0,0,0.06);\n    flex-shrink: 0; }\n.fx-robots-txt-light .file-name { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 12px;\n    font-weight: 500;\n    color: #000; }\n.fx-robots-txt-light .file-tag { margin-left: auto;\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 10px;\n    font-weight: 500;\n    color: #FB3B24;\n    text-transform: uppercase;\n    letter-spacing: 0.04em; }\n.fx-robots-txt-light .file-dot { width: 6px; height: 6px;\n    border-radius: 50%;\n    background: #FB3B24;\n    animation: fx-robots-txt-light-pulse 1.6s ease-in-out infinite; }\n@keyframes fx-robots-txt-light-pulse { 0%,100% {opacity:1;} 50% {opacity:0.35;} }\n.fx-robots-txt-light .terminal { flex: 1;\n    min-height: 0;\n    overflow: hidden;\n    padding: 12px 16px; }\n.fx-robots-txt-light .line { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 12.5px;\n    line-height: 1.75;\n    white-space: pre;\n    opacity: 0;\n    transform: translateX(-10px);\n    transition: opacity 0.3s ease, transform 0.3s ease; }\n.fx-robots-txt-light .line.visible { opacity: 1; transform: translateX(0); }\n.fx-robots-txt-light .comment { color: rgba(0,0,0,0.4); }\n.fx-robots-txt-light .keyword { color: #FB3B24; font-weight: 500; }\n.fx-robots-txt-light .value { color: rgba(0,0,0,0.8); }\n.fx-robots-txt-light .cursor { display: inline-block;\n    width: 7px;\n    height: 14px;\n    background: #FB3B24;\n    vertical-align: text-bottom;\n    animation: fx-robots-txt-light-blink 1s step-end infinite;\n    opacity: 0;\n    transition: opacity 0.3s; }\n.fx-robots-txt-light .cursor.visible { opacity: 1; }\n@keyframes fx-robots-txt-light-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }\n@container fx-robots-txt-light (max-width: 480px) {\n.fx-robots-txt-light .editor-bar { padding: 8px 12px; }\n.fx-robots-txt-light .file-name { font-size: 11px; }\n.fx-robots-txt-light .terminal { padding: 10px 12px; }\n.fx-robots-txt-light .line { font-size: 10px;\n      line-height: 1.55;\n      white-space: pre-wrap;\n      word-break: break-all; }\n}</style><div class=\"card\">\n  <div class=\"editor\">\n    <div class=\"editor-bar\">\n      <span class=\"file-name\">robots.txt</span>\n      <span class=\"file-tag\"><span class=\"file-dot\"></span>crawl policy</span>\n    </div>\n    <div class=\"terminal\" id=\"fx-robots-txt-light-terminal\"><div class=\"line\"><span class=\"comment\"># Google adsbot ignores robots.txt unless specifically named!</span></div><div class=\"line\"><span class=\"keyword\">User-agent:</span><span class=\"value\"> adsbot-google</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /checkouts/</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /checkout</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /carts</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /orders</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /68864999739/checkouts</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /68864999739/orders</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /*?*oseid=*</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /*preview_theme_id*</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /*preview_script_id*</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /cdn/wpm/*.js</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /products/*-[a-f0-9]...-remote</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /*/products/*-[a-f0-9]...-remote</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /collections/*/products/*-...-remote</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /*/collections/*/products/*-...-remote</span></div><div class=\"line\"><span class=\"keyword\">Disallow:</span><span class=\"value\"> /sf_private_access_tokens</span><span class=\"cursor\" id=\"fx-robots-txt-light-cursor\"></span></div></div>\n  </div>\n</div>"

function init(root) {
  var $P = 'fx-robots-txt-light-';
  function $sel(s) { return s.replace(/#([A-Za-z][\w-]*)/g, "#" + $P + "$1"); }
  function $id(x) { return root.querySelector("#" + $P + x) || root.querySelector("#" + x); }
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
  $id('terminal').innerHTML = '';   // server-rendered copy; the script rebuilds it
function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const lines = [
  { type: 'comment', text: '# Google adsbot ignores robots.txt unless specifically named!' },
  { type: 'kv', key: 'User-agent:', value: ' adsbot-google' },
  { type: 'kv', key: 'Disallow:', value: ' /checkouts/' },
  { type: 'kv', key: 'Disallow:', value: ' /checkout' },
  { type: 'kv', key: 'Disallow:', value: ' /carts' },
  { type: 'kv', key: 'Disallow:', value: ' /orders' },
  { type: 'kv', key: 'Disallow:', value: ' /68864999739/checkouts' },
  { type: 'kv', key: 'Disallow:', value: ' /68864999739/orders' },
  { type: 'kv', key: 'Disallow:', value: ' /*?*oseid=*' },
  { type: 'kv', key: 'Disallow:', value: ' /*preview_theme_id*' },
  { type: 'kv', key: 'Disallow:', value: ' /*preview_script_id*' },
  { type: 'kv', key: 'Disallow:', value: ' /cdn/wpm/*.js' },
  { type: 'kv', key: 'Disallow:', value: ' /products/*-[a-f0-9]...-remote' },
  { type: 'kv', key: 'Disallow:', value: ' /*/products/*-[a-f0-9]...-remote' },
  { type: 'kv', key: 'Disallow:', value: ' /collections/*/products/*-...-remote' },
  { type: 'kv', key: 'Disallow:', value: ' /*/collections/*/products/*-...-remote' },
  { type: 'kv', key: 'Disallow:', value: ' /sf_private_access_tokens' },
];

const terminal = $id('terminal');

lines.forEach((line, i) => {
  const el = document.createElement('div');
  el.className = 'line';
  if (line.type === 'comment') {
    el.innerHTML = `<span class="comment">${escapeHtml(line.text)}</span>`;
  } else {
    el.innerHTML = `<span class="keyword">${escapeHtml(line.key)}</span><span class="value">${escapeHtml(line.value)}</span>`;
  }
  if (i === lines.length - 1) {
    el.innerHTML += '<span class="cursor" id="cursor"></span>';
  }
  terminal.appendChild(el);
});

const lineEls = $qa('.line');

lineEls.forEach((el, i) => {
  $st(() => {
    el.classList.add('visible');
    if (i === lines.length - 1) {
      $st(() => $id('cursor').classList.add('visible'), 200);
    }
  }, 200 + i * 90);
});

  return function dispose() { $dead = true; if ($ro) $ro.disconnect();  };
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 * @framerIntrinsicWidth 600
 * @framerIntrinsicHeight 420
 */
export default function RobotsTxt() {
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
            className="fx-robots-txt-light"
            role="figure"
            aria-label={LABEL}
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: HTML }}
        />
    )
}
