// @ts-nocheck
// Generated from citations-sources-light.html by tools/to-framer.mjs. Edit the HTML, then regenerate:
//   node tools/to-framer.mjs citations-sources-light
import { useEffect, useRef } from "react"

const LABEL = "Citation sources: the domains AI answers cite most, with citation count and share over the last 90 days."

// Rendered as plain HTML so Framer's server render puts it in the page's own markup.
const HTML = "<style>@import url(\"https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap\");\n.fx-citations-sources-light { position: relative; display: block; width: 100%; height: 100%; overflow: hidden; container-type: size; container-name: fx-citations-sources-light; }\n.fx-citations-sources-light, .fx-citations-sources-light * { margin: 0; padding: 0; box-sizing: border-box; }\n.fx-citations-sources-light { width: 100%; height: 100%; overflow: hidden; }\n.fx-citations-sources-light { background: transparent;\n    font-family: 'Geist', -apple-system, system-ui, sans-serif;\n    color: #000;\n    letter-spacing: -0.01em; }\n.fx-citations-sources-light .card { width: 100%;\n    height: 100%;\n    background: #F2F2F2;\n    border: 1px solid rgba(0,0,0,0.05);\n    border-radius: clamp(10px, 1.6cqh, 14px);\n    padding: clamp(10px, 1.8cqh, 14px);\n    display: flex;\n    flex-direction: column;\n    overflow: hidden; }\n.fx-citations-sources-light .panel { flex: 1;\n    min-height: 0;\n    background: #FFFFFF;\n    border: 1px solid rgba(0,0,0,0.07);\n    border-radius: 8px;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden; }\n.fx-citations-sources-light .header { display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 12px 16px;\n    border-bottom: 1px solid rgba(0,0,0,0.06);\n    font-size: 13px;\n    font-weight: 600;\n    color: #000;\n    flex-shrink: 0; }\n.fx-citations-sources-light .at-icon { width: 24px; height: 24px;\n    background: #FB3B24;\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 13px;\n    font-weight: 600;\n    color: #fff; }\n.fx-citations-sources-light .info-icon { width: 16px; height: 16px;\n    background: #F2F2F2;\n    border: 1px solid rgba(0,0,0,0.1);\n    border-radius: 50%;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 10px;\n    color: rgba(0,0,0,0.4); }\n.fx-citations-sources-light .header-tag { margin-left: auto;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 10px;\n    font-weight: 500;\n    color: rgba(0,0,0,0.4);\n    text-transform: uppercase;\n    letter-spacing: 0.04em; }\n.fx-citations-sources-light .table-scroll { flex: 1;\n    min-height: 0;\n    overflow: hidden; }\n.fx-citations-sources-light table { width: 100%; border-collapse: collapse; }\n.fx-citations-sources-light thead th { text-align: left;\n    padding: 9px 16px;\n    background: #F2F2F2;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 10px;\n    font-weight: 500;\n    letter-spacing: 0.04em;\n    text-transform: uppercase;\n    color: rgba(0,0,0,0.4);\n    opacity: 0;\n    transform: translateY(-8px);\n    transition: opacity 0.4s ease, transform 0.4s ease; }\n.fx-citations-sources-light thead th.visible { opacity: 1; transform: translateY(0); }\n.fx-citations-sources-light .sort-arrow { color: rgba(0,0,0,0.25); margin-left: 3px; }\n.fx-citations-sources-light tbody tr { opacity: 0;\n    transform: translateX(-16px);\n    transition: opacity 0.4s ease, transform 0.4s ease; }\n.fx-citations-sources-light tbody tr.visible { opacity: 1; transform: translateX(0); }\n.fx-citations-sources-light tbody td { padding: 11px 16px;\n    border-bottom: 1px solid rgba(0,0,0,0.05);\n    font-size: 13px;\n    color: rgba(0,0,0,0.8); }\n.fx-citations-sources-light tbody tr:last-child td { border-bottom: none; }\n.fx-citations-sources-light .domain-cell { display: flex;\n    align-items: center;\n    gap: 9px; }\n.fx-citations-sources-light .domain-name { font-weight: 500; color: #000; }\n.fx-citations-sources-light .domain-icon { width: 26px; height: 26px;\n    border-radius: 6px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 12px;\n    font-weight: 700;\n    color: #fff;\n    flex-shrink: 0; }\n.fx-citations-sources-light .count-cell, .fx-citations-sources-light .share-cell { font-variant-numeric: tabular-nums;\n    font-family: 'Geist Mono', ui-monospace, monospace;\n    font-size: 12.5px;\n    color: #000; }\n@container fx-citations-sources-light (max-width: 480px) {\n.fx-citations-sources-light .header { font-size: 12px; padding: 10px 12px; }\n.fx-citations-sources-light thead th { padding: 8px 10px; font-size: 9px; }\n.fx-citations-sources-light tbody td { padding: 8px 10px; font-size: 11px; }\n.fx-citations-sources-light .domain-icon { width: 20px; height: 20px; font-size: 10px; }\n.fx-citations-sources-light .domain-cell { gap: 7px; }\n.fx-citations-sources-light .count-cell, .fx-citations-sources-light .share-cell { font-size: 11px; }\n}</style><div class=\"card\">\n  <div class=\"panel\">\n    <div class=\"header\">\n      <span class=\"at-icon\">@</span>\n      Citations Sources\n      <span class=\"info-icon\">i</span>\n      <span class=\"header-tag\">last 90d</span>\n    </div>\n    <div class=\"table-scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>Domain <span class=\"sort-arrow\">&updownarrow;</span></th>\n            <th>Count <span class=\"sort-arrow\">&updownarrow;</span></th>\n            <th>Share <span class=\"sort-arrow\">&updownarrow;</span></th>\n          </tr>\n        </thead>\n        <tbody id=\"fx-citations-sources-light-tbody\"><tr>\n    <td><div class=\"domain-cell\"><div class=\"domain-icon\" style=\"background:#FB3B24\">m</div><span class=\"domain-name\">magneticme.com</span></div></td>\n    <td class=\"count-cell\" data-target=\"2200\" data-label=\"2.2K\">2.2K</td>\n    <td class=\"share-cell\" data-target=\"33\">33%</td>\n  </tr><tr>\n    <td><div class=\"domain-cell\"><div class=\"domain-icon\" style=\"background:#C42E1B\">r</div><span class=\"domain-name\">reddit.com</span></div></td>\n    <td class=\"count-cell\" data-target=\"936\" data-label=\"936\">936</td>\n    <td class=\"share-cell\" data-target=\"10\">10%</td>\n  </tr><tr>\n    <td><div class=\"domain-cell\"><div class=\"domain-icon\" style=\"background:#FF7A6B\">r</div><span class=\"domain-name\">reviewed.com</span></div></td>\n    <td class=\"count-cell\" data-target=\"468\" data-label=\"468\">468</td>\n    <td class=\"share-cell\" data-target=\"14\">14%</td>\n  </tr><tr>\n    <td><div class=\"domain-cell\"><div class=\"domain-icon\" style=\"background:#FC5844\">a</div><span class=\"domain-name\">anbbaby.com</span></div></td>\n    <td class=\"count-cell\" data-target=\"305\" data-label=\"305\">305</td>\n    <td class=\"share-cell\" data-target=\"11\">11%</td>\n  </tr><tr>\n    <td><div class=\"domain-cell\"><div class=\"domain-icon\" style=\"background:#FFB0A5\">K</div><span class=\"domain-name\">kidpik.com</span></div></td>\n    <td class=\"count-cell\" data-target=\"275\" data-label=\"275\">275</td>\n    <td class=\"share-cell\" data-target=\"11\">11%</td>\n  </tr><tr>\n    <td><div class=\"domain-cell\"><div class=\"domain-icon\" style=\"background:#FB3B24\">J</div><span class=\"domain-name\">juneadaptive.com</span></div></td>\n    <td class=\"count-cell\" data-target=\"257\" data-label=\"257\">257</td>\n    <td class=\"share-cell\" data-target=\"14\">14%</td>\n  </tr><tr>\n    <td><div class=\"domain-cell\"><div class=\"domain-icon\" style=\"background:rgba(0,0,0,0.35)\">a</div><span class=\"domain-name\">amazon.com</span></div></td>\n    <td class=\"count-cell\" data-target=\"220\" data-label=\"220\">220</td>\n    <td class=\"share-cell\" data-target=\"5\">5%</td>\n  </tr><tr>\n    <td><div class=\"domain-cell\"><div class=\"domain-icon\" style=\"background:#FF7A6B\">M</div><span class=\"domain-name\">magnaready.com</span></div></td>\n    <td class=\"count-cell\" data-target=\"197\" data-label=\"197\">197</td>\n    <td class=\"share-cell\" data-target=\"13\">13%</td>\n  </tr><tr>\n    <td><div class=\"domain-cell\"><div class=\"domain-icon\" style=\"background:rgba(0,0,0,0.55)\">g</div><span class=\"domain-name\">gorgias.help</span></div></td>\n    <td class=\"count-cell\" data-target=\"196\" data-label=\"196\">196</td>\n    <td class=\"share-cell\" data-target=\"13\">13%</td>\n  </tr></tbody>\n      </table>\n    </div>\n  </div>\n</div>"

