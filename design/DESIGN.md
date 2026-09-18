---
name: Atelier Curatorial
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#464742'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#767871'
  outline-variant: '#c6c7c0'
  surface-tint: '#5e5f5b'
  primary: '#020201'
  on-primary: '#ffffff'
  primary-container: '#1c1d1a'
  on-primary-container: '#858581'
  inverse-primary: '#c7c6c2'
  secondary: '#506354'
  on-secondary: '#ffffff'
  secondary-container: '#d0e5d2'
  on-secondary-container: '#546758'
  tertiary: '#010202'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1d1d'
  on-tertiary-container: '#848585'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2dd'
  primary-fixed-dim: '#c7c6c2'
  on-primary-fixed: '#1b1c19'
  on-primary-fixed-variant: '#464743'
  secondary-fixed: '#d3e8d5'
  secondary-fixed-dim: '#b7ccb9'
  on-secondary-fixed: '#0e1f13'
  on-secondary-fixed-variant: '#394b3d'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-xl:
    fontFamily: Newsreader
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Newsreader
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.005em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
  caption:
    fontFamily: Newsreader
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-tablet: 2rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style
The design system embodies the intellectual rigor of academic research merged with the tactile restraint of an avant-garde design atelier. Designed for a hybrid scholar, researcher, and practitioner, the interface communicates authority, quiet sophistication, and meticulous curation.

The visual ethos blends **Warm Editorial Minimalism** with **Subtle Tactile Glassmorphism**:
- Generous structural whitespace prioritizes critical reading and contemplation over dense data aggregation.
- The interface acts as an archival gallery canvas—quietly receding to let artifacts, essays, research publications, and specimen media command focal attention.
- Interactions are intentionally deliberate: subtle transitions, smooth tonal fades, and tactile surface elevations evoke fine-grain print paper and architectural physical models.

## Colors
The palette evokes archival rag paper, warm limestone, milled graphite, and dried botanical sage. 

- **Primary (`#1C1D1A` - Deep Charcoal / Carbon):** Grounded and precise. Employed for high-emphasis headlines, long-form editorial body text, and crisp perimeter borders.
- **Secondary (`#4A5D4E` - Muted Sage):** Botanical and intellectual. Utilized for contextual meta-tags, categorization badges, project timeline indicators, and focused link states.
- **Tertiary (`#FFFFFF` - Pure White Accent):** Crisp luminous wash. Applied to interactive chip backgrounds, hover card accents, divider lines, and tactile callout panels.
- **Neutral (`#F9F8F5` - Archival Canvas):** The foundational substrate. Replaces clinical white with a calm, warm daylight surface to reduce eye fatigue across long-form reading.

### Functional Roles & Contrast
- **Canvas Base:** `#F9F8F5` (Archival Canvas).
- **Surface Elevation 1 (Card/Container):** `#FFFFFF` with 70% opacity combined with backdrop blur.
- **Surface Elevation 2 (Floating Modals / Curatorial Drawers):** `#FFFFFF` with 92% opacity.
- **Hairline Borders:** `#1C1D1A` at 8%–12% opacity across light surfaces.
- **Muted Text / Metadata:** `#595A54` (satisfying WCAG AA contrast against canvas and white cards).

## Typography
The typographic hierarchy establishes a dialogue between historical scholarship and modern digital engineering:

- **Primary Display & Headlines (`Newsreader`):** An optical editorial serif with exquisite proportional balancing, nuanced italics, and literary cadence. It handles curatorial statements, article headlines, project titles, and formal citation quotes.
- **Body & Functional UI (`Plus Jakarta Sans`):** A modern geometric sans-serif that balances structural clarity with gentle humanist warmth. It delivers exceptional legibility for long-form abstracts, field notes, metadata labels, and UI controls.

### Editorial Guidelines
- Use italics in `Newsreader` sparingly for essay subheadings, publication source titles, journal volumes, and epigraphs.
- All `label-*` tokens must be rendered in uppercase to establish an indexical, architectural hierarchy against flowing prose.
- Body copy line length should be restricted to a maximum of 65 characters per line (`max-w-prose`) to preserve scholarly readability.

## Layout & Spacing
The layout follows an asymmetric architectural grid system that responds rhythmically across viewpoints:

