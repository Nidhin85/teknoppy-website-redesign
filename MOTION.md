# Reusable Motion System — Teknoppy (`MOTION.md`)

A lightweight, zero-dependency animation and motion system built for Teknoppy. Driven entirely by HTML `data-*` attributes and minimal utility classes, running with hardware acceleration (`transform`, `opacity`, and `clip-path`) under 15 KB gzipped combined.

---

## 1. Architecture Overview

- **CSS Stylesheet**: `src/styles/motion.css` (imported globally in `src/layouts/Layout.astro`)
- **Engine Script**: `src/scripts/motion.js` (loaded globally in `src/layouts/Layout.astro`, lifecycle-synced with `DOMContentLoaded`, `astro:page-load`, and `astro:after-swap`)
- **Runtime Dependencies**: `0` (Vanilla CSS & JavaScript only)
- **Standard Easing Curves**:
  - General transitions: `cubic-bezier(.2, .8, .2, 1)`
  - Playful / character bounce: `cubic-bezier(.3, 1.4, .5, 1)`

---

## 2. Data Attributes Reference

| Attribute | Accepted Values | Description |
| :--- | :--- | :--- |
| `data-reveal` | `"up"`, `"down"`, `"left"`, `"right"`, `"zoom"`, `"blur"`, `"clip"` | Scroll-triggered entrance animation via `IntersectionObserver`. |
| `data-delay` | e.g. `"0.1s"`, `"0.25s"` | Custom delay on a `data-reveal` element. |
| `data-duration`| e.g. `"0.8s"`, `"1.2s"` | Custom duration on a `data-reveal` element. |
| `data-stagger` | Milliseconds (default `80ms`, or custom e.g. `"50"`, `"60"`) | Automatically cascades the reveal across all direct child elements with staggered delays. |
| `data-words` | None (boolean) | Automatically splits sentence text into word spans and cascades an upward word-by-word reveal. |
| `data-chars` | None (boolean) | Automatically splits headline characters and plays a playful, physics-based bounce drop on each letter. |
| `data-count` | None (boolean) | Animated count-up numbers. Pairs with `data-to`, `data-from`, and `data-duration`. |
| `data-to` | Number (e.g. `"120"`, `"2018"`) | Target count-up value. |
| `data-from` | Number (e.g. `"0"`, `"1990"`) | Starting count-up value (defaults to `0`). |
| `data-tilt` | Degrees (e.g. `"8"`, `"12"`) | Desktop 3D perspective tilt that tracks the cursor over cards or images. Disabled on touch. |
| `data-magnetic`| Intensity (e.g. `"0.22"`, `"0.4"`) | Smooth magnetic attraction pull toward cursor for buttons. Disabled on touch. |
| `data-spotlight`| None (boolean) | Radial gradient spotlight that follows mouse coordinates across dark or bordered cards. |
| `data-marquee` | `"left"` (default), `"right"` | Endless smooth horizontal marquee ticker. Duplicates content dynamically and pauses on hover. |
| `data-parallax`| Velocity (e.g. `"0.05"`, `"0.15"`) | Scroll-driven parallax depth effect for background layers or cards. |

---

## 3. Utility Classes

| Class | Description |
| :--- | :--- |
| `.motion-glow-blob` | Ambient background glow blob that floats and scales gently with infinite easing. |
| `.motion-scroll-cue` | Bouncing scroll indicator prompting users to explore downwards. |
| `.motion-shine-btn` | Shimmer / light-sweep highlight looping across high-priority CTA buttons. |
| `.motion-progress-line` | SVG drawn progress line animated using `stroke-dashoffset`. |

---

## 4. Copy-Paste Code Examples

