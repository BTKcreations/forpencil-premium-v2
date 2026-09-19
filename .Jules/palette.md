## 2024-05-24 - Initial Journal Creation
**Learning:** This is the beginning of the UX journal for Forpencil.
**Action:** Started keeping track of major UX learning.

## 2024-05-24 - Product-Specific ARIA Labels for Generic Actions
**Learning:** Screen reader users lose context when multiple identical generic action buttons like "Quick Add" exist in a list (e.g., product grids). Simply adding a static ARIA label doesn't help them know *what* they are adding.
**Action:** When adding generic action buttons in iterables (like product cards), inject the item name into the `aria-label` (e.g., `aria-label={\`Quick add ${product.name} to bag\`}`). Adding `aria-live="polite"` also improves the experience when state changes.
