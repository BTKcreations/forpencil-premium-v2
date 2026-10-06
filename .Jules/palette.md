
## 2024-05-18 - Form Input Accessibility Without Labels
**Learning:** In the current application, forms like checkout and contact frequently rely solely on `placeholder` attributes for input context, lacking visible `<label>` tags or `aria-label`s. Since the constraints prevent adding custom `.sr-only` CSS to the global stylesheet, the standard visually hidden label approach isn't feasible.
**Action:** Always add `aria-label` attributes corresponding directly to the placeholder text for all `input` and `textarea` fields to ensure screen readers provide correct context when custom CSS `.sr-only` is not permitted.
