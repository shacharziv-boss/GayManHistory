# Handoff: GMH Book Website (Landing + Shop + Checkout)

## Overview
Marketing/e-commerce site for **GMH** (the book "Gay Man History"). Single long-scroll landing page: hero, book detail, manifesto, about the author, merch shop (4 products × 3 print variants each), footer newsletter — plus a right-side slide-in cart drawer and a full 3-step checkout flow (Shipping → Payment → Review, with a coupon field and Card/PayPal payment methods) and an order-confirmation state.

## About the Design Files
The files in this bundle are **design references built in HTML** (Claude "Design Components" — plain HTML/CSS/JS, no build step) — prototypes showing intended look, content, and interaction, not production code to copy verbatim. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, Next.js, etc. — whichever the project already uses) following its established component patterns, state management, and data-fetching conventions. If no frontend framework exists yet, choose the most appropriate one for an e-commerce/marketing site and implement there. Real commerce logic (payment processing, inventory, email, order persistence) is **not implemented** — the checkout flow here is a working *front-end simulation* (local React state only, fake order numbers, one hardcoded coupon) meant to communicate the intended flow and UI, not a backend to port directly.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final per the GMH design system tokens below. Layout, responsive behavior (desktop/mobile breakpoint at 768px), and interaction states (hover, drawer open/close, step transitions) should be recreated pixel-for-pixel where feasible.

## Screens / Views

### 1. Header (sticky)
- Sticky top, white background, bottom hairline border (`--hairline-on-light`).
- Desktop (>768px): logo left (`assets/gmh-logo.png`, 210×34px, object-fit contain), nav right — "Book" / "Shop" / "About" anchor links + "Cart (n)" button, uppercase, `--size-label`, `--tracking-label`, bold.
- Mobile (≤768px): logo left, hamburger icon right (3× 26×2px bars, 5px gap) that opens a full-screen black (`--surface-black`) overlay menu: logo (inverted to white), close "×", stacked nav links in `--font-display` at `--size-display-sm`, plus Cart link.

### 2. Hero
- Full-bleed section, 92vh (min-height 560px), background image (`assets/hero-cover.jpg`, cover-fit) with a 40%-black scrim overlay.
- Bottom-anchored content block, white text: eyebrow label "GMH" (label style), display title "GAY MAN HISTORY BOOK" (`--font-display`, `--size-display-2xl`, uppercase, tight leading), body subtext (`--size-body-lg`, muted white), and a white pill CTA button "Buy the book — $42" (black text, no radius).

### 3. Periods strip ("Book" anchor)
- Label "Periods featured in the book".
- Wrapping row of 14 black "era tag" pills (Prehistory, Egypt, Greece, Rome, Byzantine, Romanesque, Gothic, Renaissance, Baroque, Rococo, Neoclassicism, Paris, Berlin, New York) — each a small black pill, white uppercase label text, `--radius-tag` (2px).

### 4. Book detail
- 2-column grid (1fr/1fr desktop, stacks to 1 column ≤768px, image on top).
- Left: photo (`assets/book-spread.png`, 520px tall, cover-fit) with a caption row below (photo credit line, justified space-between).
- Right: label "Inside the book", a drop-cap paragraph (first letter oversized, `--font-display`), then a "Table of contents" list — 4 rows, each a flex row (chapter/era name ↔ page number) with a bottom hairline divider (last row no divider).

### 5. Manifesto
- Full-width magenta (`--surface-magenta`) band, centered pull-quote in white `--font-display` at `--size-display-md`, plus small "GMH" attribution.
- Quote text: "This book exists so a history often left out of the record has a permanent place on the shelf."

### 6. About the author ("About" anchor)
- 2-column grid (image left 480px tall / text right; stacks to 1 column on mobile, same pattern as Book detail).
- Label "About the author", display heading "Author Name" (placeholder — replace with real author name), body paragraph (`--size-body-lg`, muted).
- Bottom padding trimmed to 50px so the gap to the Merch section below totals ~100px (Merch section top padding is also 50px).

