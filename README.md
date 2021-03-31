[![Netlify Status](https://api.netlify.com/api/v1/badges/e2370e27-35e7-4e12-bad4-968e0a41481c/deploy-status)](https://app.netlify.com/sites/nervous-jennings-9e64a5/deploys) [![unit tests](https://github.com/kpatenio/ovniAventures/actions/workflows/main.yml/badge.svg)](https://github.com/kpatenio/ovniAventures/actions/workflows/main.yml) [![ovniAventures](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/pr7p6a&style=flat-square&logo=cypress)](https://dashboard.cypress.io/projects/pr7p6a/runs)

# ovniAventures
#### Français
Un jeu d'aventure texte simple et court s'est inspiré du livre [OVNI](https://www.amazon.ca/OVNI-T-01-FABRICE-PARME/dp/2847899723).

Pour jouer, consultez: [https://www.ovniaventures.online/](https://www.ovniaventures.online/)

#### English
A short and simple text adventure game inspired by [OVNI](https://www.amazon.ca/OVNI-T-01-FABRICE-PARME/dp/2847899723).

To play, visit: [https://www.ovniaventures.online/](https://www.ovniaventures.online/)

## À propos / About
#### Français
Le but de ce projet, c'est de créer un jeu d'aventure texte simple pour l'analyser, explorer l'histoire du format, voire apprendre comment programmer un tel jeu pour la première fois.

On a réalisé *ovniAventures* comme un projet créatif pour le cours FREN 354 (automne 2020) à l'Université de l'Alberta.

#### English
The goal of the project is to create a simple text adventure game to analyze it, explore the history of its format, and even learn how to develop such a game for the first time.

*ovniAventures* was made as a creative project for the course FREN 354 (Fall 2020) at the University of Alberta.

## Deployment
#### English
The app is deployed automatically using Netlify. When a change is pushed to the `main` branch, it should update on its own. However, if deploying manually is needed (via the Netlify CLI), follow the steps below:
- first ensure `main` is up to date
- run `npm run build`
- run `netlify deploy` for a preview
- run `netlify deploy --prod` to deploy to domain
