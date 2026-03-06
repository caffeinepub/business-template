# Business Template

## Current State

A full-featured business landing page with the following sections:
- PageLoader, ScrollProgressBar, BackToTopButton
- NavBar (sticky, active scroll highlight)
- HeroSection (floating badges, count-up stats)
- ClientsStrip (infinite marquee)
- FeaturesSection (icon cards with hover glow)
- PortfolioSection (case study cards)
- HowItWorksSection (4-step process)
- AboutSection (count-up numbers)
- TestimonialsSection
- PricingSection
- FaqSection (accordion)
- TeamSection (bio hover overlay)
- ContactSection (form wired to backend)
- FooterSection (CTA strip + columns)
- NewsletterBanner (slide-up, dismissible)

Backend: submitContactForm + getAllSubmissions.

Design: deep charcoal + warm gold OKLCH palette, Cabinet Grotesk + Fraunces + Satoshi fonts.

## Requested Changes (Diff)

### Add

- **StatsSection** — a bold horizontal band between HeroSection and ClientsStrip. Four animated metrics: "500+ Clients", "12 Years Experience", "98% Satisfaction", "3× Avg ROI". Large counter numbers in gold, label text below, thin vertical dividers between items.
- **PartnersSection** — a dedicated section (distinct from ClientsStrip) showing 6 partner logo placeholder cards arranged in a 2-row grid on desktop, with name and category badges. Placed between PortfolioSection and HowItWorksSection.
- **BlogSection** — three blog preview cards (title, excerpt, date, read-time, "Read More" link) placed between FaqSection and TeamSection.
- **AwardsSection** — a small trophy/badge row showing 4 award items (icon + name + year) placed between TestimonialsSection and PricingSection.
- **CookieBanner** — fixed bottom-center banner that appears on first visit, with "Accept" and "Decline" buttons. Dismissed and remembered via localStorage.

### Modify

- **HeroSection** — add a secondary "Learn More" button alongside the existing CTA that smooth-scrolls to the FeaturesSection.
- **NavBar** — add a "Blog" link in the navigation that scrolls to the BlogSection.
- **FooterSection** — add a "Blog" column link and update copyright year to 2026.
- **ContactSection** — add a phone number and address line beneath the existing email in the contact info block.

### Remove

- Nothing removed.

## Implementation Plan

1. Create `StatsSection.tsx` — 4-item stat band with count-up animation, gold numbers, dividers.
2. Create `PartnersSection.tsx` — 6 partner placeholder cards in a responsive grid.
3. Create `BlogSection.tsx` — 3 blog preview cards with metadata and CTA links.
4. Create `AwardsSection.tsx` — 4 award badge items in a horizontal row.
5. Create `CookieBanner.tsx` — fixed bottom banner with accept/decline, localStorage persistence.
6. Update `HeroSection.tsx` — add secondary "Learn More" scroll button.
7. Update `NavBar.tsx` — add "Blog" nav link.
8. Update `FooterSection.tsx` — add Blog link, update year to 2026.
9. Update `ContactSection.tsx` — add phone and address info.
10. Update `App.tsx` — import and place all new sections in correct order, add CookieBanner.
11. Add `data-ocid` markers to all new interactive surfaces.
12. Validate (typecheck, lint, build).
