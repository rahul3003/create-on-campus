const fs = require("fs");
const h = fs.readFileSync("C:/Users/User/AppData/Local/Temp/coc.html", "utf8");

// Extract hydrate JSON
const match = h.match(/data-framer-hydrate-v2="([^"]+)"/);
if (!match) {
  console.log("no hydrate");
  process.exit(1);
}
const json = JSON.parse(
  match[1].replace(/&quot;/g, '"').replace(/&amp;/g, "&")
);

function walk(obj, path = "") {
  if (!obj || typeof obj !== "object") return;
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => walk(v, `${path}[${i}]`));
    return;
  }
  const s = JSON.stringify(obj);
  if (
    s.includes("aarambh") ||
    s.includes("Venture") ||
    s.includes("Foundation") ||
    s.includes("SZQbTKGR") ||
    s.includes("2VmBCE6") ||
    s.includes("create") ||
    s.includes("SEBI")
  ) {
    if (s.length < 2000) console.log(path, s.slice(0, 500));
  }
  for (const [k, v] of Object.entries(obj)) {
    walk(v, path ? `${path}.${k}` : k);
  }
}

walk(json);
