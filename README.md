# jiwon24lee.github.io

Personal research profile, built with Jekyll and served by GitHub Pages from the `poole-style` branch.

## Common edits

| To change… | Edit |
| --- | --- |
| Publications | `_data/publications.yml` (newest first; `doi: ""` until a DOI exists) |
| Patents | `_data/patents.yml` |
| Any other section | the matching file in `_cv/` (sections appear in filename order) |
| Header links | `_includes/header.html` |
| Colors (light and dark) | `styles.scss`, section 1 (Variables) |

Example publication entry:

```yaml
- title: "Paper Title"
  authors: ["First Author", "Jiwon Lee", "Last Author"]   # your name is highlighted automatically
  venue: "IEEE/ACM International Symposium on Microarchitecture (MICRO), 2026."
  doi: "https://doi.org/10.xxxx/xxxxx"
```

## Layout

```
_config.yml            site settings
_data/                 publications.yml, patents.yml
_cv/                   one Markdown/HTML file per home-page section
_includes/             head, header, footer, list templates, icons/*.svg
_layouts/              default.html (page frame), page.html (/cv/… pages)
styles.scss            all styles in one file: variables (breakpoints, colors), base, layout, masthead
assets/img/            web-sized photos used on the page
assets/js/site.js      theme picker, phone menu
```

- **Theme:** Auto (follows the device setting) by default; the picker in the header can force Light or Dark, and the choice is remembered in the browser.
- **Last updated** in the footer is the build time, so it changes on every push.
- **Photos:** keep `width`/`height` on `<img>` equal to the real file size. In After Hours, `--ratio` is width ÷ height.

## Local preview

```sh
bundle exec jekyll serve   # then open http://localhost:4000
```
