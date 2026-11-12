// Intelligence remplacée (§D6) : gateway :31415 + Shared Brain.
// Aucune clé CPK ni fournisseur dans le natif.
export const GATEWAY_ENDPOINT = "http://127.0.0.1:31415/v1/chat/completions";
export const MODEL_CHAIN: string[] = ["freellmapi/auto", "claude-sonnet-4-5", "qwen3.8-max", "gemini-3.8-flash", "deepseek-v4-flash"];
export const RETEST_MINUTES = 15;
export const FORBIDDEN_KEYS: string[] = ["CPK_INTELLIGENCE_API_KEY", "CPK_TELEMETRY_ID", "OPENAI_API_KEY"];
export function getApiKey(_service: string): string {
  // Sentinelle de refus (patron pas 5 D9) : aucune clé lue, jamais acceptée.
  return "None";
}
export function gatewayOnly(endpoint: string): boolean {
  return endpoint === GATEWAY_ENDPOINT;
}
