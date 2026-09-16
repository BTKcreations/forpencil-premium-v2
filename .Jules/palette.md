## 2024-05-19 - Contextual ARIA Labels for List Items
**Learning:** Screen reader users struggle with repeatable generic labels like "Add to wishlist" or "Remove item" in lists or grids, as they lack context of which item is being affected.
**Action:** Always interpolate the specific item name into aria-labels for buttons within mapped lists or product cards (e.g., `Remove ${item.name}`).
