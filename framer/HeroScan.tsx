// @ts-nocheck
// Generated from hero-scan.html by tools/to-framer.mjs. Edit the HTML, then regenerate:
//   node tools/to-framer.mjs hero-scan
import { useEffect, useRef } from "react"

const LABEL = "Example AI visibility scan across ChatGPT, Claude, Gemini and Perplexity, showing which brands each answer names, the sources it cites, and share of voice"

// Rendered as plain HTML so Framer's server render puts it in the page's own markup.
const HTML = "<style>@import url(\"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap\");\n.fx-hero-scan { position: relative; display: block; width: 100%; height: 100%; overflow: hidden; container-type: inline-size; container-name: fx-hero-scan; }\n.fx-hero-scan, .fx-hero-scan * { margin: 0; padding: 0; box-sizing: border-box; }\n.fx-hero-scan { width: 100%; height: 100%; overflow: hidden; }\n.fx-hero-scan { background: transparent;\n    font-family: 'Geist', -apple-system, system-ui, sans-serif;\n    color: #000;\n    letter-spacing: -0.01em; }\n.fx-hero-scan .stage { width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: stretch;\n    justify-content: center;\n    padding: 10px; }\n.fx-hero-scan .shell { width: 100%;\n    height: 100%;\n    max-width: 920px;\n    background: #F2F2F2;\n    border: 1px solid rgba(0,0,0,0.05);\n    border-radius: 8px;\n    padding: 12px;\n    display: flex;\n    gap: 12px;\n    overflow: hidden; }\n.fx-hero-scan .sidebar { width: 210px;\n    flex-shrink: 0;\n    background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,0.07);\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden; }\n.fx-hero-scan .sb-brand { display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 14px 14px 12px; }\n.fx-hero-scan .sb-mark { width: 22px; height: 22px;\n    border-radius: 6px;\n    background: #FB3B24;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0; }\n.fx-hero-scan .sb-mark svg { width: 12px; height: 12px; }\n.fx-hero-scan .sb-name { font-size: 13px; font-weight: 600; letter-spacing: -0.02em; }\n.fx-hero-scan .sb-name span { color: rgba(0,0,0,0.4); font-weight: 500; }\n.fx-hero-scan .sb-new { margin: 0 12px 10px;\n    height: 34px;\n    display: flex;\n    align-items: center;\n    gap: 7px;\n    padding: 0 12px;\n    border: 1px solid rgba(0,0,0,0.1);\n    border-radius: 6px;\n    font-size: 12.5px;\n    font-weight: 500;\n    color: #000;\n    cursor: pointer;\n    background: #fff;\n    transition: border-color 0.15s ease; }\n.fx-hero-scan .sb-new:hover { border-color: #FB3B24; }\n.fx-hero-scan .sb-new:focus-visible { outline: 2px solid #FB3B24; outline-offset: 2px; }\n.fx-hero-scan .sb-new .plus { font-size: 15px; color: #FB3B24; line-height: 1; }\n.fx-hero-scan .sb-label { padding: 4px 15px 6px;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 10px;\n    color: rgba(0,0,0,0.4);\n    text-transform: uppercase;\n    letter-spacing: 0.06em; }\n.fx-hero-scan .sb-list { flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    scrollbar-width: none;\n    padding: 0 8px 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 3px; }\n.fx-hero-scan .sb-list::-webkit-scrollbar { display: none; }\n.fx-hero-scan .sb-foot { margin-top: auto;\n    padding: 11px 15px;\n    border-top: 1px solid rgba(0,0,0,0.06);\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 10.5px;\n    color: rgba(0,0,0,0.45);\n    letter-spacing: 0;\n    display: flex;\n    align-items: center;\n    gap: 7px;\n    white-space: nowrap;\n    flex-shrink: 0; }\n.fx-hero-scan .sb-foot .dot { width: 6px; height: 6px; border-radius: 50%;\n    background: #FB3B24;\n    flex-shrink: 0;\n    animation: fx-hero-scan-pulse 1.6s ease-in-out infinite; }\n.fx-hero-scan .sb-item { text-align: left;\n    background: transparent;\n    border: none;\n    border-radius: 6px;\n    padding: 8px 9px;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n    position: relative;\n    transition: background 0.15s ease;\n    width: 100%;\n    font-family: 'Geist', sans-serif; }\n.fx-hero-scan .sb-item:hover { background: #F2F2F2; }\n.fx-hero-scan .sb-item[aria-current=\"true\"] { background: #F2F2F2; }\n.fx-hero-scan .sb-item[aria-current=\"true\"]::before { content: '';\n    position: absolute;\n    left: 0; top: 8px; bottom: 8px;\n    width: 2px;\n    border-radius: 2px;\n    background: #FB3B24; }\n.fx-hero-scan .sb-item:focus-visible { outline: 2px solid #FB3B24; outline-offset: 1px; }\n.fx-hero-scan .sb-q { font-size: 12.5px;\n    font-weight: 500;\n    color: rgba(0,0,0,0.75);\n    letter-spacing: -0.01em;\n    line-height: 1.25;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n.fx-hero-scan .sb-item[aria-current=\"true\"] .sb-q { color: #000; }\n.fx-hero-scan .sb-win { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 10.5px;\n    color: rgba(0,0,0,0.45);\n    letter-spacing: 0;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n.fx-hero-scan .sb-win b { color: #FB3B24; font-weight: 500; }\n.fx-hero-scan .sb-dot { width: 5px; height: 5px; border-radius: 50%; background: #FB3B24; flex-shrink: 0; }\n.fx-hero-scan .main { flex: 1;\n    min-width: 0;\n    background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,0.07);\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden; }\n.fx-hero-scan .tabs { display: flex;\n    align-items: center;\n    gap: 6px;\n    min-width: 0;\n    overflow: hidden;\n    padding: 12px 16px;\n    border-bottom: 1px solid rgba(0,0,0,0.06); }\n.fx-hero-scan .tab { display: inline-flex;\n    align-items: center;\n    gap: 7px;\n    height: 34px;\n    padding: 0 12px;\n    background: #F2F2F2;\n    border: 1px solid transparent;\n    border-radius: 6px;\n    font-family: 'Geist', sans-serif;\n    font-size: 12.5px;\n    font-weight: 500;\n    letter-spacing: -0.01em;\n    color: rgba(0,0,0,0.45);\n    cursor: pointer;\n    transition: color 0.18s ease, border-color 0.18s ease;\n    white-space: nowrap; }\n.fx-hero-scan .tab .logo { width: 14px; height: 14px; flex-shrink: 0; opacity: 0.55; transition: opacity 0.18s ease; }\n.fx-hero-scan .tab .logo path { fill: currentColor; }\n.fx-hero-scan .tab[aria-selected=\"true\"] { color: #000; border-color: #FB3B24; }\n.fx-hero-scan .tab[aria-selected=\"true\"] .logo { opacity: 1; }\n.fx-hero-scan .tab:hover { color: #000; }\n.fx-hero-scan .tab:hover .logo { opacity: 1; }\n.fx-hero-scan .tab:focus-visible { outline: 2px solid #FB3B24; outline-offset: 2px; }\n.fx-hero-scan .p-meta { margin-left: auto;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 10.5px;\n    color: rgba(0,0,0,0.4);\n    letter-spacing: 0;\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n    white-space: nowrap; }\n.fx-hero-scan .p-meta .dot { width: 6px; height: 6px; border-radius: 50%;\n    background: #FB3B24;\n    animation: fx-hero-scan-pulse 1.6s ease-in-out infinite; }\n@keyframes fx-hero-scan-pulse { 0%,100% {opacity:1;} 50% {opacity:0.35;} }\n.fx-hero-scan .convo { flex: 1;\n    min-height: 0;\n    padding: 18px 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    overflow: hidden; }\n.fx-hero-scan .u-row { display: flex;\n    justify-content: flex-end;\n    opacity: 0;\n    transform: translateY(4px);\n    transition: opacity 0.3s ease, transform 0.3s ease; }\n.fx-hero-scan .u-row.on { opacity: 1; transform: translateY(0); }\n.fx-hero-scan .u-bubble { background: #F2F2F2;\n    border-radius: 8px;\n    padding: 9px 14px;\n    font-size: 14.5px;\n    font-weight: 500;\n    max-width: 80%; }\n.fx-hero-scan .a-row { display: flex; gap: 11px; align-items: flex-start; }\n.fx-hero-scan .avatar { width: 28px; height: 28px;\n    border-radius: 7px;\n    background: #F2F2F2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    margin-top: 1px; }\n.fx-hero-scan .avatar svg { width: 15px; height: 15px; display: none; }\n.fx-hero-scan .avatar svg.on { display: block; }\n.fx-hero-scan .avatar svg path { fill: #000; }\n.fx-hero-scan .a-body { flex: 1; min-width: 0; }\n.fx-hero-scan .thinking { display: none; gap: 4px; padding: 7px 0; }\n.fx-hero-scan .thinking.on { display: inline-flex; }\n.fx-hero-scan .thinking span { width: 5px; height: 5px; border-radius: 50%;\n    background: rgba(0,0,0,0.3);\n    animation: fx-hero-scan-think 1s ease-in-out infinite; }\n.fx-hero-scan .thinking span:nth-child(2) { animation-delay: 0.14s; }\n.fx-hero-scan .thinking span:nth-child(3) { animation-delay: 0.28s; }\n@keyframes fx-hero-scan-think {\n    0%, 60%, 100% { opacity: 0.25; transform: translateY(0); }\n    30% { opacity: 1; transform: translateY(-2px); }\n  }\n.fx-hero-scan .a-text { font-size: 15px;\n    font-weight: 400;\n    line-height: 1.6;\n    color: #000;\n    min-height: 78px; }\n.fx-hero-scan .a-text strong { font-weight: 600; color: #FB3B24; }\n.fx-hero-scan .cursor { display: none;\n    width: 7px; height: 16px;\n    background: rgba(0,0,0,0.75);\n    vertical-align: -2px;\n    margin-left: 2px; }\n.fx-hero-scan .cursor.on { display: inline-block; animation: fx-hero-scan-blink 1s steps(1) infinite; }\n@keyframes fx-hero-scan-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }\n.fx-hero-scan .sources { margin-top: 14px;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 6px; }\n.fx-hero-scan .src { display: inline-flex;\n    align-items: center;\n    gap: 5px;\n    height: 25px;\n    padding: 0 10px;\n    background: #F2F2F2;\n    border-radius: 5px;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 10.5px;\n    color: rgba(0,0,0,0.55);\n    letter-spacing: 0;\n    opacity: 0;\n    transform: translateY(3px);\n    transition: opacity 0.25s ease, transform 0.25s ease, color 0.15s ease;\n    white-space: nowrap; }\n.fx-hero-scan .src .fav { width: 6px; height: 6px; border-radius: 2px; background: rgba(0,0,0,0.25); flex-shrink: 0; }\n.fx-hero-scan .src.on { opacity: 1; transform: translateY(0); }\n.fx-hero-scan .src:hover { color: #000; }\n.fx-hero-scan .src.more { color: rgba(0,0,0,0.4); }\n.fx-hero-scan .src.more .fav { display: none; }\n.fx-hero-scan .receipt { margin-top: 16px;\n    padding-top: 15px;\n    border-top: 1px solid rgba(0,0,0,0.06);\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    flex-wrap: wrap;\n    opacity: 0;\n    transition: opacity 0.35s ease; }\n.fx-hero-scan .receipt.on { opacity: 1; }\n.fx-hero-scan .receipt-lbl { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 10px;\n    color: rgba(0,0,0,0.4);\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n    width: 100%;\n    margin-bottom: -4px; }\n.fx-hero-scan .meter { display: flex; gap: 3px; width: 100px; height: 7px; flex-shrink: 0; }\n.fx-hero-scan .seg { height: 100%; border-radius: 2px;\n    transition: width 0.5s cubic-bezier(.3,.7,.3,1), transform 0.15s ease; }\n.fx-hero-scan .seg.you { background: #FB3B24; }\n.fx-hero-scan .seg.a { background: rgba(0,0,0,0.3); }\n.fx-hero-scan .seg.b { background: rgba(0,0,0,0.13); }\n.fx-hero-scan .seg.hot { transform: scaleY(1.6); }\n.fx-hero-scan .pct { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 14px; font-weight: 500;\n    color: #FB3B24; letter-spacing: 0; white-space: nowrap; }\n.fx-hero-scan .meta { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 11px; color: rgba(0,0,0,0.45); letter-spacing: 0; white-space: nowrap; }\n.fx-hero-scan .meta .mk { transition: color 0.15s ease; }\n.fx-hero-scan .meta .mk.hot { color: #000; }\n.fx-hero-scan .composer { display: flex;\n    align-items: center;\n    gap: 10px;\n    margin: 2px 20px 20px;\n    background: #F2F2F2;\n    border-radius: 8px;\n    padding: 12px 8px 12px 16px;\n    pointer-events: none; }\n.fx-hero-scan .c-field { flex: 1; min-width: 0;\n    font-size: 14.5px; font-weight: 500;\n    white-space: nowrap; overflow: hidden;\n    display: flex; align-items: center; }\n.fx-hero-scan .c-ph { color: rgba(0,0,0,0.35); font-weight: 400; }\n.fx-hero-scan .c-ph.hidden { display: none; }\n.fx-hero-scan .c-caret { width: 1.5px; height: 17px; background: #000; margin-left: 1px; flex-shrink: 0; opacity: 0; }\n.fx-hero-scan .c-caret.on { animation: fx-hero-scan-blink 1.06s steps(1) infinite; }\n.fx-hero-scan .send { width: 36px; height: 36px;\n    border-radius: 7px;\n    background: #FB3B24; color: #fff;\n    display: flex; align-items: center; justify-content: center;\n    flex-shrink: 0;\n    transition: transform 0.15s ease, opacity 0.2s ease;\n    opacity: 0.5; }\n.fx-hero-scan .send.ready { opacity: 1; }\n.fx-hero-scan .send.pulse { animation: fx-hero-scan-sendPulse 0.3s ease; }\n@keyframes fx-hero-scan-sendPulse { 0% { transform: scale(1); } 45% { transform: scale(0.88); } 100% { transform: scale(1); } }\n.fx-hero-scan .send svg { width: 16px; height: 16px; }\n.fx-hero-scan .main.resetting .convo, .fx-hero-scan .main.resetting .composer { opacity: 0;\n    transition: opacity 0.4s ease; }\n@container fx-hero-scan (max-width: 640px) {\n.fx-hero-scan .shell { max-width: 480px; }\n.fx-hero-scan .sidebar { display: none; }\n.fx-hero-scan .tabs { padding: 11px 13px; }\n.fx-hero-scan .tab { padding: 0 10px; font-size: 11.5px; height: 32px; }\n.fx-hero-scan .convo { padding: 14px; gap: 12px; }\n.fx-hero-scan .a-text { font-size: 14px; min-height: 92px; }\n.fx-hero-scan .u-bubble { font-size: 13.5px; }\n.fx-hero-scan .composer { margin: 2px 14px 14px; }\n.fx-hero-scan .meta { white-space: normal; }\n}\n@container fx-hero-scan (max-width: 440px) {\n.fx-hero-scan .tab span { display: none; }\n.fx-hero-scan .tab { padding: 0 11px; gap: 0; }\n}</style><div class=\"stage\">\n  <section class=\"shell\">\n    <!-- Sidebar: scan history -->\n    <aside class=\"sidebar\">\n      <div class=\"sb-brand\">\n        <div class=\"sb-mark\">\n          <svg viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\"><path d=\"M7 1.5 8.6 5.4 12.5 7 8.6 8.6 7 12.5 5.4 8.6 1.5 7 5.4 5.4 7 1.5Z\" fill=\"#fff\"/></svg>\n        </div>\n        <div class=\"sb-name\">AI Scans <span>· Firon</span></div>\n      </div>\n      <button class=\"sb-new\" id=\"fx-hero-scan-sbNew\" type=\"button\"><span class=\"plus\">+</span> New scan</button>\n      <div class=\"sb-label\">Recent</div>\n      <div class=\"sb-list\" id=\"fx-hero-scan-sbList\" role=\"listbox\" aria-label=\"Scan history\"></div>\n      <div class=\"sb-foot\"><span class=\"dot\"></span>Live &#183; 42 prompts / hr</div>\n    </aside>\n\n    <!-- Main panel -->\n    <article class=\"main\" id=\"fx-hero-scan-main\">\n      <div class=\"tabs\" role=\"tablist\" aria-label=\"AI engines\">\n        <button class=\"tab\" id=\"fx-hero-scan-tab0\" role=\"tab\" aria-selected=\"true\">\n          <svg class=\"logo\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z\"/></svg>\n          <span>ChatGPT</span>\n        </button>\n        <button class=\"tab\" id=\"fx-hero-scan-tab1\" role=\"tab\" aria-selected=\"false\">\n          <svg class=\"logo\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4.709 15.955l4.72-2.647.079-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.607.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z\"/></svg>\n          <span>Claude</span>\n        </button>\n        <button class=\"tab\" id=\"fx-hero-scan-tab2\" role=\"tab\" aria-selected=\"false\">\n          <svg class=\"logo\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12\"/></svg>\n          <span>Gemini</span>\n        </button>\n        <button class=\"tab\" id=\"fx-hero-scan-tab3\" role=\"tab\" aria-selected=\"false\">\n          <svg class=\"logo\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.399 24v-6.465H1.5V7.188h2.808V0l7.129 6.135V.11h1.091v6.036L19.785 0Zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397Zm-1.099-.03-5.946 5.398v7.174l5.946-5.234V9.015ZM2.59 8.28v8.264h1.809v-4.489l4.11-3.775H2.59Zm13.652 0 4.11 3.775v4.489h1.057V8.28h-5.167ZM5.49 2.476v4.796h5.29L5.49 2.476Zm13.204 0L13.42 7.272h5.274V2.476Z\"/></svg>\n          <span>Perplexity</span>\n        </button>\n      </div>\n\n      <div class=\"convo\" id=\"fx-hero-scan-convo\" aria-live=\"polite\">\n        <div class=\"u-row\" id=\"fx-hero-scan-uRow\"><div class=\"u-bubble\" id=\"fx-hero-scan-uBubble\">Best clean protein subscription?</div></div>\n        <div class=\"a-row\">\n          <div class=\"avatar\" id=\"fx-hero-scan-avatar\">\n            <svg viewBox=\"0 0 24 24\" data-m=\"0\" class=\"on\" aria-hidden=\"true\"><path d=\"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.073zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z\"/></svg>\n            <svg viewBox=\"0 0 24 24\" data-m=\"1\" aria-hidden=\"true\"><path d=\"M4.709 15.955l4.72-2.647.079-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.607.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z\"/></svg>\n            <svg viewBox=\"0 0 24 24\" data-m=\"2\" aria-hidden=\"true\"><path d=\"M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12\"/></svg>\n            <svg viewBox=\"0 0 24 24\" data-m=\"3\" aria-hidden=\"true\"><path d=\"M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.399 24v-6.465H1.5V7.188h2.808V0l7.129 6.135V.11h1.091v6.036L19.785 0Zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397Zm-1.099-.03-5.946 5.398v7.174l5.946-5.234V9.015ZM2.59 8.28v8.264h1.809v-4.489l4.11-3.775H2.59Zm13.652 0 4.11 3.775v4.489h1.057V8.28h-5.167ZM5.49 2.476v4.796h5.29L5.49 2.476Zm13.204 0L13.42 7.272h5.274V2.476Z\"/></svg>\n          </div>\n          <div class=\"a-body\">\n            <div class=\"thinking\" id=\"fx-hero-scan-thinking\"><span></span><span></span><span></span></div>\n            <div class=\"a-text\" id=\"fx-hero-scan-aText\"><span id=\"fx-hero-scan-aPre\"></span><strong id=\"fx-hero-scan-aBrand\"></strong><span id=\"fx-hero-scan-aPost\"></span><span class=\"cursor\" id=\"fx-hero-scan-cursor\"></span></div>\n            <div class=\"sources\" id=\"fx-hero-scan-sources\">\n              <span class=\"src\"><span class=\"fav\"></span>reddit.com</span>\n              <span class=\"src\"><span class=\"fav\"></span>trustpilot.com</span>\n              <span class=\"src\"><span class=\"fav\"></span>healthline.com</span>\n              <span class=\"src more\" id=\"fx-hero-scan-srcMore\">+9 sources</span>\n            </div>\n            <div class=\"receipt\" id=\"fx-hero-scan-receipt\">\n              <div class=\"receipt-lbl\">AI Share of Voice</div>\n              <div class=\"meter\">\n                <div class=\"seg you\" data-k=\"0\" style=\"width:68%\"></div>\n                <div class=\"seg a\" data-k=\"1\" style=\"width:21%\"></div>\n                <div class=\"seg b\" data-k=\"2\" style=\"width:11%\"></div>\n              </div>\n              <span class=\"pct\">&#8599; <span id=\"fx-hero-scan-pctVal\">68</span>%</span>\n              <span class=\"meta\"><span class=\"mk\" data-k=\"0\" id=\"fx-hero-scan-mkYou\">You 68%</span> &#183; <span class=\"mk\" data-k=\"1\" id=\"fx-hero-scan-mkA\">Comp A 21%</span> &#183; <span class=\"mk\" data-k=\"2\" id=\"fx-hero-scan-mkB\">Comp B 11%</span></span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <footer class=\"composer\" aria-hidden=\"true\">\n        <div class=\"c-field\">\n          <span id=\"fx-hero-scan-cText\"></span>\n          <span class=\"c-caret\" id=\"fx-hero-scan-cCaret\"></span>\n          <span class=\"c-ph\" id=\"fx-hero-scan-cPh\">Ask anything&#8230;</span>\n        </div>\n        <div class=\"send\" id=\"fx-hero-scan-send\">\n          <svg viewBox=\"0 0 16 16\" fill=\"none\" aria-hidden=\"true\"><path d=\"M8 13V3M3.5 7.5 8 3l4.5 4.5\" stroke=\"#fff\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n        </div>\n      </footer>\n    </article>\n  </section>\n</div>"

