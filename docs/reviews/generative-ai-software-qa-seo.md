# Generative AI software QA blog: SEO review

Branch: `seo/generative-ai-software-qa`

Base: `main` at `1bc0e239678e6b77f9bf365822fef66d1e2ad93d`.

Article: `/resources/blogs/how-generative-ai-is-transforming-software-quality-assurance`

## Implementation against the 17 November 2026 SEO plan

| # | Recommendation | Implementation |
| --- | --- | --- |
| 1 | Shorter search title | Set the exact requested 54-character metadata title: `How Generative AI Is Transforming Software QA \| Elevro`. The full article H1 and URL remain consistent with the existing blog listing. |
| 2 | Named author and bio | Added Rahul Vala, Founder & CEO, Elevro Solutions, with two experience paragraphs beside the byline and an author box at the end. Rahul confirmed the author name and supplied [his personal LinkedIn URL](https://www.linkedin.com/in/rahul-vala-0352993b/). The author name, byline, profile links, author metadata, OG author and Person schema now use that URL, including `sameAs`. |
| 3 | Source and verify statistics | Linked the original Capgemini report page and Tricentis research announcement. Corrected the Tricentis claim: the report says 60% of surveyed organizations deploy untested code, not that 60% of AI-generated code contains defects. Capgemini's skill ranking is 63% for generative AI and 60% for core QE skills. |
| 4 | Visible dates, schema and OG dates | Show `9 October 2026` and `Last updated 17 November 2026`. Added `dateModified`, `article:published_time` and `article:modified_time`; existing `datePublished` is retained. |
| 5 | Definition and key takeaways | Added the exact requested definition immediately below the H1 and four takeaway bullets. |
| 6 | Structured data | Use one `BlogPosting` entity for this article, plus `FAQPage` and `BreadcrumbList`. `BlogPosting` is an Article subtype; a separate duplicate Article entity is not emitted. Google Rich Results Test validation is **pending**; see below. |
| 7 | Heading hierarchy | Grouped the seven capabilities beneath their existing H2, using nested sections with H3 headings. |
| 8 | Visible breadcrumb | Added Home > Resources > Blogs > article, matching the breadcrumb JSON-LD. Resources links to the existing homepage Resources section because the site has no `/resources` landing page. |
| 9 | Internal link destinations | Fixed the introductory QA link and CI/CD link. Linked directly to the existing Smart Audio Device Test Automation case-study card using a stable fragment identifier. The repository has no individual case-study detail page for this engagement, so this avoids adding a broken URL or inventing a new case study. |
| 10 | Three related posts | Added three distinct related-post cards below the article and replaced the sidebar's repeated article title with links to those posts. |
| 11 | Inbound links | Added contextual links from the Intelligent Quality Engineering service page, the AI-based testing blog, and the embedded SDK CI/CD quality-gates blog. |
| 12 | FAQ additions | Added both requested questions; all eight visible answers match FAQ JSON-LD. |
| 13 | Image loading | Kept hero priority/preload, refined responsive `sizes` to account for page gutters and the sidebar, and explicitly lazy-loaded section images. Existing seven WebP assets are unchanged. |
| 14 | Author and full timestamps in schema | Added a Person author with the matching name, role and author-bio URL, plus a real edit timestamp with `+05:30` offset. **The original publish time is unknown. Rahul selected keeping the recorded 9 October date without inventing a time**, so `datePublished` and the published OG value remain date-only (`2026-10-09`). |

## Original research checked

- [Capgemini, World Quality Report 2025-26](https://www.capgemini.com/insights/research-library/world-quality-report-2025-26/): skill-ranking highlights.
- [Tricentis, 2026 Quality Transformation Report announcement](https://www.tricentis.com/news/2026-quality-transformation-report): 60% of surveyed organizations report deploying untested code; 30% cite the volume of AI-generated code as a reason for deploying untested code.

## Validation

- `pnpm exec tsc --noEmit`: passed.
- `pnpm build`: passed; all 29 pages generated, including the updated blog and the inbound-link pages.
- `git diff --check`: passed.
- Built HTML checks: passed for the exact metadata title, canonical URL, Person author, dates and OG tags, three JSON-LD types, all eight FAQ question/answer pairs, seven nested H3 capability headings, three related posts, three inbound pages, case-study anchor, all seven image assets, hero preload and section lazy loading. Follow-up checks verified Rahul Vala's supplied LinkedIn URL on the byline, author bio, profile links, author metadata, OG author and schema `url`/`sameAs`.
- Responsive-image check: the generated `srcset` and `sizes` select a 750px candidate for a 390px viewport at DPR 2. The 3840px `src` fallback still appears in Next.js output; browsers supporting `srcset` use the responsive candidate instead. This was checked from generated markup, not a measured browser network trace.
- Regression checks: existing blogs retain Article schema and their original social-image fallback, and receive no invented author or modification dates.
- Google Rich Results Test: submitted the generated JSON-LD in code mode. Google returned **“Something went wrong — Log in and try again”**; no successful Rich Results Test result is claimed. A reviewer should rerun the test in a signed-in session or on the branch preview.
- Browser layout QA: unverified. The managed preview launcher appended `--host` and `--strictPort` to `next dev`, which rejects `--host`. The working Next.js application was not changed to compensate for the launcher.

## Review follow-up

1. Rerun Google Rich Results Test and check desktop/mobile layout on the preview before merging.
2. Keep the confirmed date-only publication value unless the real original publish timestamp becomes available.

No merge to `main` or production deployment was performed as part of this update.
