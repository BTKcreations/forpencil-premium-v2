## 2023-10-24 - Context-Aware ARIA Labels for List Items

**Learning:** When using action buttons in repeatable lists or grids (like cart items or product cards), generic labels such as "Decrease quantity" or "Quick Add" fail to provide sufficient context for screen reader users, who may navigate interactively from button to button out of context of the list items themselves. This creates ambiguity over *which* product's quantity is being altered or added.

**Action:** Consistently enforce dynamic `aria-label` injection using item properties (e.g., \`aria-label={\`Decrease quantity of ${item.name}\`}\`). This ensures immediate contextual clarity for assistive technologies across e-commerce views.
