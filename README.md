# Yoga Website – Integration (Bootstrap)

This folder contains the static integration of the Yoga landing page using HTML, CSS, and Bootstrap 5.

## Structure

- `index.html` – Main page markup, including:
  - Responsive navbar with theme toggle (light/dark mode)
  - Hero section
  - Feature section
  - Health sections
  - Follow section
  - Newsletter subscription
  - Footer
- `style.css` – Custom styles for layout, colors, typography, and responsive design.
- `styleDark.css` – Dark mode overrides.
- `img/` – All image assets (backgrounds, icons, gallery, etc.)

## Features

- **Responsive Design:** Uses Bootstrap 5 grid and utilities for mobile/desktop layouts.
- **Theme Toggle:** Switch between light and dark mode; preference is saved.
- **Dropdown Menus:** Navbar item  show dropdowns on hover.
- **Modern UI:** Gradient backgrounds, custom fonts (Lora, Poppins), and smooth hover effects.
- **Accessibility:** Semantic HTML, keyboard navigation for forms.

## How to Run

1. Open `index.html` in your browser.(or open with live server)
2. All assets are local; no build step required.

## Customization

- To change images, replace files in `img/`.
- To adjust colors or layout, edit `style.css` and `styleDark.css`.


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

Note: This project now includes a dedicated Contact page at `/contact` and a Testimonials (client reviews) section on the homepage. See `app/routes/contact.tsx` and `app/components/Testimonials.tsx` for implementation details.

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

## Client reviews / Testimonials

J'ai ajouté une section de témoignages clients (component `Testimonials`) utilisée pour afficher des avis via un carrousel.

- Fichier du composant : `app/components/Testimonials.tsx`.
- Le carrousel est implémenté dans `app/components/Carousel.tsx` et utilisé par `Testimonials`.
- Bibliothèques utilisées pour cette fonctionnalité :
  - `motion/react` — animation et drag/gestures pour le carrousel.
  - `react-icons` — icônes pour les petites décorations (étoiles, etc.).

La section est montée sur la page d'accueil via `app/routes/home.tsx` (entre `Gallery` et `News`). Vous pouvez adapter les avis dans `Testimonials.tsx` ou brancher une source de données dynamique (JSON / CMS).

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
