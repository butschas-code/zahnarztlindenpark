# Lindenpark — Brand Color Guide

## Strategy

The **logo tooth stays vivid** (`#0000a0` in the PNG). Everything else on the site uses **gentle, desaturated derivatives** of the five-color palette — never the raw intense swatches as full backgrounds.

---

## Source palette (reference — do not use at full strength on UI)

| Swatch | Intense hex | Character |
|--------|-------------|-----------|
| Royal | `#1004A1` | Deep navy blue |
| Vibrant | `#0328A1` | Electric royal blue |
| Indigo | `#4403A1` | Blue-violet |
| Cerulean | `#035AA1` | Ocean teal-blue |
| Magenta | `#7703A1` | Plum violet |

---

## UI primary (softened #0328A1)

| Token | Hex | Use |
|-------|-----|-----|
| `brand` | `#4a62b5` | Buttons, links, nav accents |
| `brand-hover` | `#4258a5` | Button hover |
| `brand-active` | `#394d94` | Pressed states |

---

## Soft blue tints

| Token | Hex |
|-------|-----|
| `brand-50` | `#f2f4fa` |
| `brand-100` | `#e6e9f3` |
| `brand-200` | `#d1d7e8` |
| `brand-300` | `#b3bdd4` |
| `brand-400` | `#8994b8` |

---

## Accent hues (softened companions)

| Token | Source | Soft hex | Use |
|-------|--------|----------|-----|
| `accent-violet` | `#4403A1` | `#6e66a0` | Decorative accents |
| `accent-cerulean` | `#035AA1` | `#5a88b0` | Decorative accents |
| `accent-plum` | `#7703A1` | `#9278a8` | Decorative accents |
| `violet-50` / `100` | indigo tints | `#f0eef6` / `#e2deee` | `.surface-accent` |
| `cerulean-50` / `100` | cerulean tints | `#edf3f8` / `#dce8f2` | `.surface-soft`, hex shapes |
| `plum-50` / `100` | magenta tints | `#f4eef6` / `#e8deec` | Accent sections |

---

## Deep anchor (softened #1004A1)

| Token | Hex | Use |
|-------|-----|-----|
| `brand-deep` | `#353d72` | Footer only |
| `brand-deep-soft` | `#464f88` | Footer gradient mix |

---

## Typography

| Token | Hex |
|-------|-----|
| `heading` | `#343852` |
| `body` | `#585c72` |
| `muted` | `#86889c` |
| `faint` | `#a5a7b5` |

---

## Section surfaces

| Class | Feel |
|-------|------|
| `.surface-light` | Warm sand |
| `.surface-soft` | Cerulean-tinted cool |
| `.surface-accent` | Violet-plum wash |
| `.surface-deep` | Muted royal footer |

---

## Do / Don't

**Do**
- Keep logo PNG at full color
- Use soft `#4a62b5` for interactive UI
- Rotate cerulean / violet / plum as light section washes
- Neutral photo scrims

**Don't**
- Use `#0328A1`, `#1004A1`, etc. at full saturation on buttons or backgrounds
- Flood sections with any single intense hue
- Match every UI element to the neon logo blue

---

## Implementation

Tokens: `src/app/globals.css` → `@theme`
