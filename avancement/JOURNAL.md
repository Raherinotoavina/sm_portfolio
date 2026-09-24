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

## 2026-09-24 — Liaison GitHub

- Demande du propriétaire : relier et pousser le projet vers
  https://github.com/Raherinotoavina/sm_portfolio.git sur `main`.
- Dépôt Git local et commit initial déjà présents ; historique et README conservés.
- Dépôt distant vérifié sans référence existante ; remote `origin` ajouté.
- Commit du socle `7b33040` poussé avec succès ; `main` suit `origin/main`.
- Vérification GitHub Actions via `gh` indisponible : CLI non authentifiée.
  Aucun résultat distant de CI annoncé. Protection de branche non configurée.
- Suite : phase 02 ; consulter les résultats du workflow dans GitHub Actions.

## 2026-09-24 — Branches dédiées

- Demande du propriétaire : créer une nouvelle branche pour chaque fonctionnalité
  ou correction et conserver cette consigne dans `AGENTS.md`.
- Créé `codex/docs-branch-workflow` depuis `main` propre avant les modifications.
- Ajouté le workflow Git dans `AGENTS.md` et rappelé la règle dans le tableau de bord.
- Vérifications : état Git et `git diff --check` ; tests applicatifs non exécutés,
  modifications documentaires uniquement. Aucun commit, push ni fusion effectué.
- Phase 02 inchangée, à démarrer : aucune case fonctionnelle supplémentaire validée.
- Suite : enregistrer ces changements lorsque demandé, puis démarrer la direction
  artistique sur sa propre branche.

## 2026-09-24 — Première proposition artistique

- Consignes Git enregistrées séparément dans `259e31f` sur la branche documentaire,
  puis création de `codex/feat-artistic-direction` depuis ce commit. Aucun push/fusion.
- Accueil « observatoire numérique » : typographie éditoriale, palette encre/abricot,
  sphère orbitale CSS, navigation, contact et repères issus du contenu confirmé.
- Fichiers : `components/portfolio-introduction.tsx`, son CSS Module,
  `app/globals.css`, `content/profile.ts`, `app/page.test.tsx` et suivi.
- Illustration sans JS client supplémentaire ni image distante ; animation courte
  désactivée par défaut lorsque la préférence de réduction du mouvement est active.
- `pnpm check` réussi : 12 tests, couverture 100 % des quatre métriques JS/TS,
  lint/types/build. `git diff --check` réussi.
- Contrôles sur build de production : ordinateur 1280 × 720, mobiles 390 × 844
  et 320 × 740, ancre d'exploration, focus du lien d'évitement et destination.
  Débordement décoratif identifié puis corrigé ; aucune erreur console relevée.
- Limites : pas d'audit complet d'accessibilité ni de test multi-navigateurs ;
  préférence de réduction du mouvement contrôlée dans le CSS, sans émulation.
  Pas de validation graphique du propriétaire ni de CI distante exécutée ici.
- Serveur d'aperçu local démarré sur http://127.0.0.1:3000 ; modifications de
  phase 02 non committées. Suite : retour visuel avant généralisation en phase 03.

## 2026-09-24 — Refonte « carnet de terrain numérique »

- Retour du propriétaire : la première proposition rappelle trop Claude par son
  symbole, sa couleur et le prénom en italique. Demande d'une identité unique,
  d'études de cas et d'interactions inspirées des portfolios Awwwards.
- Vérifié l'état Git propre, puis créé `codex/feat-field-atlas-redesign` avant
  modification. La proposition précédente est au commit `77dff5a`, poussé sur sa
  branche distante, non fusionné dans `main`.
- Remplacé l'accueil par une composition de carnet de terrain numérique : papier
  froid, bleu électrique, jaune acide, caractères condensés, grilles et repères.
  Aucun astérisque, globe ou serif italique repris de la première proposition.
- Ajouté une étude de cas SIRH & Plus dépliable, avec rôle, contribution et stack
  confirmés ; contexte du produit distingué du travail personnel. Le schéma est
  explicitement conceptuel. Profil, compétences et contact intégrés.
