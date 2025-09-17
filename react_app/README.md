# React App — Yoga Website

Guide de démarrage et notes pour le sous-projet `react_app`.

## Vue d'ensemble

Cette application contient la version React du site statique présent dans `integration-bootstrap/`.
Le projet utilise `react` + `react-router` pour les routes, et importe une grande partie du CSS original pour préserver l'apparence.

Emplacement des fichiers importants:

- `app/routes/home.tsx` — page d'accueil (assemble les sections : Navbar, Hero, Features, Gallery, Newsletter, Footer).
- `app/routes/contact.tsx` — page Contact (rend le composant `Contact`).
- `app/components` — composants React (HeroSection, Navbar, Footer, ...).
- `app/styles` — styles composants importés localement (`hero-section.css`, `fonts.css`, ...).
- `integration-bootstrap/` — assets et CSS originaux réutilisés.

## Commandes utiles

- `npm run dev` — démarre le serveur de développement (hot-reload).
- `npm run build` — génère la build côté serveur pour production via `react-router build`.
- `npm start` — sert la build générée (`react-router-serve`).
- `npm run typecheck` — exécute les types React Router et `tsc` pour la vérification TypeScript.

## Dépendances principales et rôle

- `react`, `react-dom` — base de l'application UI.
- `react-router` (v7) et `@react-router/dev` — routage côté serveur & dev (le projet est configuré pour utiliser l'outil `react-router dev/build/serve`).
- `bootstrap` — utilitaires CSS et composants (la CSS est importée dans `home.tsx`).
  - Important : `bootstrap/dist/js/bootstrap.bundle.min.js` est importé dans `app/root.tsx` pour activer les composants interactifs (collapse, dropdown). Sans ce bundle, le collapse du navbar ne fonctionne pas.
- `isbot` — utilitaire utilisé par `react-router` internement pour détection d'agents (préinstallé par la stack).

Dev dependencies notables:

- `vite` — bundler / dev server utilisé par the `react-router dev` flow.
- `typescript`, `@types/*` — type checking for development.
- `tailwindcss` & `@tailwindcss/vite` — present in `app.css` (utility directives are included in the project template), you can remove or adapt them if you don't use Tailwind.

## Remarques spécifiques

- Fonts: the app uses a local `@font-face` fallback for Poppins (files expected under `public/fonts/Poppins-*.woff2`). If those files are absent, the app falls back to Google Fonts via a network import. See `app/styles/fonts.css` and `public/fonts/README.md`.
- Legacy CSS: the project currently imports the original site CSS from `integration-bootstrap` to keep the visual look. Consider migrating those rules into component-scoped CSS to avoid global conflicts.
- Routing: routes are declared in `app/routes.ts`. Add new route files under `app/routes/` and export them via the `routes.ts` manifest if needed.

## Débogage rapide

- 404 sur `/contact` : assurez-vous d'avoir ajouté `routes/contact.tsx` à `app/routes.ts` (présent par défaut dans cette copie). Si vous voyez toujours un 404, redémarrez le serveur de dev.
- Navbar collapse ne fonctionne : vérifier que `bootstrap` JS est importé dans `app/root.tsx` et qu'il n'y a pas d'erreurs JS dans la console.

## Prochaines améliorations suggérées

- Convertir le CSS global en CSS modules / CSS-in-JS pour isoler les styles.
- Remplacer les ancres `<a href="/contact">` par le composant `Link` du routeur pour une navigation SPA plus fluide.
- Ajouter des tests unitaires et E2E pour vérifier le rendu des composants et le formulaire Contact.

Si vous voulez que j'applique l'une de ces améliorations (par ex. convertir les liens en `Link` ou télécharger/installer localement les fichiers Poppins), dites-le et je m'en occupe.

# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```


### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