function init(root) {
  var $P = 'fx-citations-sources-light-';
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
  $id('tbody').innerHTML = '';   // server-rendered copy; the script rebuilds it
const rows = [
  { domain: 'magneticme.com', count: 2200, countLabel: '2.2K', share: 33, color: '#FB3B24', letter: 'm' },
  { domain: 'reddit.com', count: 936, countLabel: '936', share: 10, color: '#C42E1B', letter: 'r' },
  { domain: 'reviewed.com', count: 468, countLabel: '468', share: 14, color: '#FF7A6B', letter: 'r' },
  { domain: 'anbbaby.com', count: 305, countLabel: '305', share: 11, color: '#FC5844', letter: 'a' },
  { domain: 'kidpik.com', count: 275, countLabel: '275', share: 11, color: '#FFB0A5', letter: 'K' },
  { domain: 'juneadaptive.com', count: 257, countLabel: '257', share: 14, color: '#FB3B24', letter: 'J' },
  { domain: 'amazon.com', count: 220, countLabel: '220', share: 5, color: 'rgba(0,0,0,0.35)', letter: 'a' },
  { domain: 'magnaready.com', count: 197, countLabel: '197', share: 13, color: '#FF7A6B', letter: 'M' },
  { domain: 'gorgias.help', count: 196, countLabel: '196', share: 13, color: 'rgba(0,0,0,0.55)', letter: 'g' },
];

const tbody = $id('tbody');

rows.forEach(r => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td><div class="domain-cell"><div class="domain-icon" style="background:${r.color}">${r.letter}</div><span class="domain-name">${r.domain}</span></div></td>
    <td class="count-cell" data-target="${r.count}" data-label="${r.countLabel}">${r.countLabel}</td>
    <td class="share-cell" data-target="${r.share}">${r.share}%</td>
  `;
  tbody.appendChild(tr);
});

function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

$st(() => {
  $qa('thead th').forEach(th => th.classList.add('visible'));
}, 150);

const trEls = $qa('tbody tr');
trEls.forEach((tr, i) => {
  $st(() => {
    tr.classList.add('visible');
    animateCounters(tr);
  }, 400 + i * 80);
});

function animateCounters(tr) {
  const countCell = tr.querySelector('.count-cell');
  const shareCell = tr.querySelector('.share-cell');
  const countTarget = parseInt(countCell.dataset.target);
  const countLabel = countCell.dataset.label;
  const shareTarget = parseInt(shareCell.dataset.target);
  const duration = 900;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    const currentCount = Math.round(eased * countTarget);
    if (countTarget >= 1000) {
      countCell.textContent = (currentCount / 1000).toFixed(1) + 'K';
    } else {
      countCell.textContent = currentCount.toLocaleString();
    }
    if (progress >= 1) countCell.textContent = countLabel;

    shareCell.textContent = Math.round(eased * shareTarget) + '%';

    if (progress < 1) $raf(tick);
  }
  $raf(tick);
}

  return function dispose() { $dead = true; if ($ro) $ro.disconnect();  };
}

/**
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 * @framerIntrinsicWidth 600
 * @framerIntrinsicHeight 460
 */
export default function CitationsSources() {
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
            className="fx-citations-sources-light"
            role="figure"
            aria-label={LABEL}
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{ __html: HTML }}
        />
    )
}
