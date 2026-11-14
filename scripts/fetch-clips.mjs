// Recupere les clips Twitch de la chaine et les ecrit dans clips.json.
// Lance automatiquement par GitHub Actions (voir .github/workflows/clips.yml).

// ---------- REGLAGES ----------
const CHAINE = "zakium";      // le nom de ta chaine Twitch
const VUES_MINIMUM = 0;       // ignorer les clips avec moins de vues que ca
const SEULEMENT_LES_MIENS = false; // true = seulement les clips crees par toi
const CLIPS_EXCLUS = [];      // ids de clips a ne jamais afficher, ex: ["NomDuClip-abc123"]
// ------------------------------

import { writeFileSync } from "node:fs";

const id = process.env.TWITCH_CLIENT_ID;
const secret = process.env.TWITCH_CLIENT_SECRET;
if (!id || !secret) { console.error("TWITCH_CLIENT_ID / TWITCH_CLIENT_SECRET manquants dans les secrets GitHub."); process.exit(1); }

const tok = await fetch("https://id.twitch.tv/oauth2/token", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({ client_id: id, client_secret: secret, grant_type: "client_credentials" }),
}).then(r => r.json());
if (!tok.access_token) { console.error("Echec de l'authentification Twitch :", tok); process.exit(1); }

const H = { "Client-Id": id, "Authorization": "Bearer " + tok.access_token };
const helix = async (path) => {
  const r = await fetch("https://api.twitch.tv/helix/" + path, { headers: H });
  if (!r.ok) throw new Error(path + " -> HTTP " + r.status + " " + await r.text());
  return r.json();
};

const users = await helix("users?login=" + encodeURIComponent(CHAINE));
if (!users.data || !users.data.length) { console.error("Chaine introuvable :", CHAINE); process.exit(1); }
const broadcaster = users.data[0];

let clips = [], cursor = "";
for (let page = 0; page < 20; page++) {
  const res = await helix("clips?broadcaster_id=" + broadcaster.id + "&first=100" + (cursor ? "&after=" + cursor : ""));
  clips.push(...res.data);
  cursor = res.pagination && res.pagination.cursor;
  if (!cursor || !res.data.length) break;
}

const out = clips
  .filter(c => c.view_count >= VUES_MINIMUM)
  .filter(c => !SEULEMENT_LES_MIENS || c.creator_id === broadcaster.id)
  .filter(c => !CLIPS_EXCLUS.includes(c.id))
  .sort((a, b) => b.created_at.localeCompare(a.created_at))
  .map(c => ({ id: c.id, titre: c.title, vues: c.view_count, date: c.created_at.slice(0, 10), duree: Math.round(c.duration), url: c.url }));

writeFileSync("clips.json", JSON.stringify({ chaine: CHAINE, nombre: out.length, clips: out }, null, 2) + "\n");
console.log(out.length + " clips enregistres dans clips.json");
