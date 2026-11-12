# aspace-opendots-adapter

Adapter A'Space pour `Amdkn/OpenDots` — gel `d4214af` (`d4214aff10f066911f3253cb3cb870764cd51a9f`),
version amont 0.1.0, statut amont Alpha, 207 fichiers au gel.

- Bind Cordis Fiber : `abcb35dba4fadeb25c568db3a544d9c1ef19863d` (blob `83c6b9b`), re-appliqué
  verbatim sur `main` (§D8) ; l'adapter est le commit qui suit le bind.
- Skin : **OpenDots** (skin) — always-on : coworkers persistants, texte / appels / Slack, revue avant sauvegarde.
- Triage : 6 portés / 3 surfaces / 4 abandonnés
  (total 13), vérifié mécaniquement par la suite.
- Gateway modèle : `http://127.0.0.1:31415/v1/chat/completions` seul, chaîne modelPool, retest 15 min.
- Computer-service : `:4100`, en-tête `x-openbot-bot-id` verbatim.
- Télémétrie : 0 émetteur ; les 5 déclencheurs §D4 sont tranchés dans
  `src/telemetry.ts`.
- Dépendance pas 6 NOMMÉE (§D9) : `/refine` conditionnel au merge de `9050a1f`.

Suite : `bun test tests/adapter.checks.ts` / `node --test tests/adapter.checks.ts` selon le `package.json` (stdlib seule).
Le fichier s'appelle `.checks.ts` (pas `.test.ts`) pour que les suites des forks ne le ramassent pas.
