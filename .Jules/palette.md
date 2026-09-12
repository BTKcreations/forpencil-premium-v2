## 2024-05-18 - Missing ARIA Labels on Placeholder-only Forms
**Learning:** Found an accessibility pattern across the application where forms (contact, checkout, search) rely solely on placeholders without `<label>` elements or `aria-label`s. This makes forms difficult for screen readers to parse correctly.
**Action:** When working on inputs without visible `<label>` elements, always add an `aria-label` to provide context for screen readers.
