## 2024-09-24 - Screen Reader Compatibility on Forms
**Learning:** In checkout and contact forms, inputs relying solely on visual `placeholder` attributes lack screen-reader accessible labels, causing poor accessibility for users navigating via keyboards/screen-readers.
**Action:** Use `aria-label` directly on `<input>` elements when visual `<label>` elements are omitted to maintain clean layout without compromising accessibility.
