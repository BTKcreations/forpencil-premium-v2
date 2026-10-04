## 2024-05-24 - Unlinked Form Labels in Account Settings
**Learning:** Found several form inputs in `app/account/page.js` lacking semantic relationships with their labels (missing `id` and `htmlFor`). Screen readers rely on this connection, and users with motor difficulties benefit from the increased clickable area when labels are properly linked.
**Action:** When creating forms, always ensure `<label>` elements use `htmlFor` pointing to the exact `id` of their corresponding `<input>`. Adding semantic linking improves the experience for all users and is a quick but powerful accessibility win.
