## 2024-10-15 - Esc Key to Close Modals
**Learning:** Users relying on keyboard navigation expect the `Escape` key to close open overlays, modals, and drawers (like the search menu or cart drawer). Without it, they get trapped in the overlay if they don't tab to the close button explicitly.
**Action:** Always implement `keydown` listeners for `Escape` on custom dialogs/overlays to ensure they can be dismissed seamlessly via keyboard.
