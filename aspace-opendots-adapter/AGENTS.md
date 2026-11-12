# AGENTS.md — aspace-opendots-adapter (F8 pas 7)

Frontière durable de l'adapter (DOX enfant) :

- **Stdlib seule.** Aucune dépendance, aucun import du fork, aucun appel
  réseau autre que le gateway local `:31415` (loopback).
- **Le gel fait foi.** `PINNED_GEL = d4214af` ; aucun autre commit amont
  appliqué ; tout re-gel exige un amendement de design, jamais un
  fast-forward silencieux (§D1).
- **Le bind précède l'adapter** (§D8, plan littéral — divergence du
  précédent p3/p4/p5, adapter-d'abord, nommée dans la fiche).
- **Télémétrie zéro.** Aucun émetteur dans cet adapter (`telemetryEmitters()`
  retourne `[]`) ; les 5 déclencheurs du §D4 sont tranchés dans
  `src/telemetry.ts` ; le code search seul ne vaut pas preuve (§0.4).
- **Aucune clé.** `getApiKey()` retourne `"None"` (sentinelle de refus) ;
  aucune clé CPK ni fournisseur, jamais lue, jamais acceptée (§D6).
- **Aucun cron.** Toute spécification cron est refusée (`routineToJob`
  lève) ; une routine survit comme entrée du job loop, preuve par reçu (§D5).
- **Skin, pas app.** OpenDots est un(e) skin de la
  plateforme OpenBot : always-on : coworkers persistants, texte / appels / Slack, revue avant sauvegarde (§D3).
