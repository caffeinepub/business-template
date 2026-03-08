# Business Template

## Current State
A comprehensive business template with sections: Hero, Stats, Clients, Features, Portfolio, Partners, How It Works, About, Testimonials, Awards, Pricing, FAQ, Headings Showcase, Typography, Background Styles, Lists Showcase, Tooltips Showcase, Blog, Team, Contact, Footer. Nav includes links to Headings, Typography, Backgrounds, Lists, Tooltips, Blog.

## Requested Changes (Diff)

### Add
- **FormStyles component** -- A showcase of 10+ HTML form element design variants:
  1. Default Input -- standard text input with gold focus ring
  2. Floating Label Input -- label animates up on focus/fill
  3. Inline Label Input -- label and input on same row
  4. Input with Icon (prefix) -- search/mail icon inside the input
  5. Input with Action (suffix) -- button appended to right of input
  6. Input Group -- multiple inputs joined in a row (e.g., first/last name)
  7. Textarea variants -- minimal, bordered, autosize label
  8. Select / Dropdown -- styled native and custom select
  9. Checkbox group -- styled checkboxes with labels
  10. Radio group -- pill radio buttons + classic radio
  11. Toggle Switch -- styled on/off toggle
  12. Range Slider -- gold-styled HTML range input
  13. File Upload -- drag-drop zone + button variant
  14. Form Validation States -- success, error, warning field states with icons
  15. Full Form Card -- multi-field card example (Name, Email, Company, Message, Submit)

- **TagStyles component** -- A showcase of 12+ tag/badge/chip design variants:
  1. Default pill tag
  2. Outlined tag (no fill)
  3. Gold gradient tag
  4. Status tags -- success (green), warning (amber), error (red), info (blue)
  5. Dismissible tag -- with × close button
  6. Icon + label tag
  7. Avatar tag -- mini avatar circle + name
  8. Counter badge -- round notification bubble
  9. Dot indicator tag -- colored dot + text
  10. Stacked tag group -- multiple overlapping tags
  11. Animated tag -- entrance pop/scale animation
  12. Dark and light theme variants side-by-side

- **FormsShowcase component** -- Wraps FormStyles and TagStyles in a page section (`#forms`) with a SectionHeading and two subsections: "Form Elements" and "Tags & Badges".

- Nav link "Forms" added pointing to `#forms`.

### Modify
- `NavBar.tsx` -- add `{ label: "Forms", href: "#forms", ocid: "nav.forms.link" }` to navLinks and sectionIds.
- `App.tsx` -- import and render `<FormsShowcase />` after `<TooltipsShowcase />`.

### Remove
- Nothing removed.

## Implementation Plan
1. Create `src/frontend/src/components/FormStyles.tsx` with all form variants.
2. Create `src/frontend/src/components/TagStyles.tsx` with all tag/badge variants.
3. Create `src/frontend/src/components/FormsShowcase.tsx` wrapping both.
4. Update `NavBar.tsx` to add the "Forms" nav link.
5. Update `App.tsx` to import and mount `<FormsShowcase />`.
