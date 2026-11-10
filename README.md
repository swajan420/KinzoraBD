# KinzoraBD — Sample Online Shop

A responsive static storefront made with HTML, CSS, and JavaScript. It is designed to work smoothly on Android phones and desktops, including:
- English/Bangla language toggle
- Product search and category filters
- Example product cards and prices
- WhatsApp order links
- About, delivery, and contact sections

## Important before publishing
This is a demo storefront. Product names, descriptions, and prices are examples. Replace them with your real information. No payment gateway, database, stock system, or automatic order storage is connected.

## Edit using an Android phone
1. Download and extract `kinzorabd-shop.zip` with your phone's file manager.
2. Open `index.html`, `style.css`, and `script.js` using a code editor that supports local HTML files. A browser-based editor can also be used.
3. In `script.js`, replace:
   - `WHATSAPP_NUMBER = "8801XXXXXXXXX"` with your WhatsApp number in international format. Bangladesh number format: `8801XXXXXXXXX`, no plus sign or spaces.
   - `CONTACT_EMAIL` and `CONTACT_PHONE`.
4. Update the `PRODUCTS` list in `script.js`. Change each product's name, Bangla name, description, category, price, and label.
5. Save and open `index.html` in a browser to test. Some file managers may not let the browser load all local files; if so, use an online code editor or deploy to a free static host.

## Free publishing option: GitHub Pages (static demo only)
Important: GitHub Pages is for static sites and GitHub says it is not intended/allowed as free hosting for an online business, e-commerce site, or commercial transactions. Use it only for a personal learning/demo preview, not for your live shop. For a real commercial store, check the host's current terms and choose a platform that permits commerce.
1. Create a GitHub account and a repository named `KinzoraBD` for a personal demo.
2. Upload `index.html`, `style.css`, and `script.js` to the repository root.
3. In repository Settings → Pages, choose the branch and root folder if the feature is available.
4. Wait for the published URL and test it on your phone.

## A no-cost alternative for a real early-stage shop
Use a platform whose current free plan and terms allow your intended business use, or keep this as a local prototype while taking orders through social media. Free plan features and rules can change. A static HTML site does not securely store orders or process payments by itself.

## How to add a product
In `script.js`, copy one object inside `PRODUCTS` and edit its fields. Update the categories in `index.html` and `script.js` according to your KinzoraBD product lineup (such as Electronics, Fashion, Home & Living, Health & Personal Care, and Groceries).

For a new category, add a filter button in `index.html` and a translation in `translations` in `script.js`.
