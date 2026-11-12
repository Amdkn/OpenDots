// Computer-service unique (§D11) : un seul service, :4100, en-tête verbatim.
// L'en-tête est déjà partagé par openbot et OpenDots (computer-service.ts:82).
export const COMPUTER_PORT = 4100;
export const COMPUTER_HEADER = "x-openbot-bot-id";
export type ComputerHolder = "bot" | "human";
export function computerServiceUrl(host = "127.0.0.1"): string {
  return `http://${host}:${COMPUTER_PORT}`;
}
export function computerHeaders(botId: string): Record<string, string> {
  return { [COMPUTER_HEADER]: botId };
}
export function holderOf(holder: string): ComputerHolder {
  if (holder === "bot" || holder === "human") return holder;
  throw new Error(`holder inconnu: ${holder} (attendu bot | human)`);
}
export function takeover(holder: ComputerHolder): ComputerHolder {
  // La même session navigateur, reprise par l'humain puis rendue au Bot.
  return holder === "bot" ? "human" : "bot";
}
