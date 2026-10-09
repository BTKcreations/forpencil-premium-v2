## 2024-05-18 - Placeholder-only Input Fields
**Learning:** Using placeholder attributes as the sole visual and structural label for inputs creates a significant accessibility issue. Once the user starts typing and the placeholder disappears, screen readers lose the context, making the form inaccessible.
**Action:** Always ensure placeholder-only input fields have corresponding `aria-label` attributes to maintain accessibility context for screen readers.
