# Avancement du portfolio

Dernière mise à jour : 24 septembre 2026.

## Reprise rapide

Le projet est le portfolio de **RAHERINOTOAVINA Safidy Mariël**.
Le socle technique est implémenté et vérifié. L'application affiche une introduction
minimale avec le nom, le positionnement et les liens de contact du propriétaire.
Le design immersif et les autres sections restent à réaliser.

**Phase active : 02 — Direction artistique (à démarrer).**

Prochaine action : développer une proposition visuelle concrète pour l'accueil,
à partir de l'ambition immersive et de la piste « observatoire numérique », puis
vérifier le rendu mobile/ordinateur, l'accessibilité et les tests associés.

## Phases

| Phase | Statut | Objectif |
| --- | --- | --- |
| [00 — Cadrage](phases/00-cadrage.md) | Socle terminé ; compléments ouverts | Contenu et exigences |
| [01 — Socle technique](phases/01-socle-technique.md) | Terminée localement | Architecture, tests, CI |
| [02 — Direction artistique](phases/02-direction-artistique.md) | À démarrer — phase active | Identité visuelle et première section |
| [03 — Portfolio](phases/03-portfolio.md) | À faire | Sections, interactions et tests associés |
| [04 — Validation et livraison](phases/04-validation-livraison.md) | À faire | Vérifications et préparation de la livraison |

Statuts utilisables : à faire, en cours, bloquée, terminée. Une phase est terminée
lorsque ses critères de sortie sont vérifiés ; les tests accompagnent chaque
fonctionnalité, pas seulement la phase finale.

## État technique observé

- Dépôt distant `origin` : https://github.com/Raherinotoavina/sm_portfolio.git ;
  branche locale `main`. Publication initiale en cours ; résultat consigné au journal.

- Next.js 16.3.6, React 19.2.8, TypeScript et Tailwind CSS 4 dans `package.json`.
- Gestionnaire déclaré : pnpm 10.30.1.
- Introduction minimale composée depuis `components/`, données dans `content/`,
  utilitaires dans `lib/`, bouton shadcn/ui Radix adapté et configuration installés.
- Vitest 5, React Testing Library et jsdom : 9 tests, 4 fichiers de test.
- `pnpm check` réussi : lint, types, couverture et build Webpack.
- Couverture du socle : 100 % des lignes, instructions, branches et fonctions
  (6 fichiers applicatifs). Seuil de 80 % global et par fichier vérifié par un
  fichier non importé temporaire, qui a correctement provoqué un échec.
- GitHub Actions configuré sur push et pull request ; exécution distante non vérifiée.
- Node 24 prévu en CI, contrôles locaux sous Node 26.9.0. Le build utilise Webpack
  après une restriction locale de port avec Turbopack ; `pnpm build:turbo` reste disponible.
- Aucun contrôle visuel navigateur effectué à cette phase ; à réaliser en phase 02.

## Décisions et contexte à préserver

- Source du contenu : [PORTFOLIO_CONTENT.md](../PORTFOLIO_CONTENT.md).
- Règles de développement : [AGENTS.md](../AGENTS.md).
- Clean code, architecture claire, Tailwind CSS, shadcn/ui, tests de toutes les
  fonctionnalités et couverture minimale de 80 % sont demandés par le propriétaire.
- Le design doit surprendre et donner la sensation d'entrer dans un autre univers.
- « Observatoire numérique personnel » est une proposition, pas un thème validé.
- Aucun blocage pour commencer la direction artistique. Les informations personnelles encore
  manquantes sont listées dans la phase 00 et ne doivent pas être inventées.

## Utilisation du suivi

Lire ce fichier et la phase active en début de session. À la fin, actualiser les
statuts, les critères accomplis et la prochaine action ; ajouter une entrée dans
le [journal](JOURNAL.md) avec les fichiers concernés, vérifications et limites.
Conserver les anciennes entrées pour garder la trace des décisions.

Ce dossier accompagne le dépôt : une nouvelle conversation ouverte sur ce même
projet pourra reprendre à partir de ces fichiers et des consignes d'AGENTS.md.
