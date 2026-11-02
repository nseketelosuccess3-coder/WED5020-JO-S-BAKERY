// Jo's Bakery - Product-Detail.js - 123 Main Road Rosebank Pretoria 0181 - EST 2019
// Phone 012 345 6789 - orders@jobakery.co.za - Coordinates -25.993,28.112
// Products: Cakes R250-R650 Banana R280 Cupcakes R20 Bread R25 Pies R35 Cookies R15

document.addEventListener('DOMContentLoaded', function(){

    // ===== 1. IMAGE GALLERY - Main image + thumbnails =====
    const mainImage = document.getElementById('mainProductImage');
    const thumbs = document.querySelectorAll('.thumb');

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function(){
            if(mainImage){
                // Swap main image
                const newSrc = this.src.replace('w=150','w=600');
                mainImage.src = newSrc;
                mainImage.alt = this.alt;
                
                // Highlight active thumb
                thumbs.forEach(t => t.style.border = '2px solid #ccc');
                this.style.border = '2px solid #c49a3c';
            }
        });
    });

    // ===== 2. LIGHTBOX - Click main image to enlarge =====
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');

    if(mainImage && lightbox){
        mainImage.addEventListener('click', function(){
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightboxCaption.textContent = this.alt + ' - Jo\'s Bakery 123 Main Road Rosebank 0181 - Blue door 8a - Bread baked 3am daily';
            lightbox.style.display = 'flex';
            lightbox.style.flexDirection = 'column';
        });

        // Close lightbox on X or outside click
        lightbox.addEventListener('click', function(e){
            if(e.target === lightbox || e.target.tagName === 'SPAN'){
                lightbox.style.display = 'none';
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', function(e){
            if(e.key === 'Escape' && lightbox.style.display === 'flex'){
                lightbox.style.display = 'none';
            }
        });
    }

    // ===== 3. QUANTITY SELECTOR - For product detail =====
    const qtyInput = document.getElementById('productQty');
    const minusBtn = document.getElementById('qtyMinus');
    const plusBtn = document.getElementById('qtyPlus');
    const priceDisplay = document.getElementById('priceTotal');
    
    // Base price - change per product page
    let basePrice = 450; // Default Medium cake R450
    if(document.title.includes('R280')) basePrice = 280;
    if(document.title.includes('R250')) basePrice = 250;
    if(document.title.includes('R25')) basePrice = 25;
    if(document.title.includes('R20')) basePrice = 20;
    if(document.title.includes('R35')) basePrice = 35;
    if(document.title.includes('R15')) basePrice = 15;

    // Detect price from page content
    const priceText = document.body.textContent.match(/R(\d+)/);
    if(priceText) basePrice = parseInt(priceText[1]);

    function updateTotal(){
        if(qtyInput && priceDisplay){
            const qty = parseInt(qtyInput.value) || 1;
            const total = basePrice * qty;
            priceDisplay.textContent = `Total: R${total} - Jo's Bakery Rosebank 0181 - Phone 012 345 6789`;
        }
    }

    if(minusBtn && qtyInput){
        minusBtn.addEventListener('click', function(){
            let val = parseInt(qtyInput.value) || 1;
            if(val > 1){
                qtyInput.value = val - 1;
                updateTotal();
            }
        });
    }

    if(plusBtn && qtyInput){
        plusBtn.addEventListener('click', function(){
            let val = parseInt(qtyInput.value) || 1;
            qtyInput.value = val + 1;
            updateTotal();
        });
    }

    if(qtyInput){
        qtyInput.addEventListener('input', updateTotal);
        updateTotal();
    }

    // ===== 4. ADD TO CART + ENQUIRY - Product Detail =====
    window.addToCartDetail = function(productId, productName, price){
        // Use cart.js if exists
        if(typeof addToCart === 'function'){
            const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
            addToCart(productId, qty);
        } else {
            // Fallback - save to localStorage directly
            let cart = JSON.parse(localStorage.getItem('joBakeryCart')) || [];
            const existing = cart.find(i => i.id === productId);
            const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
            
            if(existing){
                existing.qty += qty;
            } else {
                cart.push({ id: productId, name: productName, price: price, qty: qty });
            }
            localStorage.setItem('joBakeryCart', JSON.stringify(cart));
            
            // Show message
            const msg = document.createElement('div');
            msg.textContent = `${productName} x${qty} added - R${price * qty} - Cart total ${cart.reduce((s,i)=>s+i.qty,0)} items - Jo's Bakery 123 Main Road`;
            msg.style.cssText = 'position:fixed;top:20px;right:20px;background:#4CAF50;color:#fff;padding:15px;border-radius:5px;z-index:10000;';
            document.body.appendChild(msg);
            setTimeout(()=>msg.remove(), 3000);
        }
    };

    // ===== 5. SIZE SELECTOR - For cakes R250-R650 =====
    const sizeSelect = document.getElementById('cakeSize');
    if(sizeSelect){
        sizeSelect.addEventListener('change', function(){
            const selected = this.options[this.selectedIndex];
            const price = selected.getAttribute('data-price');
            basePrice = parseInt(price);
            const priceEl = document.getElementById('currentPrice');
            if(priceEl) priceEl.textContent = `R${price} - ${selected.text}`;
            updateTotal();
        });
    }

    // ===== 6. SEO - Update alt-text dynamically for accessibility =====
    const productImages = document.querySelectorAll('.product-card img, #mainProductImage');
    productImages.forEach(img => {
        if(!img.alt.includes('Rosebank 0181')){
            img.alt += ' - Jo\'s Bakery 123 Main Road Rosebank Pretoria 0181 - EST 2019 - Phone 012 345 6789';
        }
    });

    // ===== 7. SHARE BUTTON - Optional =====
    window.shareProduct = function(){
        const url = window.location.href;
        const text = document.title + ' - Jo\'s Bakery 123 Main Road Rosebank 0181 - Blue door 8a - -25.993,28.112';
        if(navigator.share){
            navigator.share({ title: document.title, text: text, url: url });
        } else {
            navigator.clipboard.writeText(url + ' - ' + text).then(()=>{
                alert('Link copied - Share Jo\'s Bakery - 123 Main Road Rosebank 0181 - Phone 012 345 6789');
            });
        }
    };

});

// ===== GLOBAL FUNCTIONS for inline onclick =====
function closeLightbox(){
    const lb = document.getElementById('lightbox');
    if(lb) lb.style.display = 'none';
}

function enquireProduct(productName, price){
    // Redirect to enquiries with product prefilled
    const msg = `Hi Jo's Bakery, I would like to enquire about ${productName} - Price R${price} - 123 Main Road Rosebank 0181 - My contact: `;
    localStorage.setItem('joBakeryEnquiry', msg);
    window.location.href = `enquiries.html?product=${encodeURIComponent(productName)}&price=R${price}`;
}