# Hibonite

Store, library, profile and concept-games interface. Plain HTML/CSS/JS, no build step.
Open `index.html` directly, or serve the folder (`npx serve .`).

```
hibonite/
├── index.html
├── css/
│   ├── base.css         tokens, reset, type, .facet cut
│   ├── layout.css       header, tabs, page grid, breakpoints
│   ├── components.css   buttons, hero, cards, rows, slots, profile
│   └── animations.css   loader, scroll reveal, cursor, reduced motion
├── js/
│   ├── data/            games.js, concepts.js (swap for API later)
│   ├── modules/         cursor, store, library, concepts, reveal, tilt, nav
│   └── main.js          entry point
└── assets/
    ├── images/logo/     logo + mark, black and white, transparent PNG
    ├── images/covers/   game art goes here
    ├── fonts/  icons/
```

## Adding content
- Concept games: add `{title,status,h}` to `HB.data.concepts` in `js/data/concepts.js`. Until then, three open slots render.
- Store/library: edit `js/data/games.js` (sample titles are placeholders). `owned:1` puts a game in the library.
- Real cover art: add an `<img>` inside `.cover` in `store.js` / `library.js`.

## Motion
Scroll: progress bar, facet-unfold reveal, count-up stats, filling bars, hero parallax.
Hover: 3D tilt with prism sheen, magnetic buttons, diamond cursor (fine pointers only).
`prefers-reduced-motion` disables all of it.
