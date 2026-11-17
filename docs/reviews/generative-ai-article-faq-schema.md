# Generative AI blog article and FAQ schema update

Branch: `seo/generative-ai-article-faq-schema`

Base: merged `main` at `1094e0162e7e44898a502c89d7989c372b29195c`.

Target: `/resources/blogs/how-generative-ai-is-transforming-software-quality-assurance`

Source: `Elevro_Article_and_FAQ_Schema.docx`, supplied on 17 November 2026.

## Changes

Updated the existing BlogPosting JSON-LD emitted by the resource renderer:

- Added the stable article `@id` ending in `#article`.
- Changed `mainEntityOfPage` to the supplied WebPage object and canonical `@id`.
- Used the visible introductory definition as `description`, exactly matching the supplied document.
- Set the publisher to `Elevro Solutions` and its URL to `https://www.elevro.com/`.
- Added `inLanguage: "en"`.

The FAQPage already exactly matches all eight supplied questions and answers. It continues to be generated from the same article FAQ data; no duplicate script was added. BreadcrumbList remains unchanged.

The article's existing image, canonical URL, author name, LinkedIn URL, role and `sameAs` are preserved. Publication remains `2026-10-09`. The known modification timestamp `2026-11-17T14:09:01+05:30` is retained rather than reduced to the document's date-only value; both represent the displayed update date of 17 November 2026, and the schema and OG timestamp remain synchronized.

## Validation

- Both JSON-LD scripts extracted from the supplied DOCX parse successfully as JSON.
- `pnpm build` passed, including TypeScript and generation of all 29 pages.
- `git diff --check` passed.
- Built HTML contains exactly one article entity, one FAQPage and one BreadcrumbList.
- Field comparison against the supplied article schema passed; the modification date was compared by calendar date because the existing timestamp retains its known time and timezone.
- All eight FAQ question/answer pairs exactly match the supplied schema and visible FAQ content.
- The complete generated `<article>` markup is identical to the merged baseline: text, headings, 1-12 / A-G labels, images and author links are unchanged.
- Other blogs' structured data and generated article markup are unchanged.
- Online Schema.org validation was attempted. This browser was redirected to an unusual-traffic human-verification check before reaching the validator, so no successful online-validator result is claimed. A reviewer can run the generated page or its JSON-LD through `https://validator.schema.org/` before merging.

No merge to `main` or production deployment was performed.
