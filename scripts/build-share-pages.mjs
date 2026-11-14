
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import vm from "node:vm";

// ---------- REGLAGES ----------
const SITE = "https://zakium.github.io/lantre-du-zakium/"; 
const NOM_SITE = "L'Antre du Zakium";
// ------------------------------

const NOTE_LABELS = { n5: "Coup de coeur", n4: "Je plussoie", n3: "Pourquoi pas", n2: "Pas pour moi" };

const code = readFileSync("data.js", "utf8");
const ctx = {};
vm.createContext(ctx);
vm.runInContext(code + "\n;this.__R = (typeof REVIEWS !== 'undefined') ? REVIEWS : [];", ctx);

const reviews = ctx.__R.filter((r) => r && r.note !== "n1");

const steamImg = existsSync("steam-images.json") ? JSON.parse(readFileSync("steam-images.json", "utf8")) : {};


const slugify = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
const appIdOf = (r) => {
  if (r.steamAppId) return String(r.steamAppId);
  const m = String(r.steamUrl || "").match(/\/app\/(\d+)/);
  return m ? m[1] : "";
};
const imageOf = (r) => {
  if (r.image && String(r.image).trim()) return r.image;
  const id = appIdOf(r);
  if (steamImg[id]) return steamImg[id];
  return id ? `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/header.jpg` : SITE + "assets/partage.jpg";
};
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const plain = (s) => String(s).replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*([^*]+)\*/g, "$1").replace(/\s+/g, " ").trim();
const cut = (s, n) => (s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…");

rmSync("r", { recursive: true, force: true });

const used = {};
let n = 0;
for (const r of reviews) {
  const base = "review-" + slugify(r.title);
  let s = base, k = 2;
  while (used[s]) { s = base + "-" + k; k++; }
  used[s] = true;
  const dossier = s.replace(/^review-/, "");

  const titre = `${r.title} · ${NOM_SITE}`;
  const label = NOTE_LABELS[r.note] ? NOTE_LABELS[r.note] + " ! " : "";
  const desc = cut(label + plain((r.paras || [])[0] || ""), 200);
  const img = imageOf(r);
  const url = `${SITE}r/${dossier}/`;
  const cible = `${SITE}#${s}`;

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>${esc(titre)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:site_name" content="${esc(NOM_SITE)}">
<meta property="og:type" content="article">
<meta property="og:locale" content="fr_FR">
<meta property="og:title" content="${esc(titre)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:image" content="${esc(img)}">
<meta property="og:image:alt" content="${esc(r.title)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(titre)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(img)}">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${esc(cible)}">
<script>location.replace(${JSON.stringify(cible)});</script>
</head>
<body style="background:#241812;color:#e9d9be;font-family:Georgia,serif;text-align:center;padding:3rem">
<p><a style="color:#d9a441" href="${esc(cible)}">Lire la review de ${esc(r.title)} sur ${esc(NOM_SITE)}</a></p>
</body>
</html>
`;
  mkdirSync(`r/${dossier}`, { recursive: true });
  writeFileSync(`r/${dossier}/index.html`, html);
  n++;
}
console.log(n + " pages de partage creees dans r/");
