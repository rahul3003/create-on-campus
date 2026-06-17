const fs = require("fs");
const h = fs.readFileSync("scripts/coc-fresh.html", "utf8");
const cssStart = h.indexOf("data-framer-css-ssr-minified");
const css = h.slice(cssStart, cssStart + 500000);

// Search for min-height on text sections
const terms = ["yucx86", "1gc5q7o", "1g45huf", "1ddnrav", "1s2nizm"];
for (const t of terms) {
  const re = new RegExp(`[^}]*framer-${t}[^}]*min-height[^}]*`, "gi");
  const m = css.match(re);
  if (m) console.log(t, m.join("\n"));
}

// media query overrides
const mediaIdx = css.indexOf("@media(min-width: 1400px){.framer-ObTUi.framer-8blmsd");
if (mediaIdx >= 0) {
  const section = css.slice(mediaIdx, mediaIdx + 8000);
  const aboutRules = section.match(/framer-(yucx86|1gc5q7o|1g45huf|1ddnrav|1s2nizm|1k6syo1)[^}]+}/g);
  if (aboutRules) aboutRules.forEach((r) => console.log("\n", r));
}
