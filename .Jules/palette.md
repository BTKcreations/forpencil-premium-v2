## 2024-03-24 - Missing Form Labels Pattern
**Learning:** The application extensively uses placeholders instead of explicit labels for form inputs (e.g., Contact page, Checkout page), causing accessibility issues and context loss when users start typing.
**Action:** Always provide explicit, visually accessible <label> elements linked via 'htmlFor' and 'id' to inputs across the design system to ensure screen reader compatibility and maintain context for all users.
