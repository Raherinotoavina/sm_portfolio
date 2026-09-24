# Phase 02 — Direction artistique

Statut : proposition réalisée et vérifiée localement — retour du propriétaire attendu.

L'introduction neutre a été remplacée par une proposition d'observatoire numérique.
Branche : `codex/feat-artistic-direction`.

Objectif : traduire l'ambition immersive en une identité visuelle concrète.

Demande confirmée : univers unique, surprenant et immersif.
Piste proposée : observatoire numérique personnel ; ne pas la présenter comme
une décision déjà prise par le propriétaire.

- [x] Définir le concept visuel et consigner les choix de la proposition.
- [x] Définir couleurs, typographie, espacements, composants et mouvements.
- [x] Réaliser une première section d'accueil représentative avec ses tests.
- [x] Vérifier le rendu sur mobile et ordinateur, la lisibilité et le clavier.
- [x] Prévoir une expérience cohérente avec réduction des animations.
- [ ] Recueillir le retour du propriétaire avant généralisation en phase 03.

## Choix de la proposition

- Encre `#101313`, ivoire `#f2efe6`, abricot `#f4a16c`, gris secondaire `#a9b0ab`.
- Sans-serif système pour la lecture, serif italique pour Mariël, monospace pour
  les annotations ; aucune police externe à télécharger.
- Composition éditoriale asymétrique, grandes marges, filets fins et sphère rayée
  avec orbites. Illustration décorative en CSS Module, mise en page Tailwind,
  bouton principal issu de la primitive shadcn/ui existante.
- Apparition unique de 1,4 seconde, uniquement avec `prefers-reduced-motion:
  no-preference`. Aucune animation permanente ; défilement instantané si réduction.
- Contenu utile accessible sans animation ; illustration masquée aux lecteurs d'écran.

## Vérifications

- `pnpm check` réussi : 12 tests, couverture JS/TS à 100 % sur les quatre métriques,
  lint, types et build. La couverture ne mesure pas le CSS ni la qualité visuelle.
- Build inspecté dans le navigateur à 1280 × 720, 390 × 844 et 320 × 740.
  Débordement de l'orbite corrigé ; largeur du document égale à celle du viewport mobile.
- Navigation d'exploration et lien d'évitement au clavier vérifiés dans le navigateur.
  Ordre des liens, destinations et contenu confirmé couverts par tests.
- Pas d'erreur/avertissement console relevé. Réduction du mouvement vérifiée dans
  le code, pas par émulation navigateur. Audit complet et autres navigateurs à venir.

Critère de sortie : direction concrète et première section vérifiée ; noter le
retour du propriétaire lorsqu'il est disponible avant de généraliser les choix.
