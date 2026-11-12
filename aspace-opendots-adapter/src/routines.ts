// Routines → job loop (§D5). Aucun cron ressuscité : cron-parser abandonné.
// Une routine survit comme entrée du job loop ; la preuve est un reçu.
export const MINIMUM_INTERVAL_MS = 15 * 60 * 1000;
export type JobKind = "scheduled" | "adhoc" | "planned" | "event";
export interface JobEntry {
  id: string;
  kind: JobKind;
  intervalMs: number;
  action: string;
}
const CRON_LIKE = /(^|\s)(\*|[0-9]+)(\s+(\*|[0-9]+)){4}(\s|$)/;
export function routineToJob(id: string, spec: string, action: string): JobEntry {
  // Toute spécification cron (5 champs) est refusée — structurellement.
  if (CRON_LIKE.test(spec) || spec.trim().toLowerCase().includes("cron")) {
    throw new Error(`cron refusé: une routine ne survit que comme entrée du job loop (id=${id})`);
  }
  const intervalMs = Number(spec);
  if (!Number.isFinite(intervalMs) || intervalMs < MINIMUM_INTERVAL_MS) {
    throw new Error(`intervalle refusé: minimum ${MINIMUM_INTERVAL_MS} ms (id=${id})`);
  }
  return { id, kind: "scheduled", intervalMs, action };
}
export function eventJob(id: string, action: string): JobEntry {
  // Responsibilities (goals) : jobs déclenchés par événement, pas des crons.
  return { id, kind: "event", intervalMs: 0, action };
}