### Example 1: Hero Section with Character Bounce, Floating Blobs & Magnetic CTAs
```html
<header class="relative overflow-hidden py-24">
  <!-- Ambient floating blobs -->
  <div class="motion-glow-blob" style="width: 400px; height: 400px; top: 10%; left: 8%;" aria-hidden="true"></div>
  <div class="motion-glow-blob" style="width: 450px; height: 450px; top: 20%; right: 6%; animation-delay: -6s;" aria-hidden="true"></div>

  <div class="container mx-auto px-6 text-center">
    <!-- Breadcrumb with fade-down -->
    <p class="text-sm font-semibold uppercase text-orange-500 tracking-wider" data-reveal="down">
      Teknoppy Kochi
    </p>

    <!-- Headline with character bounce drop -->
    <h1 class="text-5xl font-extrabold tracking-tight mt-4" data-chars>
      Websites Built to Convert
    </h1>

    <!-- Subtitle with delayed slide-up -->
    <p class="mt-4 text-xl text-gray-600 max-w-2xl mx-auto" data-reveal="up" data-delay="0.15s">
      High-performing digital experiences engineered by an in-house team in Vyttila.
    </p>

    <!-- Magnetic action buttons -->
    <div class="mt-8 flex justify-center gap-4" data-reveal="up" data-delay="0.25s">
      <a href="/request-a-quote/" class="btn btn-primary motion-shine-btn" data-magnetic>
        Get Free Quote →
      </a>
      <a href="/portfolios/" class="btn btn-ghost" data-magnetic>
        View Portfolio
      </a>
    </div>

    <!-- Animated stat counter -->
    <div class="mt-12 flex justify-center gap-12" data-stagger="60">
      <div>
        <span class="text-4xl font-bold" data-count data-to="120" data-from="0">120</span>+
        <small class="block text-gray-500">Delivered Websites</small>
      </div>
      <div>
        <span class="text-4xl font-bold" data-count data-to="2018" data-from="1990">2018</span>
        <small class="block text-gray-500">Established In Kochi</small>
      </div>
    </div>
  </div>
</header>
```

---

### Example 2: Interactive Service Cards Grid with Spotlight & 3D Tilt
```html
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold" data-words>
        What We Do Best
      </h2>
    </div>

    <!-- 3-column card grid with staggered entrance -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-stagger="80">
      <div class="card p-8 bg-white rounded-2xl shadow-sm border border-gray-100" data-tilt="10" data-spotlight>
        <div class="icon text-orange-500 text-3xl mb-4">🚀</div>
        <h3 class="text-xl font-bold mb-2">Web Design & UI/UX</h3>
        <p class="text-gray-600">Bespoke responsive interfaces built to convert visitors into inquiries.</p>
      </div>

      <div class="card p-8 bg-white rounded-2xl shadow-sm border border-gray-100" data-tilt="10" data-spotlight>
        <div class="icon text-orange-500 text-3xl mb-4">⚡</div>
        <h3 class="text-xl font-bold mb-2">High-Speed Development</h3>
        <p class="text-gray-600">Ultra-fast Astro and WordPress code passing Core Web Vitals audits.</p>
      </div>

      <div class="card p-8 bg-white rounded-2xl shadow-sm border border-gray-100" data-tilt="10" data-spotlight>
        <div class="icon text-orange-500 text-3xl mb-4">📈</div>
        <h3 class="text-xl font-bold mb-2">Technical SEO</h3>
        <p class="text-gray-600">Structured data schemas and on-page optimization that claim Google page 1 rankings.</p>
      </div>
    </div>
  </div>
</section>
```

---

### Example 3: Continuous Marquee Partner / Milestone Ticker
```html
<div class="py-8 bg-white border-y border-gray-100" data-marquee>
  <div class="flex gap-12 font-bold text-gray-500 uppercase tracking-widest text-sm items-center">
    <span class="text-orange-500">✦</span><span>E-Commerce Platforms</span>
    <span class="text-orange-500">✦</span><span>Corporate Portals</span>
    <span class="text-orange-500">✦</span><span>Local Business SEO</span>
    <span class="text-orange-500">✦</span><span>Custom Web Apps</span>
    <span class="text-orange-500">✦</span><span>Performance Audits</span>
  </div>
</div>
```

---

## 5. Performance & Accessibility Guarantees

1. **Accessibility (`prefers-reduced-motion: reduce`)**:
   - All `data-reveal`, `data-stagger`, `data-words`, and `data-chars` elements instantly snap to their visible, un-transformed state (`opacity: 1`, `transform: none`).
   - Marquee loops, floating glow blobs, and button shine sweeps are completely paused.
2. **Touch & Mobile Protection (`pointer: coarse`)**:
   - Interactive mouse effects (`data-tilt`, `data-magnetic`, `data-spotlight`, and cursor rings) only initialize when `window.matchMedia('(pointer: fine)').matches` is true. On touch screens, elements render smoothly without erratic cursor jitter.
3. **Tab Inactivity Optimization (`document.visibilityState`)**:
   - Marquees, timers, and ambient loops automatically pause when the user switches browser tabs, preserving battery and CPU cycles.
4. **Rendering Best Practices**:
   - Animations mutate strictly `transform`, `opacity`, and `clip-path` (composite layer only) to prevent layout thrashing and Cumulative Layout Shift (CLS = 0).