- Interactions : disclosure clavier natif, survols, ancres ; transitions supprimées
  en préférence de mouvement réduit. Aucun projet ni résultat inventé.
- `pnpm check` réussi : lint, types, 12 tests, couverture 100 % du code JS/TS
  mesuré et build Webpack. La couverture ne mesure ni le CSS ni la qualité visuelle.
- Navigateur local contrôlé à 1280 × 800 et 390 × 844 : largeur du document égale
  au viewport ; ouverture de l'étude de cas vérifiée ; aucune erreur console relevée.
  Audit d'accessibilité complet et
  contrôle multi-navigateurs non réalisés.
- Fichiers : `components/portfolio-introduction.tsx`, son CSS Module,
  `app/globals.css`, `app/page.test.tsx`, suivi. Aucun commit ni push de la refonte.
- Suite : recueillir le retour du propriétaire sur la nouvelle piste ; obtenir les
  exemples concrets de SIRH & Plus et compléter expériences, formation et certificats.

## 2026-09-24 — Validation de la direction et intégration du parcours

- Le propriétaire a validé la direction « carnet de terrain numérique » et demandé
  de continuer l'intégration. Phase 02 marquée terminée ; phase 03 poursuivie sur
  la même branche dédiée `codex/feat-field-atlas-redesign`, sans mélanger de tâche.
- Ajouté des données éditoriales séparées dans `content/career.ts` et
  `content/projects.ts` ; extrait la présentation du projet vers
  `components/project-case-study.tsx`.
- Intégré les expériences VA-Mada et MTEFoP, la licence et le Master II sans
  inventer les dates ou statuts manquants. Sept certificats HackerRank reliés à
  leurs justificatifs et distinctions CodinGame reliées au profil public.
- Navigation mise à jour pour les sections numérotées 01 à 05.
- `pnpm check` réussi : lint, types, 14 tests, couverture 100 % du code JS/TS
  mesuré et build Webpack.
- Étape enregistrée dans le commit `907ac0f` sur la branche dédiée ; aucun push
  ni fusion. `git diff --check` réussi avant commit.
- Aperçu local : sections et liens visibles ; contrôles de largeur à 390 × 844 et
  1280 × 800, sans débordement ni erreur console. Audit d'accessibilité complet
  et multi-navigateurs restent à faire.
- Suite : ajouter les exemples concrets de SIRH & Plus, la période de contribution,
  les informations de formation et de stage lorsque le propriétaire les fournit.

## 2026-09-24 — Précisions SIRH & Plus, Master II et stage

- Informations directement confirmées par le propriétaire : contribution à la
  migration d'une structure monolithique vers des micro-frontends ; maintenance
  des modules Gestion des maintenances, Formation et surtout GTA (Gestion des
  temps d'activité) ; Master II en cours ; stage MTEFoP commencé en février 2023
  pour trois mois.
- Mis à jour `PORTFOLIO_CONTENT.md`, `content/projects.ts`, `content/career.ts`,
  le schéma de l'étude de cas et les tests. La migration est présentée comme une
  participation, sans attribuer le pilotage ou le résultat global au propriétaire.
- `pnpm check` réussi : lint, types, 14 tests, couverture JS/TS mesurée à 100 %
  et build Webpack. Le navigateur local affiche les nouveaux contenus et l'étude
  de cas dépliée ; aucune erreur ou avertissement console relevé.
- Phase 03 terminée localement pour le contenu confirmé ; phase 04 devient active.
  Restent les résultats et la période exacte SIRH & Plus, les réalisations du
  stage, et les contrôles complets de validation. Aucun push ni fusion effectué.
- Suite : validation du parcours, de l'accessibilité, des performances et des
  liens, puis préparation de la livraison selon les choix du propriétaire.

## Format pour les prochaines entrées

Date — étape ; travail réalisé ; décisions ; fichiers concernés ; vérifications
et résultats ; blocages ou limites ; prochaine action.
