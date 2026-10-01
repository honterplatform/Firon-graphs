// @ts-nocheck
// Generated from share-of-voice-light.html by tools/to-framer.mjs. Edit the HTML, then regenerate:
//   node tools/to-framer.mjs share-of-voice-light
import { useEffect, useRef } from "react"

const LABEL = "AI share of voice leaderboard for the query \"luxury candle brands\": citation share by brand across ChatGPT, Perplexity, Claude and Gemini, with 30-day change."

// Rendered as plain HTML so Framer's server render puts it in the page's own markup.
const HTML = "<style>@import url(\"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap\");\n.fx-share-of-voice-light { position: relative; display: block; width: 100%; height: 100%; overflow: hidden; container-type: size; container-name: fx-share-of-voice-light; }\n.fx-share-of-voice-light, .fx-share-of-voice-light * { margin: 0; padding: 0; box-sizing: border-box; }\n.fx-share-of-voice-light .fx-share-of-voice-light-body { width: 100%; height: 100%; overflow: hidden; }\n.fx-share-of-voice-light .fx-share-of-voice-light-body { background: transparent;\n    font-family: 'Geist', -apple-system, system-ui, sans-serif;\n    color: #000;\n    letter-spacing: -0.01em;\n    font-size: clamp(9px, 1.5cqh, 13px); }\n.fx-share-of-voice-light .stage { width: 100%;\n    height: 100%;\n    background: #F2F2F2;\n    border: 1px solid rgba(0,0,0,0.05);\n    border-radius: clamp(10px, 1.6cqh, 14px);\n    display: flex;\n    flex-direction: column;\n    gap: clamp(6px, 1cqh, 10px);\n    padding: clamp(8px, 1.4cqh, 12px);\n    overflow: hidden; }\n.fx-share-of-voice-light .header { background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,0.07);\n    border-radius: 8px;\n    padding: clamp(7px, 1cqh, 11px) clamp(10px, 1.5cqh, 14px);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 10px;\n    flex-shrink: 0; }\n.fx-share-of-voice-light .h-left { display: flex; align-items: center; gap: 8px; min-width: 0; }\n.fx-share-of-voice-light .h-icon { width: 1.7em; height: 1.7em;\n    border-radius: 6px;\n    background: rgba(251,59,36,0.1);\n    color: #FB3B24;\n    display: flex; align-items: center; justify-content: center;\n    font-size: 0.85em;\n    flex-shrink: 0; }\n.fx-share-of-voice-light .h-title-group { display: flex; flex-direction: column; gap: 1px; min-width: 0; }\n.fx-share-of-voice-light .h-title { font-size: 0.95em;\n    font-weight: 600;\n    color: #000;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n.fx-share-of-voice-light .h-sub { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 0.62em;\n    font-weight: 400;\n    color: rgba(0,0,0,0.4);\n    text-transform: uppercase;\n    letter-spacing: 0.06em; }\n.fx-share-of-voice-light .h-meta { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }\n.fx-share-of-voice-light .query-chip { font-size: 0.7em;\n    font-weight: 500;\n    color: rgba(0,0,0,0.5);\n    background: #F2F2F2;\n    padding: 4px 9px;\n    border-radius: 5px;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    white-space: nowrap; }\n.fx-share-of-voice-light .query-chip span { color: #000; }\n.fx-share-of-voice-light .live-pill { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 0.62em;\n    font-weight: 500;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    color: #FB3B24;\n    background: rgba(251,59,36,0.08);\n    border: 1px solid rgba(251,59,36,0.25);\n    padding: 4px 8px;\n    border-radius: 5px;\n    display: inline-flex;\n    align-items: center;\n    gap: 5px; }\n.fx-share-of-voice-light .live-dot { width: 5px; height: 5px;\n    border-radius: 50%;\n    background: #FB3B24;\n    animation: fx-share-of-voice-light-pulse 1.4s ease-in-out infinite; }\n@keyframes fx-share-of-voice-light-pulse {\n    0%, 100% { opacity: 1; transform: scale(1); }\n    50% { opacity: 0.4; transform: scale(0.7); }\n  }\n.fx-share-of-voice-light .table-wrap { flex: 1;\n    min-height: 0;\n    background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,0.07);\n    border-radius: 8px;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column; }\n.fx-share-of-voice-light .table-head { display: grid;\n    grid-template-columns: 0.4fr 1.6fr 0.7fr 0.7fr 0.7fr 0.7fr 1.6fr 1fr;\n    padding: clamp(6px, 1cqh, 10px) clamp(10px, 1.4cqh, 14px);\n    border-bottom: 1px solid rgba(0,0,0,0.06);\n    background: #F2F2F2;\n    flex-shrink: 0;\n    align-items: center;\n    gap: clamp(4px, 0.7cqh, 7px); }\n.fx-share-of-voice-light .th { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 0.6em;\n    font-weight: 500;\n    color: rgba(0,0,0,0.4);\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n.fx-share-of-voice-light .th.num, .fx-share-of-voice-light .th.right { text-align: right; }\n.fx-share-of-voice-light .th-llm { display: inline-flex;\n    align-items: center;\n    gap: 4px;\n    justify-content: center; }\n.fx-share-of-voice-light .llm-mark { width: 1em; height: 1em;\n    border-radius: 50%;\n    background: rgba(0,0,0,0.06);\n    color: rgba(0,0,0,0.55);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 0.65em;\n    font-weight: 700;\n    flex-shrink: 0; }\n.fx-share-of-voice-light .table-body { flex: 1;\n    min-height: 0;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column; }\n.fx-share-of-voice-light .row { display: grid;\n    grid-template-columns: 0.4fr 1.6fr 0.7fr 0.7fr 0.7fr 0.7fr 1.6fr 1fr;\n    padding: clamp(6px, 0.9cqh, 9px) clamp(10px, 1.4cqh, 14px);\n    border-bottom: 1px solid rgba(0,0,0,0.05);\n    align-items: center;\n    gap: clamp(4px, 0.7cqh, 7px);\n    flex: 1;\n    min-height: 0;\n    opacity: 0;\n    transform: translateY(4px);\n    transition: opacity 0.4s, transform 0.4s, background 0.4s, border-color 0.4s;\n    position: relative; }\n.fx-share-of-voice-light .row.show { opacity: 1; transform: translateY(0); }\n.fx-share-of-voice-light .row:last-child { border-bottom: none; }\n.fx-share-of-voice-light .row.you { background: rgba(251,59,36,0.05);\n    border-left: 3px solid #FB3B24;\n    padding-left: calc(clamp(10px, 1.4cqh, 14px) - 3px); }\n.fx-share-of-voice-light .cell-rank { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 0.85em;\n    font-weight: 500;\n    color: rgba(0,0,0,0.4);\n    font-variant-numeric: tabular-nums; }\n.fx-share-of-voice-light .row.you .cell-rank { color: #FB3B24; }\n.fx-share-of-voice-light .cell-brand { display: flex;\n    align-items: center;\n    gap: 7px;\n    min-width: 0; }\n.fx-share-of-voice-light .brand-mark { width: 1.5em; height: 1.5em;\n    border-radius: 5px;\n    background: #F2F2F2;\n    border: 1px solid rgba(0,0,0,0.06);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 0.75em;\n    font-weight: 600;\n    color: rgba(0,0,0,0.55);\n    flex-shrink: 0; }\n.fx-share-of-voice-light .row.you .brand-mark { background: rgba(251,59,36,0.12);\n    border-color: rgba(251,59,36,0.4);\n    color: #FB3B24; }\n.fx-share-of-voice-light .brand-name { font-size: 0.85em;\n    font-weight: 500;\n    color: rgba(0,0,0,0.8);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    min-width: 0; }\n.fx-share-of-voice-light .row.you .brand-name { color: #FB3B24;\n    font-weight: 600; }\n.fx-share-of-voice-light .you-tag { font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 0.55em;\n    font-weight: 500;\n    color: #FB3B24;\n    background: rgba(251,59,36,0.12);\n    padding: 2px 5px;\n    border-radius: 3px;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    flex-shrink: 0; }\n.fx-share-of-voice-light .cell-pct { font-size: 0.82em;\n    font-weight: 500;\n    color: rgba(0,0,0,0.7);\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    text-align: center;\n    font-variant-numeric: tabular-nums;\n    padding: 3px 4px;\n    border-radius: 4px;\n    transition: background 0.4s, color 0.4s; }\n.fx-share-of-voice-light .cell-pct.heat-1 { background: rgba(251,59,36,0.05); color: rgba(0,0,0,0.5); }\n.fx-share-of-voice-light .cell-pct.heat-2 { background: rgba(251,59,36,0.12); color: rgba(0,0,0,0.72); }\n.fx-share-of-voice-light .cell-pct.heat-3 { background: rgba(251,59,36,0.22); color: #000; }\n.fx-share-of-voice-light .cell-pct.heat-4 { background: rgba(251,59,36,0.34); color: #000; font-weight: 600; }\n.fx-share-of-voice-light .cell-sov { display: flex;\n    align-items: center;\n    gap: 7px;\n    min-width: 0; }\n.fx-share-of-voice-light .sov-bar-track { flex: 1;\n    height: 6px;\n    background: rgba(0,0,0,0.06);\n    border-radius: 3px;\n    overflow: hidden;\n    min-width: 30px; }\n.fx-share-of-voice-light .sov-bar-fill { height: 100%;\n    background: rgba(0,0,0,0.28);\n    width: 0;\n    transition: width 0.9s cubic-bezier(.2,.8,.2,1);\n    border-radius: 3px; }\n.fx-share-of-voice-light .row.you .sov-bar-fill { background: #FB3B24; }\n.fx-share-of-voice-light .sov-num { font-size: 0.82em;\n    font-weight: 500;\n    color: rgba(0,0,0,0.8);\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-variant-numeric: tabular-nums;\n    min-width: 3em;\n    text-align: right; }\n.fx-share-of-voice-light .row.you .sov-num { color: #FB3B24; }\n.fx-share-of-voice-light .cell-trend { display: flex;\n    align-items: center;\n    gap: 6px;\n    justify-content: flex-end;\n    min-width: 0; }\n.fx-share-of-voice-light .trend-spark { width: 32px;\n    height: 14px;\n    flex-shrink: 0; }\n.fx-share-of-voice-light .trend-val { font-size: 0.7em;\n    font-weight: 500;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-variant-numeric: tabular-nums;\n    white-space: nowrap; }\n.fx-share-of-voice-light .trend-val.up { color: rgba(0,0,0,0.65); }\n.fx-share-of-voice-light .trend-val.down { color: #FB3B24; }\n.fx-share-of-voice-light .trend-val.flat { color: rgba(0,0,0,0.35); }\n.fx-share-of-voice-light .footer { background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,0.07);\n    border-radius: 8px;\n    padding: clamp(6px, 0.9cqh, 9px) clamp(10px, 1.5cqh, 14px);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n    flex-shrink: 0;\n    font-size: 0.7em;\n    color: rgba(0,0,0,0.45);\n    font-family: 'Geist Mono', ui-monospace, monospace; }\n.fx-share-of-voice-light .footer-left { display: flex; gap: 14px; }\n.fx-share-of-voice-light .footer-left span b { color: #000;\n    font-weight: 500;\n    margin-left: 4px; }\n.fx-share-of-voice-light .footer-left span > span { color: rgba(0,0,0,0.3); }\n.fx-share-of-voice-light .footer-right { color: rgba(0,0,0,0.4); }\n.fx-share-of-voice-light .footer-right span { color: rgba(0,0,0,0.7); }\n@container fx-share-of-voice-light (max-width: 720px) {\n.fx-share-of-voice-light .table-head, .fx-share-of-voice-light .row { grid-template-columns: 0.4fr 1.6fr 0.7fr 0.7fr 1.6fr 1fr; }\n.fx-share-of-voice-light .col-pplx, .fx-share-of-voice-light .col-cl { display: none; }\n}\n@container fx-share-of-voice-light (max-width: 520px) {\n.fx-share-of-voice-light .table-head, .fx-share-of-voice-light .row { grid-template-columns: 0.4fr 2fr 1.6fr 1fr; }\n.fx-share-of-voice-light .col-pplx, .fx-share-of-voice-light .col-cl, .fx-share-of-voice-light .col-gpt, .fx-share-of-voice-light .col-gem { display: none; }\n.fx-share-of-voice-light .footer-right { display: none; }\n}</style><div class=\"fx-share-of-voice-light-body\"><div class=\"stage\">\n  <!-- Header -->\n  <div class=\"header\">\n    <div class=\"h-left\">\n      <div class=\"h-icon\">▤</div>\n      <div class=\"h-title-group\">\n        <div class=\"h-title\">AI Share of Voice · Leaderboard</div>\n        <div class=\"h-sub\">Cross-engine audit · 90d window</div>\n      </div>\n    </div>\n    <div class=\"h-meta\">\n      <div class=\"query-chip\">Query: <span>luxury candle brands</span></div>\n      <div class=\"live-pill\"><span class=\"live-dot\"></span>Live</div>\n    </div>\n  </div>\n\n  <!-- Table -->\n  <div class=\"table-wrap\">\n    <div class=\"table-head\">\n      <div class=\"th num\">#</div>\n      <div class=\"th\">Brand</div>\n      <div class=\"th col-gpt\"><div class=\"th-llm\"><div class=\"llm-mark gpt\">G</div>ChatGPT</div></div>\n      <div class=\"th col-pplx\"><div class=\"th-llm\"><div class=\"llm-mark pplx\">P</div>PPLX</div></div>\n      <div class=\"th col-cl\"><div class=\"th-llm\"><div class=\"llm-mark cl\">C</div>Claude</div></div>\n      <div class=\"th col-gem\"><div class=\"th-llm\"><div class=\"llm-mark gem\">M</div>Gemini</div></div>\n      <div class=\"th\">Share of Voice</div>\n      <div class=\"th right\">30d Δ</div>\n    </div>\n    <div class=\"table-body\" id=\"fx-share-of-voice-light-tableBody\"><div class=\"row\"><div class=\"cell-rank\">1</div><div class=\"cell-brand\"><div class=\"brand-mark\">D</div><div class=\"brand-name\">Diptyque</div></div><div class=\"cell-pct col-gpt heat-4\">42%</div><div class=\"cell-pct col-pplx heat-4\">38%</div><div class=\"cell-pct col-cl heat-4\">51%</div><div class=\"cell-pct col-gem heat-4\">36%</div><div class=\"cell-sov\"><div class=\"sov-bar-track\"><div class=\"sov-bar-fill\" data-w=\"94.7\"></div></div><div class=\"sov-num\">28.4%</div></div><div class=\"cell-trend\"><svg class=\"trend-spark\" viewBox=\"0 0 32 14\" preserveAspectRatio=\"none\"><polyline points=\"0,12 4.571428571428571,8.666666666666668 9.142857142857142,10.333333333333334 13.714285714285714,7 18.285714285714285,5.333333333333334 22.857142857142858,3.666666666666666 27.428571428571427,2 32,2\" fill=\"none\" stroke=\"rgba(0,0,0,0.35)\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></polyline></svg><div class=\"trend-val up\">↑ +4.2pt</div></div></div><div class=\"row\"><div class=\"cell-rank\">2</div><div class=\"cell-brand\"><div class=\"brand-mark\">B</div><div class=\"brand-name\">Boy Smells</div></div><div class=\"cell-pct col-gpt heat-3\">28%</div><div class=\"cell-pct col-pplx heat-4\">31%</div><div class=\"cell-pct col-cl heat-3\">22%</div><div class=\"cell-pct col-gem heat-3\">18%</div><div class=\"cell-sov\"><div class=\"sov-bar-track\"><div class=\"sov-bar-fill\" data-w=\"64.0\"></div></div><div class=\"sov-num\">19.2%</div></div><div class=\"cell-trend\"><svg class=\"trend-spark\" viewBox=\"0 0 32 14\" preserveAspectRatio=\"none\"><polyline points=\"0,12 4.571428571428571,7 9.142857142857142,12 13.714285714285714,7 18.285714285714285,7 22.857142857142858,2 27.428571428571427,7 32,7\" fill=\"none\" stroke=\"rgba(0,0,0,0.35)\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></polyline></svg><div class=\"trend-val up\">↑ +1.1pt</div></div></div><div class=\"row\"><div class=\"cell-rank\">3</div><div class=\"cell-brand\"><div class=\"brand-mark\">L</div><div class=\"brand-name\">Le Labo</div></div><div class=\"cell-pct col-gpt heat-3\">22%</div><div class=\"cell-pct col-pplx heat-2\">15%</div><div class=\"cell-pct col-cl heat-3\">19%</div><div class=\"cell-pct col-gem heat-2\">14%</div><div class=\"cell-sov\"><div class=\"sov-bar-track\"><div class=\"sov-bar-fill\" data-w=\"52.7\"></div></div><div class=\"sov-num\">15.8%</div></div><div class=\"cell-trend\"><svg class=\"trend-spark\" viewBox=\"0 0 32 14\" preserveAspectRatio=\"none\"><polyline points=\"0,2 4.571428571428571,2 9.142857142857142,12 13.714285714285714,2 18.285714285714285,2 22.857142857142858,12 27.428571428571427,2 32,2\" fill=\"none\" stroke=\"rgba(0,0,0,0.35)\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></polyline></svg><div class=\"trend-val up\">↑ +0.3pt</div></div></div><div class=\"row\"><div class=\"cell-rank\">4</div><div class=\"cell-brand\"><div class=\"brand-mark\">Y</div><div class=\"brand-name\">Byredo</div></div><div class=\"cell-pct col-gpt heat-2\">12%</div><div class=\"cell-pct col-pplx heat-2\">14%</div><div class=\"cell-pct col-cl heat-2\">13%</div><div class=\"cell-pct col-gem heat-2\">10%</div><div class=\"cell-sov\"><div class=\"sov-bar-track\"><div class=\"sov-bar-fill\" data-w=\"38.7\"></div></div><div class=\"sov-num\">11.6%</div></div><div class=\"cell-trend\"><svg class=\"trend-spark\" viewBox=\"0 0 32 14\" preserveAspectRatio=\"none\"><polyline points=\"0,2 4.571428571428571,2 9.142857142857142,7 13.714285714285714,7 18.285714285714285,12 22.857142857142858,7 27.428571428571427,12 32,12\" fill=\"none\" stroke=\"rgba(0,0,0,0.35)\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></polyline></svg><div class=\"trend-val down\">↓ -0.8pt</div></div></div><div class=\"row you\"><div class=\"cell-rank\">5</div><div class=\"cell-brand\"><div class=\"brand-mark\">✦</div><div class=\"brand-name\">Your Brand</div><div class=\"you-tag\">You</div></div><div class=\"cell-pct col-gpt heat-1\">8%</div><div class=\"cell-pct col-pplx heat-2\">12%</div><div class=\"cell-pct col-cl heat-1\">6%</div><div class=\"cell-pct col-gem heat-1\">4%</div><div class=\"cell-sov\"><div class=\"sov-bar-track\"><div class=\"sov-bar-fill\" data-w=\"27.3\"></div></div><div class=\"sov-num\">8.2%</div></div><div class=\"cell-trend\"><svg class=\"trend-spark\" viewBox=\"0 0 32 14\" preserveAspectRatio=\"none\"><polyline points=\"0,2 4.571428571428571,2 9.142857142857142,5.333333333333334 13.714285714285714,5.333333333333334 18.285714285714285,8.666666666666668 22.857142857142858,8.666666666666668 27.428571428571427,12 32,12\" fill=\"none\" stroke=\"#FB3B24\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></polyline></svg><div class=\"trend-val down\">↓ -2.1pt</div></div></div><div class=\"row\"><div class=\"cell-rank\">6</div><div class=\"cell-brand\"><div class=\"brand-mark\">O</div><div class=\"brand-name\">Otherland</div></div><div class=\"cell-pct col-gpt heat-1\">6%</div><div class=\"cell-pct col-pplx heat-1\">4%</div><div class=\"cell-pct col-cl heat-1\">8%</div><div class=\"cell-pct col-gem heat-2\">12%</div><div class=\"cell-sov\"><div class=\"sov-bar-track\"><div class=\"sov-bar-fill\" data-w=\"23.7\"></div></div><div class=\"sov-num\">7.1%</div></div><div class=\"cell-trend\"><svg class=\"trend-spark\" viewBox=\"0 0 32 14\" preserveAspectRatio=\"none\"><polyline points=\"0,12 4.571428571428571,7 9.142857142857142,7 13.714285714285714,7 18.285714285714285,2 22.857142857142858,2 27.428571428571427,2 32,2\" fill=\"none\" stroke=\"rgba(0,0,0,0.35)\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></polyline></svg><div class=\"trend-val up\">↑ +1.8pt</div></div></div><div class=\"row\"><div class=\"cell-rank\">7</div><div class=\"cell-brand\"><div class=\"brand-mark\">J</div><div class=\"brand-name\">Jo Malone</div></div><div class=\"cell-pct col-gpt heat-1\">5%</div><div class=\"cell-pct col-pplx heat-1\">5%</div><div class=\"cell-pct col-cl heat-1\">6%</div><div class=\"cell-pct col-gem heat-1\">6%</div><div class=\"cell-sov\"><div class=\"sov-bar-track\"><div class=\"sov-bar-fill\" data-w=\"18.0\"></div></div><div class=\"sov-num\">5.4%</div></div><div class=\"cell-trend\"><svg class=\"trend-spark\" viewBox=\"0 0 32 14\" preserveAspectRatio=\"none\"><polyline points=\"0,12 4.571428571428571,12 9.142857142857142,12 13.714285714285714,12 18.285714285714285,12 22.857142857142858,12 27.428571428571427,12 32,12\" fill=\"none\" stroke=\"rgba(0,0,0,0.35)\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></polyline></svg><div class=\"trend-val flat\">→ 0.0pt</div></div></div><div class=\"row\"><div class=\"cell-rank\">8</div><div class=\"cell-brand\"><div class=\"brand-mark\">M</div><div class=\"brand-name\">Marquee &amp; Co</div></div><div class=\"cell-pct col-gpt heat-1\">4%</div><div class=\"cell-pct col-pplx heat-1\">3%</div><div class=\"cell-pct col-cl heat-1\">4%</div><div class=\"cell-pct col-gem heat-1\">6%</div><div class=\"cell-sov\"><div class=\"sov-bar-track\"><div class=\"sov-bar-fill\" data-w=\"14.3\"></div></div><div class=\"sov-num\">4.3%</div></div><div class=\"cell-trend\"><svg class=\"trend-spark\" viewBox=\"0 0 32 14\" preserveAspectRatio=\"none\"><polyline points=\"0,12 4.571428571428571,12 9.142857142857142,12 13.714285714285714,12 18.285714285714285,12 22.857142857142858,12 27.428571428571427,12 32,12\" fill=\"none\" stroke=\"rgba(0,0,0,0.35)\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></polyline></svg><div class=\"trend-val up\">↑ +0.4pt</div></div></div></div>\n  </div>\n\n  <!-- Footer -->\n  <div class=\"footer\">\n    <div class=\"footer-left\">\n      <span><span>// citations sampled:</span><b id=\"fx-share-of-voice-light-footTotal\">12,847</b></span>\n      <span><span>// engines:</span><b>4</b></span>\n      <span><span>// queries:</span><b>128</b></span>\n    </div>\n    <div class=\"footer-right\">Refreshed <span>just now</span></div>\n  </div>\n</div></div>"

