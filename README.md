# Home route

This folder contains the `Home` route component for the React app. The `Home` route assembles the page sections (Navbar, Hero, Features, Health sections, Gallery, Newsletter, Footer) and wires a few runtime behaviors.

## Files

- `home.tsx` — top-level page component that imports legacy CSS and mounts components:
  - Imports: `bootstrap` CSS, `integration-bootstrap` CSS files, and local components.
  - Inline `useEffect` attaches a theme toggle and a small hover-dropdown behavior for the "Home" menu.

## Components used

- `Navbar` (or `NavbarFromHtml`) — top navigation. You can switch between the two implementations by importing the desired component in `home.tsx`.
- `Hero`, `Feature`, `Health1`, `Health2`, `Gallery`, `News`, `Footer` — page sections.

## Important runtime dependencies

- Bootstrap JavaScript: `bootstrap/dist/js/bootstrap.bundle.min.js` must be imported once (it is imported in `app/root.tsx`) so interactive behaviors (collapse, dropdown) work.

## Styling notes

- The route intentionally imports the legacy CSS files from `integration-bootstrap` to preserve the original visual design.
- Global fonts: `app.css` imports local font fallbacks and falls back to Google Fonts.

## Troubleshooting

- Navbar collapse doesn't open on small screens:
  - Verify `bootstrap.bundle.min.js` is loaded (see DevTools → Network).
  - Confirm the toggler button has `data-bs-target="#navbarNav"` and `aria-controls="navbarNav"` (without `#`).
- Poppins font not applied:
  - Ensure `react_app/public/fonts/` contains `Poppins-*.woff2` files or that Google Fonts network requests succeed.
- Dropdown on hover not showing:
  - The `home.tsx` code attaches hover listeners to `.nav-home-dropdown`; ensure `nav-home-dropdown` exists and there are no JS errors in console.

## How to switch navbar implementations

1. Open `react_app/app/routes/home.tsx`.
2. Replace the inline `<nav>` markup or the imported `<Navbar />` with `<NavbarFromHtml />` (import it from `~/components/NavbarFromHtml`).

## Next steps / Improvements

- Convert legacy CSS into component-scoped styles to avoid global conflicts.
- Move images used by the legacy CSS into `public/img/` for consistent asset resolution in the React app.
