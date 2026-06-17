const fs = require("fs");
const h = fs.readFileSync("scripts/coc-fresh.html", "utf8");

// Parse hydrate JSON
const hydrateMatch = h.match(/data-framer-hydrate-v2="([^"]+)"/);
if (hydrateMatch) {
  const json = JSON.parse(
    hydrateMatch[1].replace(/&quot;/g, '"').replace(/&amp;/g, "&")
  );
  const str = JSON.stringify(json);
  const urls = [...str.matchAll(/https?:[^"\\]+/g)].map((m) => m[0]);
  const images = urls.filter((u) => /image|png|jpg|svg|logo|aarambh|create/i.test(u));
  console.log("hydrate image urls:", [...new Set(images)].slice(0, 30));
}

// Search benefit/tab content for component refs
const benefit = h.slice(h.indexOf("data-framer-name=\"Benefit\""), h.indexOf("data-framer-name=\"Benefit\"") + 50000);
const pngs = [...benefit.matchAll(/images\/([A-Za-z0-9_-]+)\.(png|svg)/g)];
console.log("\nBenefit images:", [...new Set(pngs.map((m) => m[0]))]);

// Search for framer module imports
const modules = [...h.matchAll(/framerusercontent\.com\/modules\/[A-Za-z0-9/_-]+\.js/g)];
console.log("\nModules:", [...new Set(modules.map((m) => m[0]))].slice(0, 20));