function init(root) {
  var $P = 'fx-share-of-voice-light-';
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
  function $onLoad(f) {
    if (document.readyState === "complete") { $st(f, 0); return; }
    window.addEventListener("load", f, { once: true });
  }
  $id('tableBody').innerHTML = '';   // server-rendered copy; the script rebuilds it
var BRANDS = [
  { name: 'Diptyque',     mark: 'D', gpt: 42, pplx: 38, cl: 51, gem: 36, sov: 28.4, trend: 4.2,  spark: [22, 24, 23, 25, 26, 27, 28, 28] },
  { name: 'Boy Smells',   mark: 'B', gpt: 28, pplx: 31, cl: 22, gem: 18, sov: 19.2, trend: 1.1,  spark: [18, 19, 18, 19, 19, 20, 19, 19] },
  { name: 'Le Labo',      mark: 'L', gpt: 22, pplx: 15, cl: 19, gem: 14, sov: 15.8, trend: 0.3,  spark: [16, 16, 15, 16, 16, 15, 16, 16] },
  { name: 'Byredo',       mark: 'Y', gpt: 12, pplx: 14, cl: 13, gem: 10, sov: 11.6, trend: -0.8, spark: [13, 13, 12, 12, 11, 12, 11, 11] },
  { name: 'Your Brand',   mark: '✦', gpt: 8,  pplx: 12, cl: 6,  gem: 4,  sov: 8.2,  trend: -2.1, spark: [11, 11, 10, 10, 9, 9, 8, 8], you: true },
  { name: 'Otherland',    mark: 'O', gpt: 6,  pplx: 4,  cl: 8,  gem: 12, sov: 7.1,  trend: 1.8,  spark: [5, 6, 6, 6, 7, 7, 7, 7] },
  { name: 'Jo Malone',    mark: 'J', gpt: 5,  pplx: 5,  cl: 6,  gem: 6,  sov: 5.4,  trend: 0.0,  spark: [5, 5, 5, 5, 5, 5, 5, 5] },
  { name: 'Marquee & Co', mark: 'M', gpt: 4,  pplx: 3,  cl: 4,  gem: 6,  sov: 4.3,  trend: 0.4,  spark: [4, 4, 4, 4, 4, 4, 4, 4] }
];

var maxSov = 30;

function heatClass(v) {
  if (v >= 30) return 'heat-4';
  if (v >= 18) return 'heat-3';
  if (v >= 10) return 'heat-2';
  return 'heat-1';
}

function trendClass(v) {
  if (v > 0.2) return 'up';
  if (v < -0.2) return 'down';
  return 'flat';
}

function trendArrow(v) {
  if (v > 0.2) return '↑';
  if (v < -0.2) return '↓';
  return '→';
}

function trendStr(v) {
  var arrow = trendArrow(v);
  var num = (v > 0 ? '+' : '') + v.toFixed(1) + 'pt';
  return arrow + ' ' + num;
}

function buildSpark(values, isYou) {
  var W = 32, H = 14;
  var min = Math.min.apply(null, values);
  var max = Math.max.apply(null, values);
  var range = Math.max(0.5, max - min);
  var points = values.map(function(v, i) {
    var x = (i / (values.length - 1)) * W;
    var y = H - ((v - min) / range) * (H - 4) - 2;
    return x + ',' + y;
  }).join(' ');
  var color = isYou ? '#FB3B24' : 'rgba(0,0,0,0.35)';
  return '<svg class="trend-spark" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none">' +
    '<polyline points="' + points + '" fill="none" stroke="' + color + '" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>';
}

function renderTable() {
  var tbody = $id('tableBody');
  tbody.innerHTML = '';
  BRANDS.forEach(function(b, i) {
    var row = document.createElement('div');
    row.className = 'row' + (b.you ? ' you' : '');
    row.innerHTML =
      '<div class="cell-rank">' + (i + 1) + '</div>' +
      '<div class="cell-brand">' +
        '<div class="brand-mark">' + b.mark + '</div>' +
        '<div class="brand-name">' + b.name + '</div>' +
        (b.you ? '<div class="you-tag">You</div>' : '') +
      '</div>' +
      '<div class="cell-pct col-gpt ' + heatClass(b.gpt) + '">' + b.gpt + '%</div>' +
      '<div class="cell-pct col-pplx ' + heatClass(b.pplx) + '">' + b.pplx + '%</div>' +
      '<div class="cell-pct col-cl ' + heatClass(b.cl) + '">' + b.cl + '%</div>' +
      '<div class="cell-pct col-gem ' + heatClass(b.gem) + '">' + b.gem + '%</div>' +
      '<div class="cell-sov">' +
        '<div class="sov-bar-track"><div class="sov-bar-fill" data-w="' + ((b.sov / maxSov) * 100).toFixed(1) + '"></div></div>' +
        '<div class="sov-num">' + b.sov.toFixed(1) + '%</div>' +
      '</div>' +
      '<div class="cell-trend">' +
        buildSpark(b.spark, b.you) +
        '<div class="trend-val ' + trendClass(b.trend) + '">' + trendStr(b.trend) + '</div>' +
      '</div>';
    tbody.appendChild(row);
  });
}

function tweenFooterTotal() {
  var el = $id('footTotal');
  var target = 12847;
  var start = Date.now();
  var dur = 1400;
  function step() {
    var t = Math.min(1, (Date.now() - start) / dur);
    var v = Math.round(target * (1 - Math.pow(1 - t, 3)));
    el.textContent = v.toLocaleString();
    if (t < 1) $raf(step);
  }
  $raf(step);
}

function animateRows() {
  var rows = $qa('.row');
  rows.forEach(function(r, i) {
    $st(function() {
      r.classList.add('show');
      var fill = r.querySelector('.sov-bar-fill');
      if (fill) {
        $st(function() {
          fill.style.width = fill.dataset.w + '%';
        }, 200);
      }
    }, 250 + i * 110);
  });
}

function resetRows() {
  var rows = $qa('.row');
  rows.forEach(function(r) {
    r.classList.remove('show');
    var fill = r.querySelector('.sov-bar-fill');
    if (fill) fill.style.width = '0%';
  });
  $id('footTotal').textContent = '0';
}

function runCycle() {
  resetRows();
  $st(function() {
    animateRows();
    tweenFooterTotal();
  }, 200);

  $st(runCycle, 10000);
}

renderTable();
$onLoad(function() {
  $st(runCycle, 100);
});

  return function dispose() { $dead = true; if ($ro) $ro.disconnect();  };
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 * @framerIntrinsicWidth 900
 * @framerIntrinsicHeight 480
 */
export default function ShareOfVoice() {
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
            className="fx-share-of-voice-light"
            role="figure"
            aria-label={LABEL}
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: HTML }}
        />
    )
}
