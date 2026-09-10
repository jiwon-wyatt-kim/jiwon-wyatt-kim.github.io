# Personal Academic Website

This is a free, static academic website designed for GitHub Pages.

## Edit Your Information

Update the placeholder text in the relevant page:

- `index.html`: home, biography, affiliation, education, and contact
- `research.html`: research themes and expandable study summaries
- `publications.html`: publications
- `teaching.html`: courses and mentoring
- `team.html`: current members and alumni
- `news.html`: updates

All pages share `styles.css` and use Merriweather headings and Inter body text.
Fonts load from Google Fonts, with local fallback fonts when offline.
Navigation is included in each HTML file so it works without JavaScript.

## Research Page

The Research page uses topic filters (`research.js`) and native expandable study
summaries (`details` elements). All research remains readable without JavaScript.
Edit each study directly in `research.html`; keep its publication links aligned
with the IDs in `publications.html`.

The three conceptual illustrations use `assets/research-concepts.png`, an
AI-generated triptych, cropped into three views by CSS. They are not photographs
of actual studies. To substitute your own research photos, use separate image
paths and remove the corresponding `art-decisions`, `art-teams`, or
`art-technology` class. Update the image alt text and figure caption too.

Replace the following sample information before publishing:

- `Your Name`
- title, department, university, and email
- research themes
- selected publications
- teaching and mentoring entries
- news items
- links to CV, Google Scholar, GitHub, LinkedIn, or ORCID

To use a real headshot, add an image file such as `headshot.jpg` to this folder
and replace the `intro-photo` placeholder in `index.html` with:

```html
<img class="intro-photo" src="headshot.jpg" alt="Portrait of Your Name">
```

## Publish on GitHub Pages

1. Create a public GitHub repository named `YOUR-USERNAME.github.io`.
2. Add these files to that repository.
3. Commit and push to the `main` branch.
4. Visit `https://YOUR-USERNAME.github.io`.

For a project repository instead of a username site, enable GitHub Pages in the
repository settings and publish from the `main` branch root.
