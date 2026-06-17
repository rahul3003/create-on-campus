const fs = require("fs");
const h = fs.readFileSync("C:/Users/User/createoncampus/scripts/coc-fresh.html", "utf8");
const start = h.indexOf('data-framer-name="Tabber"');
const chunk = h.slice(start, start + 25000);

// find svg blocks
const svgs = [...chunk.matchAll(/<svg[\s\S]{0,2000}?<\/svg>/g)];
console.log("SVG count in tabber:", svgs.length);
svgs.forEach((s, i) => console.log(`\n--- SVG ${i} ---\n`, s[0].slice(0, 500)));

// find img src in tabber
const imgs = [...chunk.matchAll(/src="([^"]+)"/g)];
console.log("\nIMG src in tabber:");
imgs.forEach((m) => console.log(m[1].split("?")[0]));
