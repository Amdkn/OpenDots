// Triage OpenDots — porté / surface / abandonné (§D14, §D2).
// Vérifié mécaniquement par la suite (comptes = table, écart 0).
export type TriageVerdict = "ported" | "surface" | "abandoned";
export interface TriageItem { id: string; item: string; verdict: TriageVerdict }
export const TRIAGE: TriageItem[] = [
  { id: "always-on", item: "Always-on : Dots persistants qui passent du texte à l'appel à Slack", verdict: "ported" },
  { id: "computer-service", item: "ComputerService (src/server/computer-service.ts, un ordinateur par Dot, holder bot|human) : replié dans le computer-service unique :4100 ; l'en-tête x-openbot-bot-id (computer-service.ts:82) est gardé verbatim", verdict: "ported" },
  { id: "review-card", item: "Review card avant sauvegarde : la revue humaine est dans la boucle d'écriture, puis page Space éditable", verdict: "ported" },
  { id: "multi-channel", item: "Multi-canaux : texte, appels (voix), Slack — canaux du skin, pas des daemons", verdict: "ported" },
  { id: "holder-takeover", item: "holder: bot | human : règle de reprise en main — la même session navigateur, reprise par l'humain", verdict: "ported" },
  { id: "spaces-pages", item: "Spaces / pages : persistance des brouillons approuvés comme pages éditables", verdict: "ported" },
  { id: "client-vite", item: "Client Vite — surface, re-pointée", verdict: "surface" },
  { id: "browser-4311", item: "Navigateur :4311 — surface du computer-service, re-pointée", verdict: "surface" },
  { id: "mobile", item: "Mobile — surface, re-pointée", verdict: "surface" },
  { id: "sdk-telemetry-sink", item: "Sink SDK → telemetry.copilotkit.ai → PostHog, défaut ON ; transport non porté", verdict: "abandoned" },
  { id: "setup-telemetry", item: "Setup telemetry (src/server/setup-telemetry.ts + src/client/setup-telemetry.ts, événements step_viewed/setup_abandoned/activated/setup_failed, file 256, keepalive) : non portée", verdict: "abandoned" },
  { id: "hogql-posthog", item: "Requêtes HogQL PostHog versionnées (docs/telemetry/*.hogql.sql, événements oss.runtime.*) : preuves du sink, non portées", verdict: "abandoned" },
  { id: "sqlite-file", item: "SQLite fichier (data/opendots.sqlite) : remplacé par les stores natifs (openrig_state.rs, memory.rs)", verdict: "abandoned" }
];
export function triageCounts(): { ported: number; surfaces: number; abandoned: number; total: number } {
  const ported = TRIAGE.filter((t) => t.verdict === "ported").length;
  const surfaces = TRIAGE.filter((t) => t.verdict === "surface").length;
  const abandoned = TRIAGE.filter((t) => t.verdict === "abandoned").length;
  return { ported, surfaces, abandoned, total: TRIAGE.length };
}
