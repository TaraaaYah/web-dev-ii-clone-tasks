# Clone Task 2: Responsive Layouts

A React (Vite) website for watch.it, a made-up movie streaming service, built
from the mobile, tablet and desktop wireframes and written specification for
Web Dev II (CCO5104-20), Assessment 1.

## Running the project

```
cd task-2
npm install
npm run dev
```

Then open the `localhost` link shown in the terminal. Use the browser's
developer tools (device toolbar) to test the different screen sizes.

## Structure

| File | Purpose |
| --- | --- |
| `Header.jsx` | watch.it logo, category links and search button |
| `MovieCard.jsx` | One movie card (poster, title, description and Watch Now button), reused for every movie through props |
| `App.jsx` | Holds the list of six movies and renders a `MovieCard` for each one with `map()` |
| `index.css` | Global styles: fonts and page background |
| `App.css` | Mobile-first layout, plus media queries for tablet and desktop |

## Responsive design

The CSS is written **mobile-first**: the base styles are for phones, and
`min-width` media queries change the layout at the breakpoints in the spec.

| Device | Width | Layout |
| --- | --- | --- |
| Mobile | 360px to 720px | One column, category links hidden, 16px spacing |
| Tablet | 720px to 1024px | Two columns of cards, links shown, 32px spacing |
| Desktop | 1024px and up | Wide first card, two cards side by side, last three cards with the poster on the left, 48px spacing |

The card layout uses **CSS Grid**, and the header and card contents use
**Flexbox**. Colours come from the watch.it brand palette, and the fonts are
Teko and Lato from Google Fonts.

## Acknowledgements

Movie posters and descriptions were provided with the assessment.

Some parts of this project were written with help from Claude (Anthropic).
These are marked with a "Generative AI acknowledgement" comment in the code,
including the prompt used.
