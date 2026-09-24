# Phase 01 — Socle technique et qualité

Statut : terminée localement le 24 septembre 2026.

Objectif : fournir une base maintenable avec des contrôles automatisés.

- [x] Lire les guides locaux Next.js pertinents avant d'écrire le code.
- [x] Définir une structure séparant contenu, composants, logique et accès externes éventuels.
- [x] Configurer shadcn/ui avec Tailwind CSS.
- [x] Configurer les tests unitaires et l'environnement de test des composants.
- [x] Mesurer aussi les fichiers applicatifs non importés par les tests.
- [x] Imposer 80 % pour lignes, instructions, fonctions et branches, globalement et par fichier testable.
- [x] Documenter et justifier les exclusions techniques de couverture.
- [x] Ajouter les commandes lint, vérification TypeScript, tests et couverture.
- [x] Créer GitHub Actions sur push et pull request : lint, types, tests avec couverture, build.
- [x] Tester le socle et vérifier qu'un seuil insuffisant fait échouer le contrôle.

Critère de sortie : commandes de qualité opérationnelles, contrôles locaux réussis,
workflow présent et règles de couverture effectives. Distinguer validation locale
et exécution distante GitHub ; ne pas annoncer de résultat distant sans preuve.

Résultat : `pnpm check` réussi ; 9 tests et couverture de 100 % sur le socle actuel.
Contrôle négatif : fichier non importé mesuré à 0 %, sortie 1 et erreurs explicites
sur les seuils global/par fichier ; fichier temporaire retiré puis contrôle positif réussi.

Limites : workflow non exécuté sur GitHub, protection de branche non configurée,
Node 24 de CI non testé localement (Node 26.9.0 utilisé). Build Webpack validé ;
Turbopack bloqué localement par une restriction de port PostCSS.

Prochaine action : phase 02, direction artistique et accueil immersif.
