# Phase 04 — Validation et livraison

Statut : en cours sur `codex/phase-04-ai-serenity-validation`.

Objectif : vérifier l'ensemble et préparer une livraison reproductible.

- [x] Vérifier les parcours, liens, navigation clavier et réduction des animations.
- [x] Vérifier visuellement les tailles mobile et ordinateur.
- [ ] Vérifier métadonnées, accessibilité et performances ; corriger les problèmes constatés.
- [x] Exécuter lint, types, tests, couverture et build ; consigner les résultats réels.
- [ ] Vérifier GitHub Actions à distance si le dépôt distant est disponible.
- [x] Documenter installation, commandes et architecture dans le README du projet.
- [x] Documenter les informations éditoriales encore absentes et les limites restantes.
- [ ] Choisir la cible de déploiement avec le propriétaire avant publication.

Critère de sortie : version vérifiée et instructions de reprise/livraison complètes.
Une publication et une protection de branche doivent être suivies séparément,
selon les accès et la demande du propriétaire ; elles ne sont pas déjà réalisées.

Contrôles locaux du 24 septembre 2026 : révélations au défilement avec repli sans
`IntersectionObserver`, réduction des mouvements en CSS, liens internes, disclosure,
structure sémantique, console, ordinateur et mobile 390 × 844. `pnpm check` réussi
avec 16 tests et 100 % de couverture JS/TS mesurée. Restent l'audit outillé complet
d'accessibilité et de performances, la CI distante et le choix de déploiement.

Le workflow écoute maintenant `vercel.deployment.ready`, utilise le checkout
Vercel pour cibler le SHA du déploiement et publie le statut requis
`Vercel - sm-portfolio: lint`. Cette intégration ne peut être vérifiée à distance
qu'après présence du workflow sur la branche par défaut et nouveau déploiement.
