const fs = require("fs");
const h = fs.readFileSync("scripts/coc-fresh.html", "utf8");

const idx = h.indexOf('data-framer-name="About"');
console.log("About idx", idx);
if (idx >= 0) console.log(h.slice(idx - 200, idx + 4000));

const presetIdx = h.indexOf("eSObMJ2RV");
if (presetIdx >= 0) console.log("\nPreset:", h.slice(presetIdx - 100, presetIdx + 500));

const lustriaIdx = h.indexOf("Lustria");
console.log("\nLustria count", (h.match(/Lustria/g) || []).length);
