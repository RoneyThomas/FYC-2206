---
name: Ecclesia Divine System
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f88'
  primary: '#000a1e'
  on-primary: '#ffffff'
  primary-container: '#002147'
  on-primary-container: '#708ab5'
  inverse-primary: '#aec7f6'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#200000'
  on-tertiary: '#ffffff'
  tertiary-container: '#4c0000'
  on-tertiary-container: '#f0513e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f6'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#ffb4a8'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#920703'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is rooted in the tradition and solemnity of the Malankara Orthodox Syrian Church. It balances the weight of ancient heritage with the clarity required for a modern conference application. The personality is **reverent, institutional, and welcoming**, aiming to evoke a sense of spiritual continuity and communal belonging.

The visual style follows a **Corporate / Modern** approach with **Minimalist** sensibilities. It prioritizes high-contrast legibility, generous whitespace to allow content to "breathe," and a structured hierarchy that mirrors the order of liturgical services. Depth is used sparingly to maintain a clean, professional aesthetic that feels both prestigious and accessible to a multi-generational audience.

## Colors

The color palette is derived directly from the liturgical vestments and the conference identity. 

- **Primary (Deep Navy):** Used for headers, primary navigation, and high-level structural elements to provide a foundation of authority and depth.
- **Secondary (Ecclesiastical Gold):** Used for accents, icons, and primary action highlights. It symbolizes divinity and celebration.
- **Tertiary (Crimson):** Reserved for specific ecclesiastical distinctions or critical alerts, mirroring the red accents in the diocesan seal.
- **Neutral/Background:** A clean white base for maximum readability, supported by a very light grey (`#F8F9FA`) for surface distinctions and a deep navy variant for high-contrast dark sections.

## Typography

This design system utilizes a pairing of **Noto Serif** and **Work Sans** to bridge the gap between tradition and utility. 

- **Noto Serif** is used for all headlines and display text. Its classical proportions and elegant serifs provide the necessary gravitas for religious content.
- **Work Sans** is the functional workhorse for body copy, labels, and UI elements. Its neutral, professional character ensures legibility in dense schedules and informational lists.
- **Case Styling:** Use All-Caps for labels and category headers to provide a structural, monumental feel reminiscent of traditional stone inscriptions.

## Layout & Spacing

The layout follows a **Fluid Grid** model with strict vertical rhythm based on an 8px baseline. 

- **Desktop:** 12-column grid with 24px gutters. Content is often centered in a constrained 1200px container to maintain readability.
- **Mobile:** 4-column grid with 16px margins. 
- **Rhythm:** Spacing should be generous. Use `lg` (48px) spacing between major sections to emphasize the "clean and reverent" personality. Components within sections should use `sm` or `md` spacing to maintain grouping.

## Elevation & Depth

To maintain a "professional and clean" aesthetic, this design system avoids heavy shadows. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines**.

- **Surface Levels:** The primary background is white. Secondary surfaces (like cards or sidebars) use the light neutral grey or the primary deep navy.
- **Separation:** Use 1px borders in a light grey (`#E9ECEF`) for most UI boundaries. 
- **Active State:** When elevation is required (e.g., a modal or a floating action button), use an **Ambient Shadow**: a soft, highly diffused shadow (15% opacity) tinted with the primary navy color to keep it integrated with the palette.

## Shapes

The shape language is **Soft (Level 1)**. 

- UI elements such as input fields and buttons utilize a 0.25rem (4px) corner radius.
- Large cards and containers may use up to 0.75rem (12px) for a gentler appearance.
- **Circular Elements:** Keynote speaker portraits and specific iconography should be perfectly circular to represent unity and the eternal nature of the faith.

## Components

### Buttons
- **Primary:** Solid Deep Navy background with White text. High-contrast, rectangular with soft corners.
- **Secondary:** Solid Gold background with Deep Navy text for "Call to Action" items like "Register Now."
- **Ghost:** Transparent background with Navy border and text for less critical actions.

### Cards
- **Speaker Cards:** Circular image at the top, centered Noto Serif headline, followed by Work Sans descriptors. 
- **Session Cards:** Use a vertical gold accent bar on the left side to denote "active" or "upcoming" sessions in the schedule.

### Inputs
- **Text Fields:** Underlined or lightly outlined with 1px borders. Focus state uses a 2px Gold bottom border.
- **Checkboxes/Radios:** Use the Secondary Gold for the checked state to ensure high visibility against the white background.

### Navigation
- **Top Bar:** Deep Navy background with Gold icons and White text.
- **Bottom Tabs (Mobile):** White background with Navy active icons and labels.

### Chips & Badges
- Used for session categories (e.g., "Youth," "Ministry"). These should have a light gold background with dark navy text to remain distinct but subordinate to primary buttons.