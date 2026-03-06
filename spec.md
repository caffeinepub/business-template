# Business Template

## Current State
Full-stack business template with 20+ sections: NavBar, HeroSection, StatsSection, ClientsStrip, FeaturesSection, PortfolioSection, PartnersSection, HowItWorksSection, AboutSection, TestimonialsSection, AwardsSection, PricingSection, FaqSection, HeadingsShowcase, BlogSection, TeamSection, ContactSection, FooterSection, NewsletterBanner, CookieBanner. Includes SectionHeading component with 5 variants. All sections use motion/react animations, gold/charcoal design tokens, scroll effects, and count-up stats.

## Requested Changes (Diff)

### Add
- **Typography Design System Showcase** — a new dedicated section (`#typography`) showing rich paragraph styles: lead paragraph, body copy, blockquote, pull quote, small print/caption, and highlighted callout text. Each style should display a representative paragraph with its HTML/CSS class label, demonstrating professional paragraph design patterns.
- **Rich Text Content** — upgrade key sections with richer paragraph content: add a longer, multi-paragraph intro to the About section with a visually styled lead paragraph; add paragraph-style service descriptions to the Features section below the card grid; add a mission statement paragraph block to the Hero area.
- **Paragraph Variants Component** — a reusable `ParagraphStyles` component with named variants: `lead`, `body`, `caption`, `blockquote`, `pull-quote`, `callout`. Used in the typography showcase and optionally in other sections.

### Modify
- **NavBar** — add a "Typography" link pointing to `#typography`.
- **FooterSection** — add "Typography" link in the site links column; update copyright year if needed.
- **App.tsx** — import and render the new `TypographySection` between `HeadingsShowcase` and `BlogSection`.
- **AboutSection** — wrap the opening paragraph in the `lead` variant style for visual prominence.
- **HeroSection** — add a short mission-statement paragraph below the subheadline with a subtle styled block for added richness.

### Remove
- Nothing removed.

## Implementation Plan
1. Create `ParagraphStyles.tsx` — a component with variant prop (`lead | body | caption | blockquote | pull-quote | callout`) that renders styled paragraph wrappers with appropriate Tailwind classes and gold accent treatment.
2. Create `TypographySection.tsx` — showcase section with 6 variant cards/panels, each displaying a sample paragraph and its variant name/label. Dark/light alternating backgrounds, motion entrance animations.
3. Update `NavBar.tsx` — insert "Typography" nav link with `data-ocid="nav.typography_link"`.
4. Update `FooterSection.tsx` — add "Typography" to site links.
5. Update `App.tsx` — import `TypographySection` and place it after `HeadingsShowcase`.
6. Update `AboutSection.tsx` — wrap first paragraph in `lead` variant styling (larger text, gold left border accent).
7. Update `HeroSection.tsx` — add a styled mission-statement callout paragraph block beneath the existing subheadline.
