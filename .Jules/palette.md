## 2024-03-24 - [Missing Form Labels in Account Details]
**Learning:** React form inputs without proper `htmlFor` and `id` bindings fail to pass focus when labels are clicked, hurting accessibility for screen readers and usability for standard users.
**Action:** When adding or updating forms, always ensure `<label>` has an `htmlFor` attribute that exactly matches the `id` of its corresponding `<input>`.
