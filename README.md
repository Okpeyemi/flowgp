# FlowGP

Un projet web basé sur Next.js 15 et React 19, écrit en TypeScript, conçu pour offrir des performances élevées et une expérience développeur moderne (Turbopack, ESlint, Tailwind CSS v4).

## Sommaire
- [Aperçu](#aperçu)
- [Technologies](#technologies)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Démarrage](#démarrage)
- [Scripts disponibles](#scripts-disponibles)
- [Structure du projet (indicative)](#structure-du-projet-indicative)
- [Qualité et linting](#qualité-et-linting)
- [Déploiement](#déploiement)
- [Dépannage](#dépannage)
- [Roadmap](#roadmap)
- [Contribuer](#contribuer)
- [Licence](#licence)
- [Auteur](#auteur)

---

## Aperçu

- Nom du paquet: `flowgp`
- Version: `0.1.0`
- Framework: Next.js `15.3.2`
- Runtime client: React `19`
- Langage: TypeScript
- Styles: Tailwind CSS `v4`
- Linting: ESlint `^9` + `eslint-config-next`

## Technologies

- Next.js 15 (App Router, build et rendu modernes)
- React 19
- TypeScript
- Tailwind CSS v4
- ESLint (config Next.js)

## Prérequis

- Node.js: 18.18+, 20+ ou 22+ (recommandé: LTS 20+)
- Un gestionnaire de paquets: npm, pnpm ou yarn

Vérifier la version de Node:
```bash
node -v
```

## Installation

Cloner le dépôt puis installer les dépendances:
```bash
git clone https://github.com/Okpeyemi/flowgp.git
cd flowgp
npm install
```

## Démarrage

En mode développement (avec Turbopack):
```bash
npm run dev
```
- Ouvrez http://localhost:3000 dans votre navigateur.

Build production:
```bash
npm run build
```

Démarrer en production (après build):
```bash
npm run start
```

## Scripts disponibles

Depuis `package.json`:
- `npm run dev` — Lance le serveur de dev Next.js avec Turbopack.
- `npm run build` — Construit l’application pour la production.
- `npm run start` — Démarre le serveur Next.js en mode production.
- `npm run lint` — Exécute ESLint sur le projet.

## Structure du projet (indicative)

La structure exacte peut varier selon votre organisation. Mettez-la à jour pour refléter votre arborescence réelle.

```text
flowgp/
├─ app/                  # Routes et pages (App Router Next.js)
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/           # Composants UI réutilisables
├─ lib/                  # Utilitaires, clients, logique partagée
├─ public/               # Assets statiques (images, favicons, etc.)
├─ styles/               # Feuilles de style globales
├─ .eslintrc.*           # Configuration ESLint
├─ package.json
└─ tsconfig.json
```

## Qualité et linting

Lancer le lint:
```bash
npm run lint
```

- Le projet utilise `eslint-config-next` pour des règles adaptées à Next.js.
- Intégrez ESLint dans votre IDE pour un feedback en temps réel.


## Déploiement

Options courantes:
- Vercel (recommandé pour Next.js): connectez le dépôt et laissez la configuration par défaut (Build Command `next build`, Output `.next`).
- Docker / Node serveur: construisez avec `npm run build` puis lancez `npm run start` derrière un reverse proxy.
- Autres plateformes (Render, Netlify via adaptateurs, etc.).

Assurez-vous:
- D’utiliser une version de Node compatible (18.18+, 20+, 22+).
- De fournir les variables d’environnement nécessaires en production.

## Dépannage

- Erreurs de build liées à Node: vérifiez `node -v` et passez à une version supportée.
- Classes Tailwind non appliquées: confirmez l’import `@import "tailwindcss";` dans la feuille de style globale et que le fichier est bien chargé par Next.js.
- Problèmes de modules: supprimez `node_modules` et `package-lock.json`/`pnpm-lock.yaml`/`yarn.lock`, puis réinstallez.

```bash
rm -rf node_modules
rm -f package-lock.json pnpm-lock.yaml yarn.lock
npm install
```

## Roadmap

- [ ] Décrire les fonctionnalités principales et priorités
- [ ] Ajouter des tests (unitaires / E2E) et CI
- [ ] Documenter l’architecture (schémas, décisions)
- [ ] Ajouter des exemples d’API / d’intégrations externes
- [ ] Internationalisation (le cas échéant)

## Contribuer

Les contributions sont les bienvenues !
1. Ouvrez une issue pour discuter d’un changement majeur.
2. Créez une branche depuis `main`.
3. Ouvrez une Pull Request claire et documentée.

Lancement local rapide:
```bash
git checkout -b feature/ma-fonctionnalite
npm run dev
# ...vos changements...
git commit -m "feat: description de la fonctionnalité"
git push origin feature/ma-fonctionnalite
```

## Licence

Indiquez ici la licence du projet (ex: MIT, Apache-2.0).  
Si aucune licence n’est précisée, le projet est « All rights reserved » par défaut.

## Auteur

- @Okpeyemi — Propriétaire du dépôt
