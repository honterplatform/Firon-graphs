// @ts-nocheck
// Generated from clean-state.html by tools/to-framer.mjs. Edit the HTML, then regenerate:
//   node tools/to-framer.mjs clean-state
import { useEffect, useRef } from "react"

const LABEL = "ChatGPT, Claude, Gemini and Perplexity tested from a clean state, with no history, memory, web access or sign-in, compared with a logged-in account, where every engine names the brand first."

// Rendered as plain HTML so Framer's server render puts it in the page's own markup.
const HTML = "<style>@import url(\"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap\");\n.fx-clean-state { position: relative; display: block; width: 100%; height: 100%; overflow: hidden; container-type: size; container-name: fx-clean-state; }\n.fx-clean-state, .fx-clean-state * { margin: 0; padding: 0; box-sizing: border-box; }\n.fx-clean-state { width: 100%; height: 100%; overflow: hidden; }\n.fx-clean-state { background: transparent;\n    font-family: 'Geist', -apple-system, system-ui, sans-serif;\n    color: #000;\n    letter-spacing: -0.01em; }\n.fx-clean-state .stage { width: 100%; height: 100%;\n    display: flex; align-items: stretch; justify-content: center;\n    padding: clamp(6px, 1.2cqh, 10px); }\n.fx-clean-state .shell { width: 100%; height: 100%;\n    max-width: 1080px;\n    background: #F2F2F2;\n    border: 1px solid rgba(0,0,0,0.05);\n    border-radius: 10px;\n    padding: clamp(9px, 1.5cqh, 13px);\n    display: flex; flex-direction: column;\n    gap: clamp(8px, 1.3cqh, 12px);\n    overflow: hidden; }\n.fx-clean-state .topbar { display: flex; align-items: center; gap: 10px;\n    flex-shrink: 0; min-width: 0; }\n.fx-clean-state .tlabel { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 9.5px; font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.07em;\n    color: rgba(0,0,0,0.38);\n    white-space: nowrap; }\n.fx-clean-state .seg { margin-left: auto;\n    display: flex; gap: 4px;\n    background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,0.07);\n    border-radius: 7px;\n    padding: 3px;\n    min-width: 0; }\n.fx-clean-state .sg { font-family: 'Geist', sans-serif;\n    font-size: clamp(10.5px, 1.4cqh, 12.5px);\n    font-weight: 500;\n    color: rgba(0,0,0,0.5);\n    background: transparent;\n    border: 0; border-radius: 5px;\n    padding: clamp(5px, 0.8cqh, 8px) clamp(9px, 1.2cqw, 14px);\n    cursor: pointer;\n    white-space: nowrap;\n    transition: background 0.22s ease, color 0.22s ease; }\n.fx-clean-state .sg:hover { color: rgba(0,0,0,0.75); }\n.fx-clean-state .sg.active { background: #FB3B24; color: #fff; }\n.fx-clean-state .sg.active:hover { color: #fff; }\n.fx-clean-state .grid4 { flex: 1; min-height: 0;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: clamp(7px, 1cqw, 11px); }\n.fx-clean-state .card { background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,0.07);\n    border-radius: 8px;\n    padding: clamp(9px, 1.5cqh, 14px) clamp(10px, 1.1cqw, 14px);\n    display: flex; flex-direction: column;\n    min-width: 0; min-height: 0;\n    position: relative;\n    overflow: hidden;\n    opacity: 0;\n    transform: translateY(7px);\n    transition: opacity 0.4s ease, transform 0.4s ease; }\n.fx-clean-state .card.in { opacity: 1; transform: translateY(0); }\n.fx-clean-state .card::after { content: '';\n    position: absolute; top: 0; bottom: 0; left: -40%;\n    width: 40%;\n    background: linear-gradient(90deg,\n      rgba(251,59,36,0) 0%, rgba(251,59,36,0.13) 50%, rgba(251,59,36,0) 100%);\n    opacity: 0;\n    pointer-events: none; }\n.fx-clean-state .card.wipe::after { animation: fx-clean-state-sweep 0.62s ease-out; }\n@keyframes fx-clean-state-sweep {\n    0%   { opacity: 1; transform: translateX(0); }\n    100% { opacity: 1; transform: translateX(350%); }\n  }\n.fx-clean-state .chead { display: flex; align-items: center; gap: 7px;\n    padding-bottom: clamp(7px, 1.1cqh, 10px);\n    border-bottom: 1px solid rgba(0,0,0,0.06);\n    flex-shrink: 0; min-width: 0; }\n.fx-clean-state .chead svg { width: clamp(13px, 1.8cqh, 16px); height: clamp(13px, 1.8cqh, 16px); flex-shrink: 0; }\n.fx-clean-state .chead svg path { fill: rgba(0,0,0,0.78); }\n.fx-clean-state .cname { font-size: clamp(11.5px, 1.6cqh, 13.5px);\n    font-weight: 600; color: #000;\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.fx-clean-state .states { flex: 1; min-height: 0;\n    display: flex; flex-direction: column;\n    justify-content: center;\n    gap: clamp(4px, 0.75cqh, 8px);\n    padding: clamp(6px, 1cqh, 10px) 0; }\n.fx-clean-state .st { display: flex; align-items: center; gap: 6px; min-width: 0; }\n.fx-clean-state .sk { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: clamp(8.5px, 1.15cqh, 10px);\n    font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em;\n    color: rgba(0,0,0,0.35);\n    white-space: nowrap; }\n.fx-clean-state .sv { margin-left: auto;\n    display: inline-flex; align-items: center; gap: 4px;\n    min-width: 0; }\n.fx-clean-state .ck { font-size: clamp(9px, 1.2cqh, 11px);\n    line-height: 1;\n    color: #FB3B24;\n    opacity: 0;\n    transform: scale(0.5);\n    transition: opacity 0.24s ease, transform 0.24s cubic-bezier(0.22,1,0.36,1); }\n.fx-clean-state .ck.on { opacity: 1; transform: scale(1); }\n.fx-clean-state .txt { font-size: clamp(10px, 1.35cqh, 12px);\n    font-weight: 500;\n    color: rgba(0,0,0,0.8);\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n    transition: color 0.22s ease, opacity 0.22s ease; }\n.fx-clean-state .card.swap .txt, .fx-clean-state .card.swap .vtxt { opacity: 0.12; }\n.fx-clean-state .stline { display: none; }\n.fx-clean-state .verdict { flex-shrink: 0;\n    border-top: 1px solid rgba(0,0,0,0.06);\n    padding-top: clamp(7px, 1.1cqh, 10px);\n    display: flex; flex-direction: column; gap: 3px;\n    min-width: 0; }\n.fx-clean-state .vtag { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 8.5px; font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.06em;\n    color: rgba(0,0,0,0.35);\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n    transition: color 0.22s ease; }\n.fx-clean-state .card.flattered .vtag { color: #FB3B24; }\n.fx-clean-state .vtxt { font-size: clamp(11px, 1.5cqh, 13px);\n    font-weight: 600;\n    color: rgba(0,0,0,0.82);\n    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n    transition: color 0.22s ease, opacity 0.22s ease; }\n.fx-clean-state .vtxt.absent { color: #FB3B24; }\n.fx-clean-state .foot { display: flex; align-items: center; gap: 7px;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 9.5px; font-weight: 500;\n    text-transform: uppercase; letter-spacing: 0.06em;\n    color: rgba(0,0,0,0.38);\n    padding: 0 2px;\n    flex-shrink: 0;\n    white-space: nowrap; overflow: hidden; }\n.fx-clean-state .foot .dot { width: 6px; height: 6px; border-radius: 50%;\n    background: #FB3B24;\n    animation: fx-clean-state-pulse 1.7s ease-in-out infinite;\n    flex-shrink: 0; }\n@keyframes fx-clean-state-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }\n@container fx-clean-state (max-width: 760px) or (max-aspect-ratio: 1/1) {\n.fx-clean-state .grid4 { grid-template-columns: 1fr; grid-template-rows: repeat(4, 1fr); }\n.fx-clean-state .card { display: grid;\n      grid-template-columns: minmax(0, 1fr) auto;\n      grid-template-areas: \"head verdict\" \"line verdict\";\n      align-items: center;\n      column-gap: clamp(8px, 2.5cqw, 16px);\n      row-gap: 3px;\n      padding: clamp(7px, 1.2cqh, 11px) clamp(10px, 2.5cqw, 14px); }\n.fx-clean-state .chead { grid-area: head;\n      width: auto;\n      padding-bottom: 0;\n      border-bottom: 0;\n      min-width: 0; }\n.fx-clean-state .states { display: none; }\n.fx-clean-state .stline { grid-area: line;\n      display: block;\n      min-width: 0;\n      font-family: 'Geist Mono', ui-monospace, monospace;\n      font-size: clamp(8.5px, 2.3cqw, 10px);\n      font-weight: 500;\n      color: rgba(0,0,0,0.4);\n      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n      transition: color 0.22s ease, opacity 0.22s ease; }\n.fx-clean-state .card.swap .stline { opacity: 0.12; }\n.fx-clean-state .stline b { color: #FB3B24; font-weight: 500; }\n.fx-clean-state .verdict { grid-area: verdict;\n      border-top: 0;\n      padding-top: 0;\n      align-items: flex-end;\n      text-align: right;\n      flex-shrink: 0; }\n.fx-clean-state .seg { padding: 2px; }\n.fx-clean-state .sg { padding: 5px 9px; font-size: 10.5px; }\n.fx-clean-state .tlabel { display: none; }\n}\n@container fx-clean-state (max-width: 420px) {\n.fx-clean-state .foot .extra { display: none; }\n}\n@media (prefers-reduced-motion: reduce) {\n.fx-clean-state .foot .dot { animation: none; }\n.fx-clean-state .card, .fx-clean-state .ck, .fx-clean-state .txt, .fx-clean-state .vtxt { transition: none; }\n.fx-clean-state .card.wipe::after { animation: none; }\n}</style><div class=\"stage\">\n  <section class=\"shell\">\n\n    <header class=\"topbar\">\n      <span class=\"tlabel\">Test conditions</span>\n      <div class=\"seg\" role=\"tablist\" aria-label=\"Test conditions\">\n        <button class=\"sg\" id=\"fx-clean-state-sgAcct\" type=\"button\" role=\"tab\" aria-selected=\"false\">Your logged-in account</button>\n        <button class=\"sg active\" id=\"fx-clean-state-sgClean\" type=\"button\" role=\"tab\" aria-selected=\"true\">Clean state</button>\n      </div>\n    </header>\n\n    <div class=\"grid4\" id=\"fx-clean-state-grid\"><article class=\"card in\"><div class=\"chead\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z\"></path></svg><span class=\"cname\">ChatGPT</span></div><div class=\"states\"><div class=\"st\"><span class=\"sk\">History</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Cleared</span></span></div><div class=\"st\"><span class=\"sk\">Memory</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Off</span></span></div><div class=\"st\"><span class=\"sk\">Web access</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Off</span></span></div><div class=\"st\"><span class=\"sk\">Account</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Signed out</span></span></div></div><div class=\"stline\"><b>✓</b> no history · no memory · no web · signed out</div><div class=\"verdict\"><span class=\"vtag\">What a stranger gets</span><span class=\"vtxt absent\">Not named</span></div></article><article class=\"card\"><div class=\"chead\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4.709 15.955l4.72-2.647.079-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.607.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z\"></path></svg><span class=\"cname\">Claude</span></div><div class=\"states\"><div class=\"st\"><span class=\"sk\">History</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Cleared</span></span></div><div class=\"st\"><span class=\"sk\">Memory</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Off</span></span></div><div class=\"st\"><span class=\"sk\">Web access</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Off</span></span></div><div class=\"st\"><span class=\"sk\">Account</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Signed out</span></span></div></div><div class=\"stline\"><b>✓</b> no history · no memory · no web · signed out</div><div class=\"verdict\"><span class=\"vtag\">What a stranger gets</span><span class=\"vtxt\">Named 4th</span></div></article><article class=\"card\"><div class=\"chead\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12\"></path></svg><span class=\"cname\">Gemini</span></div><div class=\"states\"><div class=\"st\"><span class=\"sk\">History</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Cleared</span></span></div><div class=\"st\"><span class=\"sk\">Memory</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Off</span></span></div><div class=\"st\"><span class=\"sk\">Web access</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Off</span></span></div><div class=\"st\"><span class=\"sk\">Account</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Signed out</span></span></div></div><div class=\"stline\"><b>✓</b> no history · no memory · no web · signed out</div><div class=\"verdict\"><span class=\"vtag\">What a stranger gets</span><span class=\"vtxt absent\">Not named</span></div></article><article class=\"card\"><div class=\"chead\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.399 24v-6.465H1.5V7.188h2.808V0l7.129 6.135V.11h1.091v6.036L19.785 0Zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397Zm-1.099-.03-5.946 5.398v7.174l5.946-5.234V9.015ZM2.59 8.28v8.264h1.809v-4.489l4.11-3.775H2.59Zm13.652 0 4.11 3.775v4.489h1.057V8.28h-5.167ZM5.49 2.476v4.796h5.29L5.49 2.476Zm13.204 0L13.42 7.272h5.274V2.476Z\"></path></svg><span class=\"cname\">Perplexity</span></div><div class=\"states\"><div class=\"st\"><span class=\"sk\">History</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Cleared</span></span></div><div class=\"st\"><span class=\"sk\">Memory</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Off</span></span></div><div class=\"st\"><span class=\"sk\">Web access</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Off</span></span></div><div class=\"st\"><span class=\"sk\">Account</span><span class=\"sv\"><span class=\"ck on\">✓</span><span class=\"txt\">Signed out</span></span></div></div><div class=\"stline\"><b>✓</b> no history · no memory · no web · signed out</div><div class=\"verdict\"><span class=\"vtag\">What a stranger gets</span><span class=\"vtxt\">Named 3rd</span></div></article></div>\n\n    <footer class=\"foot\">\n      <span class=\"dot\"></span>\n      <span>Fresh session per engine</span>\n      <span class=\"extra\">&#183; no history &#183; no memory &#183; no web access</span>\n    </footer>\n\n  </section>\n</div>"

