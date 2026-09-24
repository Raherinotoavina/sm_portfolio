# Journal d'avancement

## 2026-09-24 — Cadrage et création du suivi

- Recensé l'identité, les compétences, expériences, formations, contacts et
  certifications dans `PORTFOLIO_CONTENT.md` ; sources publiques consultées lors
  de la session de recensement.
- Confirmé le nom complet et la maintenance de tous les modules frontend
  existants de SIRH & Plus.
- Documenté les exigences techniques et graphiques dans `AGENTS.md`.
- Créé `avancement/`, son tableau de bord et cinq fiches de phase ; ajouté les
  consignes de reprise et de mise à jour dans `AGENTS.md`.
- Vérifications : lecture de `package.json`, `app/page.tsx`, `app/globals.css`,
  état Git et contrôle des espaces avec `git diff --check`.
- Tests applicatifs : non exécutés, changements documentaires uniquement.
- Limites : CI, tests, couverture et interface personnalisée non implémentés.
- Suite : phase 01, mise en place du socle technique et qualité.

## 2026-09-24 — Phase 01 terminée localement

- Architecture : routes `app/`, contenu `content/`, présentation `components/`,
  primitives `components/ui/`, utilitaires `lib/` ; README réécrit avec commandes et règles.
- Installation manuelle shadcn/ui Radix : configuration, utilitaire `cn`, bouton
  adapté avec composition en lien, styles Tailwind et focus clavier.
- Introduction minimale utilisant les faits confirmés, document en français,
  métadonnées personnelles et lien d'évitement. Design complet réservé à la phase 02.
- Vitest 5, jsdom et Testing Library ; neuf tests comportementaux dans quatre fichiers.
- Couverture de tous les fichiers JS/TS applicatifs, avec exclusions techniques
  documentées et minimum de 80 % sur les quatre métriques, globalement et par fichier.
- Vérification négative : ajout temporaire d'un fichier non importé, échec attendu
  à 0 % par fichier et 60 % global sur les branches ; suppression du seul fichier
  de vérification créé pour ce contrôle, puis relance réussie à 100 %.
- GitHub Actions configuré sur push/PR avec installation verrouillée et rapport
  de couverture en artefact. Node 24 prévu ; pnpm 10.30.1 conservé.
- `pnpm check` et `git diff --check` réussis : lint, types, tests, couverture,
  compilation et génération des pages statiques. Contrôles locaux sous Node 26.9.0.
- Turbopack échoue sur l'ouverture d'un port pour PostCSS, même après relance
  autorisée ; Webpack validé et choisi pour `build`, script `build:turbo` conservé.
- Vite résout maintenant les alias TypeScript nativement ; plugin redondant retiré.
- Limites : aucune exécution distante GitHub ni protection de branche, aucun
  déploiement, aucun contrôle visuel navigateur. Le lockfile est actualisé.
- Suite : phase 02, proposition concrète de direction artistique et vérification visuelle.

## Format pour les prochaines entrées

## 2026-09-24 — Liaison GitHub

- Demande du propriétaire : relier et pousser le projet vers
  https://github.com/Raherinotoavina/sm_portfolio.git sur `main`.
- Dépôt Git local et commit initial déjà présents ; historique et README conservés.
- Dépôt distant vérifié sans référence existante ; remote `origin` ajouté.
- Préparation du commit du socle et du suivi ; résultat du push à vérifier.

## Format pour les prochaines entrées (rappel)

Date — étape ; travail réalisé ; décisions ; fichiers concernés ; vérifications
et résultats ; blocages ou limites ; prochaine action.