### 7. Merch shop ("Shop" anchor)
- Eyebrow label "BRING HISTORY TO EVERY DAY LIFE", display heading "CHOOS LOVE ALL AROUND" (verify copy/spelling with stakeholder — likely a typo for "Choose").
- Grid of 4 product units: Mug ($28), Poster ($38), Candle ($24), Towel ($32).
- Each unit is a self-contained column, **300px minimum width**, using `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` so units reflow as independent blocks rather than snapping to fixed breakpoints:
  - Main product photo, 280px tall, cover-fit.
  - Row of 3 equal square print-variant thumbnails (`aspect-ratio: 1`) spanning the same total width as the main photo, 3-column grid with `--space-2` gap. Each product will eventually need 3 distinct print designs uploaded.
  - Product name (bold) ↔ price (muted), space-between row.
  - Full-width black "Add to cart" button (white uppercase text) — adds the item to the cart drawer and opens it.

### 8. Footer
- Full-width black band.
- Top row: "Stay in touch" heading + "New prints, new objects, and updates from the book — straight to your inbox." copy (left), email input + white "Join" button (right); bottom-aligned, wraps on narrow widths.
- Divider, then bottom row: "GMH" (left), "Shipping" / "Returns" / "Contact" links (center), "© GMH" (right) — all uppercase label style, muted white.

