const fs = require("fs");
const h = fs.readFileSync("C:/Users/User/createoncampus/scripts/coc-fresh.html", "utf8");

for (const pos of [602127, 323929, 513517, 459547, 467270]) {
  console.log("\n=== around", pos, "===");
  console.log(h.slice(pos - 150, pos + 400).replace(/\s+/g, " "));
}

// find all data-framer-name with Logo
const logos = [...h.matchAll(/data-framer-name="([^"]*Logo[^"]*)"[^>]*>[\s\S]{0,800}/g)];
logos.slice(0, 5).forEach((m) => console.log("\nLOGO BLOCK:", m[1], m[0].slice(0, 300)));
