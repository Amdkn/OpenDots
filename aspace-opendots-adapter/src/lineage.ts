// Lignée du gel — H-M1 / H-M2 (F8 pas 7, OpenDots).
export const PINNED_GEL = "d4214af";
export const PINNED_GEL_FULL = "d4214aff10f066911f3253cb3cb870764cd51a9f";
export const PINNED_BIND = "abcb35dba4fadeb25c568db3a544d9c1ef19863d";
export const PINNED_BIND_FULL = "abcb35dba4fadeb25c568db3a544d9c1ef19863d";
export const PINNED_BIND_BLOB = "83c6b9bf5fa7dc15d1228301db74e7b0616ce565";
export const FORK = "Amdkn/OpenDots";
export const UPSTREAM = "CopilotKit/OpenDots";
export const SKIN_ID = "opendots";

export function isGelCommit(sha: string): boolean {
  return sha === PINNED_GEL || sha === PINNED_GEL_FULL;
}

export function verifyGelLineage(head: string): { head: string; gel: string; headIsGel: boolean } {
  return { head, gel: PINNED_GEL_FULL, headIsGel: isGelCommit(head) };
}