### 9. Cart drawer
- Slides in from the **right edge**, fixed position, full height (100dvh), 420px wide on desktop / 100% width on mobile, white background, box-shadow on the left edge. Backdrop: semi-transparent black overlay (click to close), z-index below the drawer.
- Header row: "Cart (n)" label, "×" close button, bottom hairline.
- Scrollable item list: each row = 72×72px placeholder swatch (real thumbnail should show the item's product photo) + name/remove-link row, price, quantity stepper (– / count / +).
- Empty state: centered "Your cart is empty." message.
- Footer (sticky bottom): Subtotal row, full-width black "Checkout" button → opens the checkout overlay.

### 10. Checkout overlay
Full-screen overlay (slides in from the right, same white/black flat style), header with logo + close.

**Step 1 — Shipping**: email, full name, address, city, ZIP, country, phone (single column, underline-style inputs). Shipping method as two radio rows (Standard $6 / 5-7 days, Express $15 / 2-3 days) each in a bordered card row. "Continue to payment" button.

**Step 2 — Payment**: toggle buttons for **Card** vs **PayPal** (selected = black fill). Card: name on card, card number, MM/YY, CVV. PayPal: explanatory note ("redirected to PayPal... after review") — no separate fields since PayPal auth happens off-site. "Billing address same as shipping" checkbox (billing address sub-form not yet built out — add if a differing billing address must be collected). Back / "Review order" buttons.

**Step 3 — Review**: read-only summary of ship-to address, shipping method, payment method. **Coupon code** field + "Apply" button — validates against a single test code `GMH10` (10% off); shows a success line or an inline error. Back / "Place order" buttons.

**Right column (steps 1-3, sticky)**: persistent order summary — line items (name × qty, price), then Subtotal / Discount / Shipping / Tax (8% flat, computed on discounted subtotal) / Total.

**Confirmation state**: replaces the stepper with a centered "Thank you" message, a generated order number (`GMH-XXXXXX`), and a "Continue shopping" button that closes the overlay and clears the cart.

## Interactions & Behavior
- Header nav / mobile hamburger: breakpoint at `window.innerWidth <= 768`, checked on mount + resize listener.
- Add to cart: appends item or increments qty if already present; auto-opens the cart drawer and closes the mobile menu.
- Cart quantity stepper: decrementing to 0 removes the line item.
- Cart/checkout/mobile-menu are all `transform: translateX(...)` slide panels with a `.35s cubic-bezier(.4,0,.2,1)` transition — recreate with the codebase's animation approach (CSS transition, Framer Motion, etc.).
- Checkout steps are simple state switches (no route change) — consider real routes (`/checkout/shipping`, `/checkout/payment`, `/checkout/review`) in production for back-button support and analytics.
- Coupon validation is entirely client-side/hardcoded in this prototype — must call a real promotions/discount API in production.
- "Place order" currently just fakes a random order number and clears local state — must call real order-creation + payment-capture (Stripe/PayPal SDK, etc.) endpoints.
- No form validation is implemented on any input (email format, required fields, card number format) — add proper validation before production use.

## State Management (as prototyped, informs your real implementation)
- `isMobile` — derived from viewport width.
- `menuOpen`, `cartOpen`, `checkoutOpen` — panel visibility booleans.
- `cartItems` — array of `{ id, name, price, qty }`.
- `checkoutStep` — `'shipping' | 'payment' | 'review'`.
- `orderPlaced`, `orderNumber` — confirmation state.
- Shipping form fields (email, name, address, city, zip, country, phone), `shippingMethod` (`'standard' | 'express'`).
- `paymentMethod` (`'card' | 'paypal'`), card fields, `billingSame` boolean.
- `couponCode`, `couponApplied` (`{ code, pct, label }` or null), `couponError`.
- Derived/computed: `cartCount`, `cartSubtotal`, `shippingCost`, `discountAmount`, `taxAmount` (8% flat), `orderTotal`.

## Design Tokens

### Colors
Flat, saturated, museum-wall palette — 5 backgrounds only, no gradients/tints/shadows on surfaces:
- `--surface-magenta: #E5057F`
- `--surface-red: #E2211C` (defined, not yet used on this page)
- `--surface-blue: #1230E0` (defined, not yet used on this page)
- `--surface-black: #0A0A0A`
- `--surface-white: #FFFFFF`
- Text: white or black only — `--text-on-dark` (#fff), `--text-on-dark-muted` (rgba(255,255,255,.72)), `--text-on-dark-faint` (rgba(255,255,255,.45)); `--text-on-light` (#0A0A0A), `--text-on-light-muted` (rgba(10,10,10,.72)), `--text-on-light-faint` (rgba(10,10,10,.45)).
- Hairlines: `--hairline-on-dark: rgba(255,255,255,.28)`, `--hairline-on-light: rgba(10,10,10,.16)`.
- Links: `--link-on-light: #0A0A0A` hover `--link-on-light-hover: #E2211C`; `--link-on-dark: #fff` hover `rgba(255,255,255,.72)`.

### Typography
- Display font: **Fraunces** (fallback stack references "Rafaella", the original paid brand font not available — swap in the real Rafaella webfont file when licensed). Used uppercase, weight 400, tight leading (0.94).
- Body font: **Manrope** (fallback references "Univia Pro", also a paid brand font not available). Weights used: 400 (regular), 500 (medium), 700 (bold), 800 (black, defined not yet used).
- Display scale: 2xl `clamp(4.5rem,4rem+4vw,9rem)`, xl `clamp(3rem,2.6rem+2.6vw,5.5rem)`, lg `clamp(2rem,1.8rem+1.2vw,3rem)`, md `clamp(1.5rem,1.4rem+0.5vw,1.875rem)`.
- Body scale: lg 1.375rem, base 1.125rem, sm 1rem, caption 0.8125rem, label 0.75rem (labels always uppercase + `--tracking-label: 0.14em`).

### Spacing & radius
- Scale: `--space-1` 4px … `--space-11` 192px (4,8,12,16,24,32,48,64,96,128,192).
- Page margin: `clamp(24px, 6vw, 96px)`.
- Radius: essentially 0 everywhere (`--radius-0: 0px`); only the era-tag pill uses `--radius-tag: 2px`.

## Assets
- `assets/gmh-logo.png` — GMH wordmark logo (user-supplied).
- `assets/hero-cover.jpg` — hero background photo (user-supplied, a statue/monument image).
- `assets/book-spread.png` — 1948 studio archive photo used as the "Inside the book" spread image.
- Author photo slot (About section) — not yet filled, needs a real photo.
- Merch product photos (mug/poster/candle/towel main + 3 print variants each = 16 images total) — not yet filled, all placeholder drop-zones.
- Google Fonts: Fraunces, Manrope (loaded via `@import` in the design system's `tokens/fonts.css`).

## Files
- `GMH Website.dc.html` — the full site (all sections above, in one file: template markup + a small React-like state class at the bottom handling responsive nav, cart, and checkout).
- `_ds/gmh-book-design-system-*/` — the GMH design system: CSS custom-property tokens (`tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/fonts.css`) plus a small set of reusable editorial components (era tag pills, pull-quote, drop-cap paragraph) bundled as `_ds_bundle.js`. Use the token values above as your source of truth; the bundle itself is a prototyping convenience, not something to import into production code.
- `image-slot.js` — a prototyping-only drag-and-drop image placeholder used in the HTML mockup; has no production equivalent — replace with real `<img>ats/CDN images in your implementation.
