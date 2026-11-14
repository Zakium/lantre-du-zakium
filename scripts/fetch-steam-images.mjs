// Lit data.js, demande a Steam la bonne image de chaque jeu, et ecrit steam-images.json.
// Lance automatiquement par GitHub Actions (voir .github/workflows/maj-auto.yml).

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import vm from "node:vm";

// Lire les reviews depuis data.js
const code = readFileSync("data.js", "utf8");
const ctx = {};
vm.createContext(ctx);
vm.runInContext(code + "\n;this.__R = (typeof REVIEWS !== 'undefined') ? REVIEWS : [];", ctx);
const reviews = ctx.__R;

const appIdOf = (r) => {
  if (r.steamAppId) return String(r.steamAppId);
  const m = String(r.steamUrl || "").match(/\/app\/(\d+)/);
  return m ? m[1] : "";
};

// Garder les images deja trouvees (si Steam ne repond pas, on ne perd rien)
const out = existsSync("steam-images.json") ? JSON.parse(readFileSync("steam-images.json", "utf8")) : {};

const ids = [...new Set(reviews.map(appIdOf).filter(Boolean))];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ok = 0, ko = 0;

for (const id of ids) {
  try {
    const res = await fetch(`https://store.steampowered.com/api/appdetails?appids=${id}&filters=basic&l=french`);
    const json = await res.json();
    const img = json?.[id]?.success && json[id].data?.header_image;
    if (img) { out[id] = img; ok++; } else { ko++; console.log("Pas d'image pour", id); }
  } catch (e) {
    ko++; console.log("Erreur pour", id, e.message);
  }
  await sleep(1600); // rester poli avec Steam
}

writeFileSync("steam-images.json", JSON.stringify(out, null, 2) + "\n");
console.log(`${ok} images trouvees, ${ko} sans reponse, ${Object.keys(out).length} au total dans steam-images.json`);
