# Business Template

## Current State
A full-featured business landing page with sections: NavBar, Hero, Stats, ClientsStrip, Features, Portfolio, Partners, HowItWorks, About, Testimonials, Awards, Pricing, FAQ, Blog, Team, Contact, Footer, Newsletter banner, Cookie banner. Uses a charcoal + gold OKLCH design system with Cabinet Grotesk / Fraunces / Satoshi fonts.

## Requested Changes (Diff)

### Add
- **SectionHeading component**: A reusable `SectionHeading` component with multiple visual variants: `default` (eyebrow + large title + subtitle), `split` (title split with gold italic word), `underline` (animated gold underline), `outlined` (large outlined/stroked display text behind solid title), and `badge` (pill badge above title). All variants include optional subtitle and centered/left alignment.
- **HeadingsShowcase section**: A dedicated page section (`id="headings"`) that showcases the heading variants with sample content, acting as a visual design reference and enriching the template.
- **Nav link** for "Headings" pointing to `#headings`, inserted between FAQ and Blog.

### Modify
- **All existing section headings**: Replace inline heading markup in every section component with the new `SectionHeading` component, choosing the most appropriate variant per section.
- **index.css**: Add CSS for heading effects — outlined/stroked text, animated underline, and decorative gradient text utility classes.
- **tailwind.config.js**: Ensure any new animation keyframes (underline draw) are registered if not already covered.

### Remove
- Nothing removed.

## Implementation Plan
1. Create `src/frontend/src/components/SectionHeading.tsx` with all heading variants.
2. Add heading-related CSS utilities to `index.css` (text-stroke, animated underline draw, gradient headline).
3. Update `NavBar.tsx` to add a "Headings" nav link.
4. Create `src/frontend/src/components/HeadingsShowcase.tsx` showcasing all variants.
5. Import and insert `HeadingsShowcase` into `App.tsx` (after FaqSection).
6. Update each existing section to use `SectionHeading` — FeaturesSection, AboutSection, TestimonialsSection, PricingSection, TeamSection, ContactSection, BlogSection, PartnersSection, PortfolioSection, HowItWorksSection, AwardsSection, StatsSection.
7. Validate (typecheck, lint, build).
