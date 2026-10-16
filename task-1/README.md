# Clone Task 1: Layout in React

A React (Vite) recreation of the Erased Tapes blog post page, built from the
desktop wireframe and written specification for Web Dev II (CCO5104-20),
Assessment 1.

## Running the project

```
cd task-1
npm install
npm run dev
```

Then open the `localhost` link shown in the terminal.

## Structure

The page is built from function-based React components, one per section:

| Component | Section |
| --- | --- |
| `Header.jsx` | Logo and navigation links |
| `Intro.jsx` | Title, subtitle and larger opening paragraph |
| `Article.jsx` | Main article text in three columns |
| `Albums.jsx` | Featured album and four albums in a CSS Grid |
| `Author.jsx` | Author bio, round photo and social icons |
| `Comments.jsx` | Reader comments |
| `Footer.jsx` | Footer links, copyright and social icons |

`App.jsx` puts the components together. `index.css` holds the global styles
(fonts and page background) and `App.css` holds the styles for each section.

## Layout techniques

- **Flexbox:** header, author section, social icons and footer
- **CSS Grid:** album grid (the featured album spans two columns and two rows)
- **CSS multi-column layout:** three-column article

## Acknowledgements

Images and placeholder text were provided with the assessment. Fonts are
Protest Guerrilla and Josefin Sans from Google Fonts.

Some parts of this project were written with help from Claude (Anthropic).
These are marked with a "Generative AI acknowledgement" comment in the code,
including the prompt used.
