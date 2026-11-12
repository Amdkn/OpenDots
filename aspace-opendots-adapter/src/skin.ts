// Enregistrement des skins sur la plateforme (§D10, pont généralisé).
// openmuse workspace.ts:357 listait OpenBot comme adaptateur non branché
// (openbotConfigured: false) — ici chaque skin s'enregistre par le même patron.
export type SkinKind = "platform" | "skin";
export interface SkinRegistration {
  id: string;
  name: string;
  kind: SkinKind;
  trait: string;
  configured: boolean;
}
export const SKIN: SkinRegistration = {"id": "opendots", "name": "OpenDots", "kind": "skin", "trait": "always-on : coworkers persistants, texte / appels / Slack, revue avant sauvegarde"} as SkinRegistration;
export const PLATFORM_SKIN: SkinRegistration = {
  id: "openbot",
  name: "OpenBot",
  kind: "platform",
  trait: "plateforme : accueille n'importe quel agent AG-UI comme coworker avec son ordinateur",
  configured: true,
};
const registry = new Map<string, SkinRegistration>();
export function registerSkin(skin: SkinRegistration): SkinRegistration {
  registry.set(skin.id, { ...skin, configured: true });
  return registry.get(skin.id) as SkinRegistration;
}
export function platformConfigured(): boolean {
  return registry.has("openbot") && [...registry.values()].every((s) => s.configured);
}
export function listSkins(): SkinRegistration[] {
  return [...registry.values()];
}
