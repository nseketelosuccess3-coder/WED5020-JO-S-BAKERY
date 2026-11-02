# Jo's Bakery Website

Website for Jo's Bakery at 123 Main Road, Rosebank, Pretoria 0181 - Family bakery established in 2019 - Blue door 8a - EST 2019.

Live site: https://jos-bakery-rosebank-0181.netlify.app/

## 1. Project Overview

Jo's Bakery website is a website development project for Jo's Bakery. The website is created to promote a small bakery and its products online. The website provides information about the bakery, its products and services, contact details, and enquiries.

The purpose of the website is to improve the bakery's online presence, help customers learn about its products, and make it easier for customers to enquire about cakes, cupcakes, bread, pies and customised orders.

Address: 123 Main Road, Rosebank, Pretoria 0181 - Blue door 8a - 5 min walk Rosebank College - Coordinates -25.993,28.112
Prices: Cakes Small R250 Medium R450 Large R650, Banana Cake R280 Sliced R30, Cupcakes R20 Box 6 R110, Bread White/Brown R25 baked 3am daily, Pies R35 Family R120, Cookies R15 Box R80

## 2. Project Objectives

The objectives of the website are to:

- Promote Jo's Bakery and its products online
- Provide information about the bakery - family bakery established 2019 - Gogo recipe 1970
- Display the products and services offered - Cakes R250-R650, cupcakes R20, bread R25, pies R35, banana cake R280, cookies R15
- Allow visitors to submit enquiries through a form
- Provide contact information and opening hours - 123 Main Road Rosebank 0181 Phone 012 345 6789
- Create a website that is easy to navigate
- Ensure that the website works on desktop computers, tablets and mobile devices
- Apply basic website accessibility and search engine optimisation practices - alt-text location, meta with prices, sitemap, robots.txt

## 3. Technologies Used

The website uses the following technologies:

- **HTML5:** Structures the website pages and content - lang en-ZA - Semantic - Alt-text includes location Blue door 8a EST 2019 Phone Coordinates
- **CSS3:** Controls the website's layout, colours, fonts and responsive design - style.css - Mobile first - No framework
- **JavaScript:** Provides client-side form validation, product-search functionality, gallery lightbox and interactive map - search.js product-detail.js cart.js account.js script.js
- **Leaflet and OpenStreetMap:** Used for the interactive map on the contact and home pages - Coordinates -25.993,28.112 - 2 markers + walking route
- **Netlify:** Used to publish and host the website - https://jos-bakery-rosebank-0181.netlify.app/
- **Git and GitHub:** Used for version control and storing the project repository

## 4. Website Pages

| File | Description |
|---|---|
| `index.html` | The home page introduces Jo's Bakery and highlights its products - includes product search, gallery lightbox and map |
| `about.html` | Provides information about the bakery, its mission and its vision - EST 2019 Gogo 1970 |
| `services.html` | Displays the bakery's products and allows visitors to search for products - 6 products R250-R650 |
| `product-detail.html` | Single product page - Banana Cake R280 - Gallery + Lightbox |
| `never-too-late.html` | Custom cake page - Never Too Late Cake R450 - Small R250 Large R650 |
| `enquiries.html` | Provides an enquiry form for customers interested in products or custom orders - Validation |
| `contact.html` | Displays contact details, opening hours and a map - includes 2 markers and walking route - Phone 012 345 6789 |
| `cart.html` | Cart page - Add/remove/qty - Total + delivery FREE over R300 |
| `account.html` | My Account - Login - Loyalty 50 points free bread at 100 - R25 value |
| `style.css` | Contains the shared styling and responsive layout |
| `script.js` | Provides product-search functionality, enquiry-form validation, map and lightbox |
| `search.js` | Product search - Live filter - Price filters R25 R250 R450 - Voice search |
| `product-detail.js` | Gallery thumbs, Lightbox ESC close, Qty +/- total R, Size selector |
| `cart.js` | Shopping cart localStorage - Badge count - Checkout to enquiries |
| `account.js` | Account login validation - Email regex - Phone 10 digits starting 0 |
| `sitemap.xml` | Lists the website's public pages for search engine discovery |
| `robots.txt` | Provides instructions for search engine crawlers - Allow all - Sitemap link |
| `CHANGELOG.md` | Version history v1.0.0 to v1.5.0 |
| `README.md` | This file - Project documentation |

## 5. Features

- **Responsive Design:** Works on desktop, tablet and mobile - Mobile first
- **Product Search:** Dynamic search filters products by name and description - search.js - Type bread R25 cakes R450 banana R280
- **Gallery Lightbox:** Click on product images to enlarge with caption - ESC to close - Alt-text includes location
- **Interactive Map:** Leaflet map showing bakery location at -25.993,28.112 and Rosebank College with walking route - Blue door 8a
- **Enquiry Form:** Form with validation for name, email, phone, enquiry type and message - Email must contain @ - Phone 10 digits starting 0 - Errors under field red
- **SEO Optimised:** Title tags with prices location, meta descriptions with address phone, meta keywords cakes R250 Rosebank, alt-text for images with coordinates, canonical links, sitemap.xml and robots.txt
- **Accessibility:** Skip links, aria labels, aria-live regions for search results and form errors - Labels for all inputs

## 6. Installation and Setup

To view the website locally:

1. Download or clone the project repository
2. Extract the project files if they are provided in a compressed ZIP folder
3. Ensure that the HTML files, `style.css` and `script.js` + search.js product-detail.js cart.js account.js are in the root folder
4. Open `index.html` in a web browser
5. Use the navigation menu to access the other pages - Home, Our Products, About Us, Enquiries, Contact Us
6. Ensure that an internet connection is available for external resources, such as the Leaflet map tiles
7. Check sitemap.xml and robots.txt for SEO - Must be in root - Visit /sitemap.xml and /robots.txt
8. Test search: type R25, R450, banana, bread - Should filter products
9. Test cart: Add to cart - Should show badge count - Checkout redirects to enquiries with summary

No special software is required - Vanilla HTML CSS JS.

## 7. Contact Details

Jo's Bakery
123 Main Road, Rosebank, Pretoria 0181
Blue door 8a - 5 min walk from Rosebank College - White building opposite Shell garage

Phone: 012 345 6789
WhatsApp: 072 123 4567
Email: orders@jobakery.co.za
Coordinates: -25.993,28.112

Hours:
Monday to Saturday: 5am to 6pm
Sunday: 6am to 3pm
Bread baked daily at 3am - Sold out by 10am

Prices:
Cakes Small R250 Medium R450 Large R650
Banana Cake Whole R280 Sliced R30 - Famous
Cupcakes R20 Each Box 6 R110
Bread White/Brown R25
Pies R35 Each Family R120
Cookies R15 Each Box R80
Never Too Late Cake Medium R450 - Custom

## 8. Credits

Jo's Bakery - EST 2019 - Family bakery
123 Main Road, Rosebank, Pretoria 0181
Project for website development - 2026

Hosting: Netlify
Map: Leaflet + OpenStreetMap
Images: Unsplash with lazy loading and alt-text SEO
Version Control: Git + GitHub
Changelog: See CHANGELOG.md

© 2026 Jo's Bakery - 123 Main Road Rosebank 0181 - Blue door 8a - EST 2019 - Phone 012 345 6789