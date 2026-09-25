# Avancement du portfolio

Dernière mise à jour : 24 septembre 2026, 19 h 26.

## Reprise rapide

Le projet est le portfolio de **RAHERINOTOAVINA Safidy Mariël**.
Le socle technique et la direction visuelle « intelligence sereine » sont
implémentés et validés par le propriétaire. Cette direction associe ivoire,
indigo et sauge, halos opalins, typographie éditoriale, organisme cognitif abstrait
et révélations progressives au défilement. L'étude de cas SIRH & Plus, le profil,
le parcours, la formation, les certifications et le contact sont intégrés.
La migration et les modules SIRH & Plus, le Master II en cours et la période du
stage MTEFoP sont maintenant confirmés. Les résultats et détails de missions
encore inconnus restent à compléter.

**Phase active : 04 — Validation et livraison (en cours).**

Prochaine action : réaliser l'audit complet d'accessibilité et de performances,
vérifier la CI distante, puis choisir la cible de déploiement avec le propriétaire. Les
problèmes précis, résultats et période SIRH & Plus, ainsi que le projet et la
stack du stage MTEFoP, pourront enrichir le contenu lorsqu'ils seront fournis.
Aperçu local :
http://127.0.0.1:3000 (nécessite le serveur `pnpm start` après build).

## Phases

| Phase | Statut | Objectif |
| --- | --- | --- |
| [00 — Cadrage](phases/00-cadrage.md) | Socle terminé ; compléments ouverts | Contenu et exigences |
| [01 — Socle technique](phases/01-socle-technique.md) | Terminée localement | Architecture, tests, CI |
| [02 — Direction artistique](phases/02-direction-artistique.md) | Validée par le propriétaire | Identité visuelle et première section |
| [03 — Portfolio](phases/03-portfolio.md) | Terminée localement ; compléments éditoriaux ouverts | Sections, interactions et tests associés |
| [04 — Validation et livraison](phases/04-validation-livraison.md) | En cours | Vérifications et préparation de la livraison |

Statuts utilisables : à faire, en cours, bloquée, terminée. Une phase est terminée
lorsque ses critères de sortie sont vérifiés ; les tests accompagnent chaque
fonctionnalité, pas seulement la phase finale.

## État technique observé

- Dépôt distant `origin` : https://github.com/Raherinotoavina/sm_portfolio.git ;
  branche `main` publiée et suivie via `origin/main`. Premier push réussi le
  24 septembre 2026 ; résultats de GitHub Actions non vérifiés.

- Next.js 16.3.6, React 19.2.8, TypeScript et Tailwind CSS 4 dans `package.json`.
- Gestionnaire déclaré : pnpm 10.30.1.
- Accueil, étude de cas, parcours et certifications composés depuis `components/`, données dans `content/`,
  utilitaires dans `lib/`, bouton shadcn/ui Radix adapté et configuration installés.
- Vitest 5, React Testing Library et jsdom : 16 tests, 5 fichiers de test.
- `pnpm check` réussi : lint, types, couverture et build Webpack.
- Couverture locale : 100 % des lignes, instructions, branches et fonctions
  du code JS/TS applicatif mesuré. Seuil de 80 % global et par fichier vérifié par un
  fichier non importé temporaire, qui a correctement provoqué un échec.
- GitHub Actions configuré sur push et pull request ; exécution distante non vérifiée.
- Node 24 prévu en CI, contrôles locaux sous Node 26.9.0. Le build utilise Webpack
  après une restriction locale de port avec Turbopack ; `pnpm build:turbo` reste disponible.
- Nouvelle page contrôlée dans le navigateur à 1280 × 800 et 390 × 844 ; absence
  de débordement horizontal vérifiée, aucune erreur console relevée.
- Lien d'évitement clavier et ancre d'exploration vérifiés ; aucun avertissement
  ou erreur console relevé. Réduction des animations prévue en CSS, sans émulation
  de la préférence système dans le navigateur ; pas d'audit d'accessibilité complet.
- Refonte « intelligence sereine » développée sur
  `codex/feat-ai-serenity-redesign` : composition éditoriale, organisme cognitif
  CSS, palette ivoire/indigo/sauge et animations lentes avec repli reduced-motion.
  `pnpm check` réussi (14 tests, couverture 100 %, lint, types et build). Aperçu
  contrôlé sur ordinateur et à 390 × 844, sans débordement ni erreur console.
- Phase 04 sur `codex/phase-04-ai-serenity-validation` : révélations progressives
  pilotées par `IntersectionObserver`, contenu visible sans API compatible et
  effets supprimés en réduction de mouvement. Liens internes, structure, console,
  disclosure et responsive vérifiés ; `pnpm check` réussi avec 16 tests.

## Décisions et contexte à préserver

- Source du contenu : [PORTFOLIO_CONTENT.md](../PORTFOLIO_CONTENT.md).
- Règles de développement : [AGENTS.md](../AGENTS.md).
- Chaque fonctionnalité, correction ou tâche documentaire se fait sur une branche
  dédiée `codex/`, jamais directement sur `main`. Règle ajoutée sur
  `codex/docs-branch-workflow` (commit local `259e31f`). Phase 02 sur
  `codex/feat-artistic-direction`, créée depuis ce commit pour conserver la règle.
  La phase 02 initiale a depuis été committée et poussée (`77dff5a`), sans fusion.
  La refonte validée et l'intégration sont enregistrées dans `907ac0f` sur
  `codex/feat-field-atlas-redesign`, sans push ni fusion.
- Clean code, architecture claire, Tailwind CSS, shadcn/ui, tests de toutes les
  fonctionnalités et couverture minimale de 80 % sont demandés par le propriétaire.
- Le design doit surprendre et donner la sensation d'entrer dans un autre univers.
- L'observatoire numérique a été rejeté pour sa proximité perçue avec Claude.
  La piste « carnet de terrain numérique » a précédé la direction désormais
  validée « intelligence sereine ».
- Les informations personnelles encore
  manquantes sont listées dans la phase 00 et ne doivent pas être inventées.

## Utilisation du suivi

Lire ce fichier et la phase active en début de session. À la fin, actualiser les
statuts, les critères accomplis et la prochaine action ; ajouter une entrée dans
le [journal](JOURNAL.md) avec les fichiers concernés, vérifications et limites.
Conserver les anciennes entrées pour garder la trace des décisions.

Ce dossier accompagne le dépôt : une nouvelle conversation ouverte sur ce même
projet pourra reprendre à partir de ces fichiers et des consignes d'AGENTS.md.
