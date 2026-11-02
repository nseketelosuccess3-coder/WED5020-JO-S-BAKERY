# Jo's Bakery - Changelog
### 123 Main Road, Rosebank, Pretoria 0181 - EST 2019
### Phone 012 345 6789 | orders@jobakery.co.za | -25.993,28.112
### Blue door 8a - 5 min walk Rosebank College - Bread baked 3am daily

---

## [1.5.0] - 2026-05-13
### Added - SEO & Final Deployment
- Added `robots.txt` - Allow all, Sitemap link for Googlebot
- Added `sitemap.xml` - All 8 pages indexed - Home, Products, Product-detail, Never-too-late, About, Enquiries, Contact, Cart
- Added alt-text SEO to all images - "Jo's Bakery 123 Main Road Rosebank Pretoria 0181 - Blue door 8a - EST 2019 - Phone 012 345 6789 - -25.993,28.112"
- Added meta descriptions with prices - Cakes R250-R650 Banana R280 Cupcakes R20 Bread R25 Pies R35 Cookies R15
- Added canonical tags for all pages
- Final Netlify deployment - https://jos-bakery-rosebank-0181.netlify.app/

## [1.4.0] - 2026-05-12
### Added - JavaScript Modules
- Created `search.js` - Live product search filter - Keyword synonyms - Voice search - Price filters R25 R250 R450
- Created `product-detail.js` - Gallery thumbs click, Lightbox enlarge ESC close, Quantity +/- total R calculation, Size selector R250/R450/R650, Add to cart, Share product
- Created `cart.js` - Shopping cart localStorage - Products database R250-R650, Add/remove/update qty, Cart count badge, Subtotal delivery FREE over R300, Checkout to enquiries
- Created `account.js` - Login validation email regex phone 10 digits 0 start, Loyalty points 50 free bread 100, localStorage user, Dashboard, Logout
- Updated `script.js` - Combined validation for all forms - Enquiries + Contact + Quick contact

## [1.3.0] - 2026-05-11
### Added - Product Detail Pages
- Created `product-detail.html` - Banana Cake R280 Whole Sliced R30 - Gallery 3 images - Lightbox - Related products - Ingredients allergens storage
- Created `never-too-late.html` - Never Too Late Cake Medium R450 - Custom motivational cake - Sizes Small R250 Medium R450 Large R650 - Why Never Too Late section
- Created `product.html` - Product list version - Search bar - 6 products cards - No results message
- Added product prices consistent: Cakes Small R250 Medium R450 Large R650, Banana Cake Whole R280 Sliced R30, Cupcakes R20 Box 6 R110, Bread White/Brown R25 baked 3am sold out 10am, Pies R35 Family R120, Cookies R15 Box R80

## [1.2.0] - 2026-05-10
### Added - Core Pages
- Created `cart.html` - Cart items display - Empty message - Total with delivery - Clear cart - Checkout enquire
- Created `account.html` - Login form email phone - Error messages under each field red - Success green - Dashboard loyalty
- Updated `services.html` - Product container 6 cards - Each card with img alt SEO location, h3 price, p description, button Enquire - Search functionality
- Updated `enquiries.html` - Product select dropdown - Message with cart summary - Validation - Contact info 123 Main Road Rosebank 0181
- Updated `contact.html` - Map -25.993,28.112 - Contact details Phone 012 345 6789 WhatsApp 072 123 4567 - Quick contact form - Hours Mon-Sat 5am-6pm Sun 6am-3pm

## [1.1.0] - 2026-05-09
### Added - Styling & Layout
- Created `style.css` - Responsive - Mobile first - Header double border #c49a3c - Product cards grid - Buttons #8b3a50 - Footer - Skip link - Accessibility
- Added images from Unsplash with lazy loading - Alt text includes Jo's Bakery 123 Main Road Rosebank Pretoria 0181 - Blue door 8a - EST 2019 - Phone
- Added header-container with H1 Jo's Bakery - EST 2019 Rosebank 0181 - Tagline Freshly Baked Goodness Every Day - Blue door 8a Rosebank - Bread baked 3am
- Added footer with all links + sitemap link + prices + copyright 2026

## [1.0.0] - 2026-05-08
### Added - Initial Setup
- Created `index.html` - Home page - Page banner - Welcome section - Why us 3 cards - Call to action - SEO meta title description keywords author canonical
- Created project folder structure - Root - All HTML in root - CSS JS in root - For Netlify simple deployment
- Defined business details: Jo's Bakery - 123 Main Road, Rosebank, Pretoria 0181 - Blue door 8a - 5 min walk Rosebank College - EST 2019 - Phone 012 345 6789 - WhatsApp 072 123 4567 - Email orders@jobakery.co.za - Coordinates -25.993,28.112 - Hours Mon-Sat 5am-6pm Sun 6am-3pm - Prices Cakes R250-R650 Banana R280 etc
- Setup GitHub repo - Connected to Netlify - Auto deploy on push

---

## Technical Stack
- HTML5 - Semantic - Accessibility - Skip link - aria-live - aria-current
- CSS3 - Responsive - Flexbox - Grid - No framework - Clean professional
- JavaScript - Vanilla - localStorage - No jQuery - Modular files - search.js product-detail.js cart.js account.js script.js
- SEO - alt-text location, meta description with prices address phone, canonical, sitemap, robots.txt, headings H1 H2 H3
- Deployment - Netlify - https://jos-bakery-rosebank-0181.netlify.app/

## Compliance
- POPIA - No personal data stored server - localStorage only - Consent on forms
- Accessibility - WCAG 2.1 - Alt text, labels, keyboard navigation, skip link, error messages
- Performance - Lazy loading images, defer JS, minified ready

## Future - v2.0
- Admin dashboard admin.js - Order management
- Payment integration PayFast - For R250-R650 cakes
- WhatsApp order direct - 072 123 4567
- Loyalty app - Points 50 free bread 100
- Blog - Baking tips - Gogo recipe 1970 story

---
Last updated: 2026-05-13 - Jo's Bakery Rosebank 0181 - EST 2019