- **Desktop (1200px+):** 12-column grid with a maximum content container width of 1440px. Gutters expand to `2.5rem`, providing wide editorial margins of `4rem`. Asymmetric column splits (e.g., 5-column editorial sticky context paired with 7-column media feed) anchor project dossiers.
- **Tablet (768px – 1199px):** 8-column layout. Gutters compress to `2rem` with `2.5rem` canvas margins. Asymmetric balance transitions to modular stacked sections.
- **Mobile (< 768px):** 4-column layout. Margins collapse to `1.25rem` with `1.5rem` gutters. Horizontally scrolling multi-artifact galleries switch from freeform layout to snap-aligned kinetic carousels.

Vertical rhythm relies on intentional air: section breaks frequently utilize `space-xl` or double `space-xl` intervals to separate conceptual domains (e.g., monographs vs. empirical experiments).

## Elevation & Depth
Depth is produced through textural layering, translucent glass planes, and quiet optical boundaries rather than artificial structural drop shadows.

- **Curatorial Glass Surfaces:** Interactive publication cards, floating contextual filters, and sticky navigation headers leverage `rgba(249, 248, 245, 0.75)` with an ultra-fine `backdrop-filter: blur(12px)`. This preserves the ambient color of the media gliding beneath.
- **Ghost Outlines:** Structural borders are set to 1px thickness with low-contrast pigment: `rgba(28, 29, 26, 0.08)`. Hover states shift the border to `rgba(74, 93, 78, 0.3)`.
- **Soft Ambient Luminescence:** Floating inspector drawers, publication popovers, and selected showcase states cast an imperceptible diffused shadow: `0 12px 32px -8px rgba(28, 29, 26, 0.05)`.

## Shapes
The shape language mirrors physical archival materials—matted paper stock, specimen slides, and architectural folios. 

- Form factor edges are kept crisp and restrained using level `1` (Soft): base elements feature `0.25rem` (4px) corner radii.
- Media elements, publication cards, and interactive showcase modals employ `rounded-lg` (`0.5rem` / 8px).
- Curatorial tag chips and state indicators remain subtly softened without defaulting to casual stadium pills, honoring the system's dignified intellectual aesthetic.

## Components

### Buttons
- **Primary:** Solid `#1C1D1A` fill with `#F9F8F5` text, 0.25rem radius, and subtle letter-spaced sans-serif typography (`label-md`). Hover transitions smoothly to `#4A5D4E` over 200ms ease.
- **Secondary / Archival Outline:** Translucent background with a 1px border of `rgba(28, 29, 26, 0.15)` and `#1C1D1A` text. Hover prompts a pure white tint wash (`#FFFFFF` at 25% opacity).
- **Text / Citation Action:** Monoline textual link accompanied by an offset directional arrow (`→`), underlined with a 1px rule set 4px below baseline.

### Publication & Research Cards
- Rendered on frosted glass tiles (`rgba(255, 255, 255, 0.7)` with 12px blur) bound by a delicate 1px border (`rgba(28, 29, 26, 0.08)`).
- Composed with strict micro-hierarchy: Year and DOI in `label-sm` (sage), publication title in `headline-sm` (`Newsreader`), co-authors and journal citation in `body-sm`.
- Include an inline download icon or publication link that reveals on hover via soft opacity interpolation.

### Project Tags & Taxonomy Chips
- Filter tags display metadata categories (e.g., *Spatial Computing*, *Speculative Futures*, *Critical Ethnography*).
- Default: `#F9F8F5` background, `#1C1D1A` text, 1px border of `rgba(28, 29, 26, 0.1)`.
- Active / Selected: Subtle `#4A5D4E` sage fill with pure `#FFFFFF` typography.

### Form Inputs & Checkboxes
- **Inputs:** Minimalist hairline underline inputs with `#1C1D1A` focus highlight and floating `label-sm` transitions.
- **Checkboxes & Radios:** Scaled down, square geometry with 2px corner radius. Selected marks utilize a refined `#4A5D4E` fill with crisp monochrome checks.

### Asymmetric Masonry & Carousel Gallery
- Visual media (exhibition stills, field documentation, prototypes) sit in alternating column heights (5:7 column distribution).
- Images feature variable aspect ratios (16:10, 4:5, 1:1) framed with 1px border insets.
- Captions are set directly beneath in `caption` (`Newsreader` regular) paired with an accession index number in `label-sm`.
- On swipe/drag carousels, progress indicators present an uninterrupted hairline tracking bar across the bottom margin.