# digiSalad Page Planning

## Current Scope

This project is a single-page Nuxt 3 interview task. Animation will be handled after the static layout is close to the Figma design.

Figma access is not available through the current local tooling, so this plan is based on the exported assets, the existing Nuxt template, and the visible project structure. Exact colors, font sizes, spacing, and layout values should be verified against Figma before final polish.

## Page Sections

1. `HeroSection`
   - Full-viewport first section.
   - Uses `hero.webp` for desktop and `hero-m.webp` for mobile.
   - Contains header/nav, main title copy, and primary visual composition.
   - Motion later: hero text reveal, floating food assets, scroll cue.

2. `MenuOverlay`
   - Opened by the menu icon.
   - Uses menu images:
     - `menu-about.webp`
     - `menu-service.webp`
     - `menu-work.webp`
     - `menu-career.webp`
     - `menu-insights.webp`
   - Can stay local state in the page because this is a one-page test.
   - Motion later: menu expand, staggered menu items, image hover/reveal.

3. `AboutVideoSection`
   - Uses `about-video-thumbnail.webp` and `about-video-thumbnail-m.webp`.
   - Uses `video-play` icon.
   - Static implementation can use a clickable visual block first; actual video behavior can be decided later if design requires it.

4. `IconsSection`
   - Uses `icons.webp` and `icons-m.webp`.
   - Likely a visual/value section rather than individual SVG icons.
   - Motion later: scroll-triggered reveal or parallax.

5. `FounderSection`
   - Uses `founder.webp` and `founder-m.webp`.
   - Uses `left-quote` icon if the design includes quote copy.
   - Motion later: quote/content fade and image reveal.

6. `FloatingFoodLayer`
   - Shared decorative layer for food PNGs.
   - Assets:
     - `apple.png`
     - `cabbage.png`
     - `carrot.png`
     - `cheese.png`
     - `corn.png`
     - `cucumber.png`
     - `cucumbers.png`
     - `kiwi.png`
     - `orange.png`
     - `tomato.png`
     - `watermelon.png`
   - Keep positions data-driven so desktop/mobile can be tuned without rewriting markup.

## Component Plan

Use small, page-specific components rather than rebuilding a large design system.

- `components/Atom/Icon.vue`
  - Already added.
  - Reads SVG sprites from `assets/icons`.
  - SVG colors are controlled with `currentColor`.

- `components/Base/Picture.vue`
  - Optional helper for desktop/mobile image switching.
  - Props: `src`, `mobileSrc`, `alt`, `class`.
  - Useful because most exported assets have desktop and mobile variants.

- `components/Base/Button.vue`
  - Only if the design has repeated CTA buttons.
  - Keep variants minimal: `primary`, `ghost`.

- `components/Layout/SiteHeader.vue`
  - Logo/brand and menu trigger.
  - Uses `AtomIcon name="menu"`.

- `components/Section/HeroSection.vue`
- `components/Section/AboutVideoSection.vue`
- `components/Section/IconsSection.vue`
- `components/Section/FounderSection.vue`
- `components/Menu/MenuOverlay.vue`
- `components/FloatingFoodLayer.vue`

For this interview page, avoid global state. Local `ref` state in `pages/index.vue` is enough for menu open/close.

## Color Tokens

Current Tailwind colors are placeholders and should be treated as working tokens until Figma values are confirmed.

- `brand.DEFAULT`: `#B8D935`
  - Salad green, used for brand highlights and active elements.

- `secondary.DEFAULT`: `#FF6B3D`
  - Warm orange/red accent, useful for CTA or food-themed emphasis.

- `accent.DEFAULT`: `#00A7C8`
  - Cyan accent, currently needed by SVG icons such as `wave`.

- `bgc.DEFAULT`: `#10120F`
  - Main dark background.

- `bgc.paper`: `#F7F7F2`
  - Light section background if the design has editorial blocks.

- `txt.*`
  - Existing text scale can remain:
    - `txt.white`
    - `txt.super-light`
    - `txt.light`
    - `txt.DEFAULT`
    - `txt.dark`
    - `txt.black`

Recommended next Tailwind naming after Figma check:

- `brand.green`
- `brand.lime`
- `brand.cyan`
- `brand.coral`
- `surface.dark`
- `surface.light`
- `text.primary`
- `text.inverse`
- `text.muted`

## Typography Tokens

Current setup:

- `font-display`: `proxima-nova`, `sans-serif`
- `font-default`: `proxima-nova`, `sans-serif`

Font source:

- Typekit stylesheet in Nuxt head:
  - `https://use.typekit.net/wel8ibk.css`

Current utility classes:

- `text-display-1`
- `text-display-2`
- `text-display-3`
- `text-head-1`
- `text-head-2`
- `text-body-1`
- `text-body-2`
- `text-body-3`
- `text-button-1`
- `text-button-2`

Implementation rule:

- Use these semantic utilities first.
- Only use arbitrary Tailwind font sizes when the Figma hero title needs exact responsive tuning.
- Keep `letterSpacing: 0px` unless Figma explicitly requires another value.

## Layout Tokens

Current `.set` utility:

- `max-width: 1440px`
- `width: 100%`
- horizontal padding: `20px`

Recommended layout rules:

- Desktop sections: constrained inner container with full-width section backgrounds.
- Mobile: image variants should switch at `md` or `lg`, depending on Figma.
- Avoid nested card layouts unless a repeated content item needs a visible frame.
- Use stable aspect ratios for media blocks:
  - Hero: `16 / 9`
  - About video: asset is roughly `16 / 9`
  - Founder: very wide editorial image
  - Icons visual: wide image block

## Asset Usage

Images:

- Hero:
  - Desktop: `~/assets/images/hero.webp`
  - Mobile: `~/assets/images/hero-m.webp`

- About video:
  - Desktop: `~/assets/images/about-video-thumbnail.webp`
  - Mobile: `~/assets/images/about-video-thumbnail-m.webp`

- Icons section:
  - Desktop: `~/assets/images/icons.webp`
  - Mobile: `~/assets/images/icons-m.webp`

- Founder:
  - Desktop: `~/assets/images/founder.webp`
  - Mobile: `~/assets/images/founder-m.webp`

- Menu:
  - `~/assets/images/menu/menu-about.webp`
  - `~/assets/images/menu/menu-service.webp`
  - `~/assets/images/menu/menu-work.webp`
  - `~/assets/images/menu/menu-career.webp`
  - `~/assets/images/menu/menu-insights.webp`

SVG icons:

- `icon`
- `left-quote`
- `menu`
- `video-play`
- `wave`

Usage:

```vue
<AtomIcon name="menu" class="text-white" />
<AtomIcon name="wave" is-full class="text-accent" />
```

## Static Implementation Order

1. Replace `pages/index.vue` placeholder with section composition.
2. Add section components without GSAP animation.
3. Implement responsive image switching.
4. Match spacing, type scale, and color tokens against Figma.
5. Add menu overlay static open/close behavior.
6. Run desktop/mobile visual check.
7. Add GSAP animation after layout is stable.

## Implementation Check

Before moving to animation:

- `yarn build` passes.
- No missing asset imports.
- Desktop and mobile use the correct image variants.
- SVG icons inherit `currentColor`.
- No unused multi-language, store, or old portfolio components are reintroduced.
- Layout does not horizontally overflow on mobile.
- Text does not overlap media at common widths:
  - `375px`
  - `768px`
  - `1440px`
- Header/menu remains usable on mobile.
- Any image with content has meaningful `alt`; decorative floating food can use empty `alt`.