function init(root) {
  var $P = 'fx-clean-state-';
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
  $id('grid').innerHTML = '';   // server-rendered copy; the script rebuilds it

  var OPENAI = 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z';
  var CLAUDE = 'M4.709 15.955l4.72-2.647.079-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.607.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z';
  var GEMINI = 'M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12';
  var PPLX = 'M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.399 24v-6.465H1.5V7.188h2.808V0l7.129 6.135V.11h1.091v6.036L19.785 0Zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397Zm-1.099-.03-5.946 5.398v7.174l5.946-5.234V9.015ZM2.59 8.28v8.264h1.809v-4.489l4.11-3.775H2.59Zm13.652 0 4.11 3.775v4.489h1.057V8.28h-5.167ZM5.49 2.476v4.796h5.29L5.49 2.476Zm13.204 0L13.42 7.272h5.274V2.476Z';

  // What each engine says about the brand under each condition.
  var ENGINES = [
    { name: 'ChatGPT',    path: OPENAI, clean: 'Not named',  acct: 'Named 1st' },
    { name: 'Claude',     path: CLAUDE, clean: 'Named 4th',  acct: 'Named 1st' },
    { name: 'Gemini',     path: GEMINI, clean: 'Not named',  acct: 'Named 1st' },
    { name: 'Perplexity', path: PPLX,   clean: 'Named 3rd',  acct: 'Named 1st' }
  ];

  var KEYS  = ['History', 'Memory', 'Web access', 'Account'];
  var CLEAN = ['Cleared', 'Off', 'Off', 'Signed out'];
  var ACCT  = ['47 chats', 'On', 'On', 'You'];

  var CLEAN_LINE = '<b>&#10003;</b> no history &#183; no memory &#183; no web &#183; signed out';
  var ACCT_LINE  = 'history on &#183; memory on &#183; web on &#183; signed in as you';

  var CANCEL = {};
  var gen = 0;
  var mode = 0;          // 0 = clean state, 1 = your logged-in account
  var pinned = false;
  var resumeTimer = null;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var grid    = $id('grid');
  var sgClean = $id('sgClean');
  var sgAcct  = $id('sgAcct');

  /* ---------- build the four cards once ---------- */
  var cards = [];
  ENGINES.forEach(function (e) {
    var card = document.createElement('article');
    card.className = 'card';
    var rows = KEYS.map(function (k) {
      return '<div class="st"><span class="sk">' + k + '</span>' +
             '<span class="sv"><span class="ck">&#10003;</span><span class="txt"></span></span></div>';
    }).join('');
    card.innerHTML =
      '<div class="chead"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + e.path + '"/></svg>' +
      '<span class="cname">' + e.name + '</span></div>' +
      '<div class="states">' + rows + '</div>' +
      '<div class="stline"></div>' +
      '<div class="verdict"><span class="vtag"></span><span class="vtxt"></span></div>';
    grid.appendChild(card);
    cards.push({ el: card, data: e });
  });

  function paint(m) {
    var vals = m ? ACCT : CLEAN;
    cards.forEach(function (c) {
      var txts = c.el.querySelectorAll('.txt');
      for (var i = 0; i < txts.length; i++) txts[i].textContent = vals[i];
      c.el.querySelector('.stline').innerHTML = m ? ACCT_LINE : CLEAN_LINE;
      c.el.querySelector('.vtag').textContent = m ? 'Flattered' : 'What a stranger gets';
      var v = c.el.querySelector('.vtxt');
      v.textContent = m ? c.data.acct : c.data.clean;
      v.classList.toggle('absent', !m && c.data.clean === 'Not named');
      c.el.classList.toggle('flattered', !!m);
      // checks only mean something in the clean condition
      var cks = c.el.querySelectorAll('.ck');
      for (var k = 0; k < cks.length; k++) cks[k].classList.toggle('on', !m);
    });
    sgClean.classList.toggle('active', !m);
    sgAcct.classList.toggle('active', !!m);
    sgClean.setAttribute('aria-selected', m ? 'false' : 'true');
    sgAcct.setAttribute('aria-selected', m ? 'true' : 'false');
  }

  function sleep(ms, g) {
    return new Promise(function (resolve, reject) {
      $st(function () { g !== gen ? reject(CANCEL) : resolve(); }, ms);
    });
  }

  /* ---------- switch condition with a cross-fade, and sweep when resetting ---------- */
  async function setMode(m, g, sweep) {
    mode = m;
    cards.forEach(function (c, i) {
      $st(function () { if (g === gen) c.el.classList.add('swap'); }, i * 55);
    });
    await sleep(230 + 3 * 55, g);

    paint(m);
    if (sweep) {
      cards.forEach(function (c, i) {
        $st(function () {
          if (g !== gen) return;
          c.el.classList.remove('wipe');
          void c.el.offsetWidth;
          c.el.classList.add('wipe');
        }, i * 70);
      });
    }
    cards.forEach(function (c, i) {
      $st(function () { if (g === gen) c.el.classList.remove('swap'); }, i * 55);
    });
    await sleep(300 + 3 * 55, g);
  }

  function armResume() {
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = $st(function () { pinned = false; run(); }, 9000);
  }

  sgClean.addEventListener('click', function () { pinned = true; mode = 0; run(); armResume(); });
  sgAcct.addEventListener('click',  function () { pinned = true; mode = 1; run(); armResume(); });

  /* ---------- main loop ---------- */
  async function run() {
    var g = ++gen;
    try {
      paint(mode);
      cards.forEach(function (c, i) {
        $st(function () { c.el.classList.add('in'); }, i * 110);
      });
      await sleep(500, g);

      if (pinned) return;

      while (true) {
        await sleep(4200, g);
        await setMode(1, g, false);     // this is what your own account shows you
        await sleep(3300, g);
        await setMode(0, g, true);      // wiped back to a clean session
      }
    } catch (err) {
      if (err !== CANCEL) throw err;
    }
  }

  if (reduce) {
    paint(0);
    cards.forEach(function (c) { c.el.classList.add('in'); });
  } else {
    run();
  }

  return function dispose() { $dead = true; if ($ro) $ro.disconnect(); gen++; if (resumeTimer) clearTimeout(resumeTimer); };
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 * @framerIntrinsicWidth 900
 * @framerIntrinsicHeight 380
 */
export default function CleanState() {
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
            className="fx-clean-state"
            role="figure"
            aria-label={LABEL}
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: HTML }}
        />
    )
}
