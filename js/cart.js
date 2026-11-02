// Jo's Bakery - Cart.js - 123 Main Road Rosebank Pretoria 0181 - EST 2019
// Phone 012 345 6789 - orders@jobakery.co.za - -25.993,28.112
// Prices: Cakes R250-R650 Banana R280 Cupcakes R20 Bread R25 Pies R35 Cookies R15

document.addEventListener('DOMContentLoaded', function(){
    let cart = JSON.parse(localStorage.getItem('joBakeryCart')) || [];

    // Products database - Jo's Bakery Rosebank 0181
    const products = {
        'cake-small': { name: 'Cake Small', price: 250, desc: 'Small cake - 15cm serves 4 - Jo\'s Bakery Rosebank 0181' },
        'cake-medium': { name: 'Cake Medium', price: 450, desc: 'Medium cake - 20cm serves 8 - Most popular - R450' },
        'cake-large': { name: 'Cake Large', price: 650, desc: 'Large cake - 25cm serves 12 - R650' },
        'banana-whole': { name: 'Banana Cake Whole', price: 280, desc: 'Banana cake whole - Gogo recipe 1970 - R280 - Blue door 8a' },
        'banana-slice': { name: 'Banana Cake Slice', price: 30, desc: 'Banana cake slice - R30 - Famous since 2019' },
        'cupcake-single': { name: 'Cupcake Single', price: 20, desc: 'Cupcake R20 each - Vanilla chocolate red velvet' },
        'cupcake-box': { name: 'Cupcakes Box 6', price: 110, desc: 'Cupcakes box 6 - R110 - Perfect for parties' },
        'bread-white': { name: 'Bread White', price: 25, desc: 'White bread - R25 - Baked 3am daily sold out 10am' },
        'bread-brown': { name: 'Bread Brown', price: 25, desc: 'Brown bread - R25 - Baked 3am daily - Rosebank 0181' },
        'pie-single': { name: 'Pie Single', price: 35, desc: 'Pie R35 - Chicken beef veg - Flaky pastry' },
        'pie-family': { name: 'Pie Family', price: 120, desc: 'Pie family - R120 - Serves 4 - Hot from oven' },
        'cookie-single': { name: 'Cookie Single', price: 15, desc: 'Cookie R15 each - Chocolate chip oatmeal' },
        'cookie-box': { name: 'Cookies Box', price: 80, desc: 'Cookies box - R80 - Crunchy outside soft inside' },
        'never-too-late': { name: 'Never Too Late Cake', price: 450, desc: 'Never Too Late motivational cake - Medium R450 - Custom text' }
    };

    // Update cart display everywhere
    function updateCartCount(){
        const count = cart.reduce((sum, item) => sum + item.qty, 0);
        const badges = document.querySelectorAll('#cartCount, .cart-count');
        badges.forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'inline-block' : 'none';
        });
        localStorage.setItem('joBakeryCart', JSON.stringify(cart));
    }

    // Add to cart - call from button onclick="addToCart('cake-medium')"
    window.addToCart = function(productId, qty = 1){
        const product = products[productId];
        if(!product){
            alert('Product not found - Jo\'s Bakery Rosebank 0181');
            return;
        }

        const existing = cart.find(item => item.id === productId);
        if(existing){
            existing.qty += qty;
        } else {
            cart.push({ id: productId, name: product.name, price: product.price, qty: qty });
        }

        updateCartCount();
        showCartMessage(`${product.name} added - R${product.price} - Cart now ${cart.reduce((s,i)=>s+i.qty,0)} items - Jo's Bakery 123 Main Road Rosebank 0181`);
        renderCart();
    };

    // Remove from cart
    window.removeFromCart = function(productId){
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        renderCart();
    };

    // Update quantity
    window.updateQty = function(productId, newQty){
        const item = cart.find(i => i.id === productId);
        if(item){
            if(newQty <= 0){
                removeFromCart(productId);
            } else {
                item.qty = newQty;
                updateCartCount();
                renderCart();
            }
        }
    };

    // Show temporary message
    function showCartMessage(msg){
        let msgDiv = document.getElementById('cartMessage');
        if(!msgDiv){
            msgDiv = document.createElement('div');
            msgDiv.id = 'cartMessage';
            msgDiv.style.cssText = 'position:fixed;top:20px;right:20px;background:#4CAF50;color:#fff;padding:15px;border-radius:5px;z-index:10000;max-width:300px;';
            document.body.appendChild(msgDiv);
        }
        msgDiv.textContent = msg;
        msgDiv.style.display = 'block';
        setTimeout(()=>{ msgDiv.style.display='none'; }, 3000);
    }

    // Render cart page - if #cartItems exists
    function renderCart(){
        const cartContainer = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const cartEmpty = document.getElementById('cartEmpty');
        
        if(!cartContainer) return;

        if(cart.length === 0){
            cartContainer.innerHTML = '';
            if(cartEmpty) cartEmpty.style.display = 'block';
            if(cartTotal) cartTotal.textContent = 'Cart empty - Visit 123 Main Road, Rosebank, Pretoria 0181 - Blue door 8a - Bread baked 3am daily - Phone 012 345 6789';
            return;
        }

        if(cartEmpty) cartEmpty.style.display = 'none';

        let html = '';
        let total = 0;
        cart.forEach(item => {
            const subtotal = item.price * item.qty;
            total += subtotal;
            html += `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;border-bottom:1px solid #eee;background:#fff;margin-bottom:5px;border-radius:5px;">
                    <div style="flex:1;">
                        <strong>${item.name}</strong><br>
                        <small>R${item.price} each - ${products[item.id]?.desc || ''}</small>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px;">
                        <button onclick="updateQty('${item.id}', ${item.qty - 1})" style="width:30px;height:30px;">-</button>
                        <span style="min-width:20px;text-align:center;">${item.qty}</span>
                        <button onclick="updateQty('${item.id}', ${item.qty + 1})" style="width:30px;height:30px;">+</button>
                        <span style="min-width:70px;text-align:right;font-weight:bold;">R${subtotal}</span>
                        <button onclick="removeFromCart('${item.id}')" style="background:#8b3a50;color:#fff;border:none;padding:5px 10px;border-radius:3px;margin-left:10px;">Remove</button>
                    </div>
                </div>
            `;
        });

        cartContainer.innerHTML = html;
        if(cartTotal){
            const delivery = total >= 300 ? 0 : 50;
            const grandTotal = total + delivery;
            cartTotal.innerHTML = `
                <div style="text-align:right;padding:15px;background:#f9f9f9;border-radius:8px;margin-top:15px;">
                    <p>Subtotal: R${total}</p>
                    <p>Delivery: ${delivery === 0 ? 'FREE (over R300)' : 'R'+delivery+' - Rosebank area'} - 123 Main Road Rosebank 0181</p>
                    <p style="font-size:1.2em;font-weight:bold;">Total: R${grandTotal}</p>
                    <p style="font-size:0.9em;">Phone 012 345 6789 | Email orders@jobakery.co.za | WhatsApp 072 123 4567</p>
                    <p style="font-size:0.9em;">Bread baked 3am daily - Sold out by 10am - Blue door 8a - Coordinates -25.993,28.112</p>
                    <button onclick="checkout()" class="button" style="margin-top:10px;">Checkout - Enquire R${grandTotal}</button>
                    <button onclick="clearCart()" style="background:#ccc;color:#000;border:none;padding:10px 15px;border-radius:5px;margin-left:10px;">Clear Cart</button>
                </div>
            `;
        }
    }

    // Checkout - redirect to enquiries with cart data
    window.checkout = function(){
        if(cart.length === 0){
            alert('Cart empty - Add products from Our Products page - Jo\'s Bakery Rosebank 0181');
            return;
        }
        const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        const summary = cart.map(i => `${i.name} x${i.qty} = R${i.price * i.qty}`).join(', ');
        localStorage.setItem('joBakeryCheckout', JSON.stringify({ items: cart, total: total, summary: summary }));
        // Redirect to enquiries with pre-filled message
        window.location.href = `enquiries.html?cart=${encodeURIComponent(summary)}&total=R${total}`;
    };

    // Clear cart
    window.clearCart = function(){
        if(confirm('Clear cart? - Jo\'s Bakery 123 Main Road Rosebank 0181')){
            cart = [];
            updateCartCount();
            renderCart();
            showCartMessage('Cart cleared - Jo\'s Bakery Rosebank 0181 - Bread baked 3am daily');
        }
    };

    // Initial render
    updateCartCount();
    renderCart();

    // Auto-add buttons if data attributes exist
    document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
        btn.addEventListener('click', function(){
            const id = this.getAttribute('data-add-to-cart');
            const qty = parseInt(this.getAttribute('data-qty')) || 1;
            addToCart(id, qty);
        });
    });
});