function init(root) {
  var $P = 'fx-hero-scan-';
  function $sel(s) { return s.replace(/#([A-Za-z][\w-]*)/g, "#" + $P + "$1"); }
  function $id(x) { return root.querySelector("#" + $P + x); }
  function $q(s) { return root.querySelector($sel(s)); }
  function $qa(s) { return root.querySelectorAll($sel(s)); }

  var CANCEL = {};

  var SCANS = [
    { q: 'Best clean protein subscription?', brand: 'VitalBlend',  cat: 'clean protein', sov: 68, more: '+9 sources' },
    { q: 'Top magnesium supplement brand?',  brand: 'NightCap',    cat: 'magnesium supplements', sov: 71, more: '+6 sources' },
    { q: 'Best sustainable activewear?',      brand: 'TerraForm',   cat: 'sustainable activewear', sov: 64, more: '+11 sources' },
    { q: 'Cleanest meal-kit ingredients?',    brand: 'FreshLeaf',   cat: 'clean meal kits', sov: 59, more: '+8 sources' },
    { q: 'Best organic baby formula?',        brand: 'PureStart',   cat: 'organic baby formula', sov: 66, more: '+10 sources' }
  ];

  var ENGINE_TPL = [
    'I’d go with {b} — the clear pick for {cat} on sourcing, testing, and label transparency.',
    'For {cat}, {b} is the one I’d point you to: third-party tested, clear on sourcing, and honest about what’s on the label.',
    '{b} leads {cat}: verified sourcing and the most transparent labels in the category. Competitors trail.',
    'Top result: {b} [1][3] — cited across sources as the {cat} leader on transparency and sourcing.'
  ];
  var ENGINE_OFFSET = [0, -8, -13, -6];

  var main = $id('main');
  var sbList = $id('sbList');
  var sbNew = $id('sbNew');
  var tabs = [$id('tab0'), $id('tab1'),
              $id('tab2'), $id('tab3')];
  var avatarSvgs = $qa('#avatar svg');
  var uRow = $id('uRow');
  var uBubble = $id('uBubble');
  var thinking = $id('thinking');
  var aPre = $id('aPre');
  var aBrand = $id('aBrand');
  var aPost = $id('aPost');
  var cursor = $id('cursor');
  var srcChips = $qa('#sources .src');
  var srcMore = $id('srcMore');
  var receipt = $id('receipt');
  var pctVal = $id('pctVal');
  var segs = $qa('.meter .seg');
  var mkYou = $id('mkYou');
  var mkA = $id('mkA');
  var mkB = $id('mkB');
  var cText = $id('cText');
  var cCaret = $id('cCaret');
  var cPh = $id('cPh');
  var send = $id('send');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gen = 0, paused = false, idleTimer = null;
  var curScan = 0, curEngine = 0;

  /* --- build sidebar --- */
  var sbItems = [];
  SCANS.forEach(function (s, i) {
    var btn = document.createElement('button');
    btn.className = 'sb-item';
    btn.setAttribute('role', 'option');
    btn.setAttribute('aria-current', i === 0 ? 'true' : 'false');
    btn.innerHTML = '<span class="sb-q">' + s.q + '</span>' +
      '<span class="sb-win"><span class="sb-dot"></span>' + s.brand + ' &#183; <b>' + s.sov + '%</b></span>';
    sbList.appendChild(btn);
    sbItems.push(btn);
    btn.addEventListener('click', function () { manualScan(i); });
  });

  /* --- timing helpers --- */
  function tSleep(ms, g) {
    return new Promise(function (resolve, reject) {
      var acc = 0, last = performance.now();
      (function tick() {
        if (g !== gen) return reject(CANCEL);
        setTimeout(function () {
          var now = performance.now();
          if (!paused) acc += now - last;
          last = now;
          if (acc >= ms) resolve(); else tick();
        }, 36);
      })();
    });
  }
  function typeChars(setter, text, dur, g) {
    return new Promise(function (resolve, reject) {
      var acc = 0, last = performance.now();
      (function tick() {
        if (g !== gen) return reject(CANCEL);
        setTimeout(function () {
          var now = performance.now();
          if (!paused) acc += now - last;
          last = now;
          var p = Math.min(1, acc / dur);
          setter(text.slice(0, Math.round(p * text.length)));
          if (p >= 1) resolve(); else tick();
        }, 34);
      })();
    });
  }
  function streamWords(setter, text, g) {
    var words = text.split(' ');
    return new Promise(function (resolve, reject) {
      var i = 0;
      (function tick() {
        if (g !== gen) return reject(CANCEL);
        setTimeout(function () {
          if (!paused) { i++; setter(words.slice(0, i).join(' ') + (i < words.length ? ' ' : '')); }
          if (i >= words.length) resolve(); else tick();
        }, 40 + Math.random() * 44);
      })();
    });
  }

  /* --- data helpers --- */
  function engineSov(e, scan) {
    var you = Math.max(42, Math.min(88, scan.sov + ENGINE_OFFSET[e]));
    var rem = 100 - you;
    var a = Math.round(rem * 0.62);
    return { you: you, a: a, b: rem - a };
  }
  function answerParts(e, scan) {
    var t = ENGINE_TPL[e].replace('{cat}', scan.cat);
    var idx = t.indexOf('{b}');
    return { pre: t.slice(0, idx), post: t.slice(idx + 3) };
  }

  /* --- visual helpers --- */
  function setAvatar(i) { avatarSvgs.forEach(function (s) { s.classList.toggle('on', s.getAttribute('data-m') == String(i)); }); }
  function selectTab(i) { tabs.forEach(function (t, k) { t.setAttribute('aria-selected', k === i ? 'true' : 'false'); }); }
  function highlightSidebar(i) { sbItems.forEach(function (b, k) { b.setAttribute('aria-current', k === i ? 'true' : 'false'); }); }
  function setSov(sv, animate) {
    var total = sv.you + sv.a + sv.b;
    segs[0].style.width = (sv.you / total * 100) + '%';
    segs[1].style.width = (sv.a / total * 100) + '%';
    segs[2].style.width = (sv.b / total * 100) + '%';
    mkYou.textContent = 'You ' + sv.you + '%';
    mkA.textContent = 'Comp A ' + sv.a + '%';
    mkB.textContent = 'Comp B ' + sv.b + '%';
    if (!animate) { pctVal.textContent = sv.you; return; }
    var from = parseInt(pctVal.textContent, 10) || 0;
    var t0 = performance.now();
    (function step(now) {
      var p = Math.min(1, (now - t0) / 420);
      pctVal.textContent = Math.round(from + (sv.you - from) * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }
  function hideSources() { srcChips.forEach(function (c) { c.classList.remove('on'); }); }
  async function showSources(scan, g) {
    srcMore.textContent = scan.more;
    for (var i = 0; i < srcChips.length; i++) { srcChips[i].classList.add('on'); await tSleep(90, g); }
  }
  function resetComposer() { cText.textContent = ''; cPh.classList.remove('hidden'); cCaret.classList.remove('on'); send.classList.remove('ready', 'pulse'); }
  function clearAnswer() { aPre.textContent = ''; aBrand.textContent = ''; aPost.textContent = ''; }

  function staticFill(scanIdx, engineIdx) {
    var scan = SCANS[scanIdx];
    var p = answerParts(engineIdx, scan);
    aPre.textContent = p.pre; aBrand.textContent = scan.brand; aPost.textContent = p.post;
    srcMore.textContent = scan.more;
  }

  /* --- run one scan (shared) --- */
  async function runScan(scanIdx, engineIdx, opts, g) {
    opts = opts || {};
    curScan = scanIdx; curEngine = engineIdx;
    var scan = SCANS[scanIdx];
    highlightSidebar(scanIdx);
    selectTab(engineIdx);
    setAvatar(engineIdx);

    if (opts.typeQuery) {
      uRow.classList.remove('on');
      resetComposer();
      cPh.classList.add('hidden');
      cCaret.classList.add('on');
      await tSleep(360, g);
      await typeChars(function (s) { cText.textContent = s; if (s.length > 2) send.classList.add('ready'); }, scan.q, 1050, g);
      await tSleep(180, g);
      cCaret.classList.remove('on');
      send.classList.add('pulse');
      await tSleep(220, g);
      resetComposer();
    }

    uBubble.textContent = scan.q;
    uRow.classList.add('on');

    clearAnswer();
    cursor.classList.remove('on');
    hideSources();
    receipt.classList.remove('on');
    thinking.classList.add('on');
    await tSleep(opts.fast ? 420 : 720, g);
    thinking.classList.remove('on');
    cursor.classList.add('on');

    var parts = answerParts(engineIdx, scan);
    await streamWords(function (s) { aPre.textContent = s; }, parts.pre.trimEnd(), g);
    aPre.textContent = parts.pre;
    aBrand.textContent = scan.brand;
    await tSleep(110, g);
    await streamWords(function (s) { aPost.textContent = s; }, parts.post.trimStart(), g);
    aPost.textContent = parts.post;
    cursor.classList.remove('on');

    await showSources(scan, g);
    receipt.classList.add('on');
    setSov(engineSov(engineIdx, scan), true);
  }

  /* --- auto loop: walk the sidebar --- */
  async function autoLoop(startAt) {
    var g = ++gen;
    var i = startAt || 0;
    try {
      while (true) {
        main.classList.remove('resetting');
        await runScan(i, 0, { typeQuery: true }, g);
        await tSleep(2600, g);
        main.classList.add('resetting');
        await tSleep(440, g);
        i = (i + 1) % SCANS.length;
      }
    } catch (e) { if (e !== CANCEL) throw e; }
  }

  function pokeIdle(from) {
    if (idleTimer) clearTimeout(idleTimer);
    idleTimer = setTimeout(function () { autoLoop((from + 1) % SCANS.length); }, 15000);
  }

  /* --- manual interactions --- */
  function manualScan(scanIdx) {
    var g = ++gen; paused = false;
    main.classList.remove('resetting');
    runScan(scanIdx, 0, { typeQuery: false, fast: true }, g).catch(function (e) { if (e !== CANCEL) throw e; });
    pokeIdle(scanIdx);
  }
  function manualEngine(engineIdx) {
    var g = ++gen; paused = false;
    main.classList.remove('resetting');
    runScan(curScan, engineIdx, { typeQuery: false, fast: true }, g).catch(function (e) { if (e !== CANCEL) throw e; });
    pokeIdle(curScan);
  }

  /* --- reduced motion --- */
  if (reduceMotion) {
    highlightSidebar(0); selectTab(0); setAvatar(0);
    uBubble.textContent = SCANS[0].q; uRow.classList.add('on');
    staticFill(0, 0);
    srcChips.forEach(function (c) { c.classList.add('on'); });
    receipt.classList.add('on');
    setSov(engineSov(0, SCANS[0]), false);
    sbItems.forEach(function (b, i) { b.addEventListener('click', function () {
      highlightSidebar(i); uBubble.textContent = SCANS[i].q; staticFill(i, 0); setSov(engineSov(0, SCANS[i]), false); curScan = i;
    }); });
    tabs.forEach(function (t, e) { t.addEventListener('click', function () {
      selectTab(e); setAvatar(e); staticFill(curScan, e); setSov(engineSov(e, SCANS[curScan]), false);
    }); });
    return;
  }

  /* --- wire up --- */
  main.addEventListener('mouseenter', function () { paused = true; });
  main.addEventListener('mouseleave', function () { paused = false; });
  tabs.forEach(function (t, e) { t.addEventListener('click', function () { manualEngine(e); }); });
  sbNew.addEventListener('click', function () { manualScan(0); });

  function wire(els) {
    els.forEach(function (el) {
      var k = el.getAttribute('data-k');
      el.addEventListener('mouseenter', function () { $qa('[data-k="' + k + '"]').forEach(function (x) { x.classList.add('hot'); }); });
      el.addEventListener('mouseleave', function () { $qa('[data-k="' + k + '"]').forEach(function (x) { x.classList.remove('hot'); }); });
    });
  }
  wire(Array.prototype.slice.call(segs));
  wire(Array.prototype.slice.call($qa('.meta .mk')));

  autoLoop(0);

  return function dispose() { gen++; paused = true; if (idleTimer) clearTimeout(idleTimer); };
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 * @framerIntrinsicWidth 900
 * @framerIntrinsicHeight 560
 */
export default function HeroScan() {
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
            className="fx-hero-scan"
            role="figure"
            aria-label={LABEL}
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: HTML }}
        />
    )
}
