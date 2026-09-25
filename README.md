# Portfolio — RAHERINOTOAVINA Safidy Mariël

Portfolio immersif développé avec Next.js App Router, React, TypeScript,
Tailwind CSS 4 et shadcn/ui (Radix). La direction « intelligence sereine » mêle
composition éditoriale, organisme cognitif abstrait et animations progressives
au défilement. Suivi : [avancement/README.md](avancement/README.md).

## Installation et commandes

Node 24 (`.node-version`) et pnpm 10.30.1 (`packageManager`) sont les versions
prévues pour la CI. Les premiers contrôles locaux ont été exécutés sous Node 26.9.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Ouvrir http://localhost:3000.

| Commande | Usage |
| --- | --- |
| `pnpm lint` | ESLint sans avertissement autorisé |
| `pnpm typecheck` | Génération des types de routes puis TypeScript |
| `pnpm test` | Tests unitaires, une exécution |
| `pnpm test:watch` | Tests pendant le développement |
| `pnpm test:coverage` | Tests et seuils de couverture |
| `pnpm build` | Build de production avec Webpack |
| `pnpm build:turbo` | Build alternatif avec Turbopack |
| `pnpm start` | Serveur de production après build |
| `pnpm check` | Lint, types, couverture et build |

Webpack est le moteur de build par défaut ici : Turbopack a rencontré une
restriction d'ouverture de port lors de la transformation PostCSS dans
l'environnement local, y compris après relance autorisée. Le build Webpack
fonctionne ; le script alternatif permet de réévaluer Turbopack ultérieurement.
Les polices système évitent tout téléchargement de police pendant le build.

## Architecture

- `app/` : routes, document racine, métadonnées et styles globaux.
- `content/` : données éditoriales confirmées, indépendantes de React.
- `components/` : présentation du portfolio.
- `components/ui/` : primitives shadcn/ui adaptées et possédées par le projet.
- `lib/` : utilitaires indépendants des sections et testables.
- `tests/` : initialisation des tests ; tests comportementaux colocaux en `*.test.ts(x)`.

Les routes composent les composants ; les composants lisent le contenu et
utilisent les primitives. Ne pas ajouter de couche d'accès aux données tant
qu'aucun service externe n'est nécessaire. La configuration `components.json`
permet de poursuivre l'intégration shadcn/ui ; les tokens CSS actuels couvrent
le bouton installé et seront étendus avec les prochains composants.

## Tests et couverture

Vitest 5, React Testing Library, user-event et jsdom vérifient les comportements
visibles : liens, contenu, clavier, état désactivé, composition, document HTML et
révélations au défilement avec ou sans `IntersectionObserver`.
Le layout est rendu en HTML statique pour éviter d'imbriquer un document HTML
complet dans celui de jsdom. Les composants synchrones actuels sont testables
directement ; tout futur Server Component asynchrone nécessitera aussi une
vérification d'intégration adaptée.

Le seuil de 80 % s'applique aux lignes, instructions, branches et fonctions,
globalement **et par fichier**. Tous les fichiers JS/TS sont inclus, même s'ils
ne sont jamais importés par les tests. Ni les routes, ni le contenu, ni les
primitives UI ne sont exclus.

Exclusions dans `vitest.config.mts` : dépendances, sorties générées (`.next`,
`out`, `build`, `coverage`), déclarations de types, tests et infrastructure
`tests/`, fichiers `*.config.*`. Ces fichiers ne sont pas du code applicatif à
mesurer ; ne pas placer de fonctionnalité métier dans ces emplacements.
CSS, JSON et Markdown ne contiennent pas de code JS instrumentable et requièrent
leurs propres vérifications visuelles, de configuration ou de contenu.

Rapports : `coverage/index.html`, `coverage/lcov.info` et
`coverage/coverage-summary.json` (non versionnés).

## Intégration continue

`.github/workflows/ci.yml` exécute installation verrouillée, lint, types,
tests/couverture et build à chaque push et pull request. Il écoute aussi
`vercel.deployment.ready`, contrôle le SHA réellement déployé et transmet le
statut `Vercel - sm-portfolio: lint` aux Deployment Checks. Les rapports sont
conservés 14 jours. Le workflow doit être présent sur `main` pour recevoir les
événements `repository_dispatch` ; son état distant doit être vérifié après fusion.

Le job `Lint, types, coverage and build` doit devenir un contrôle requis dans
la protection de la branche principale pour bloquer les fusions en échec.
Ce réglage distant n'est pas effectué. GitHub Actions intervient après le push,
il ne peut pas empêcher celui-ci d'arriver sur le serveur.

## Références

- Consignes Next.js spécifiques à la version : `node_modules/next/dist/docs/`.
- [Installation manuelle shadcn/ui](https://ui.shadcn.com/docs/installation/manual).
- [Bouton Radix shadcn/ui](https://ui.shadcn.com/docs/components/radix/button).
- [Configuration de couverture Vitest](https://vitest.dev/config/coverage).
- Contenu et sources personnelles : [PORTFOLIO_CONTENT.md](PORTFOLIO_CONTENT.md).
