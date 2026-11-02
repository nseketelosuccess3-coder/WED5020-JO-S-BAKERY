// Jo's Bakery - Account.js - 123 Main Road Rosebank Pretoria 0181 - EST 2019
// Phone 012 345 6789 - orders@jobakery.co.za - Coordinates -25.993,28.112

document.addEventListener('DOMContentLoaded', function(){

    // Account Login Validation - My Account Page
    const accountForm = document.getElementById('accountForm');
    if(accountForm){
        accountForm.addEventListener('submit', function(e){
            e.preventDefault();
            
            let isValid = true;
            
            // Reset errors
            document.getElementById('accEmailError').textContent = '';
            document.getElementById('accPhoneError').textContent = '';
            document.getElementById('accEmailError').style.display = 'none';
            document.getElementById('accPhoneError').style.display = 'none';

            const emailInput = document.getElementById('accEmail');
            const phoneInput = document.getElementById('accPhone');
            
            const email = emailInput.value.trim();
            const phone = phoneInput.value.replace(/\s/g, '');

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(email)){
                const err = document.getElementById('accEmailError');
                err.textContent = 'Enter valid email - e.g. you@rosebank.co.za';
                err.style.display = 'block';
                isValid = false;
            }

            // Phone validation - 10 digits starting 0 - 012 345 6789
            const phoneRegex = /^0[0-9]{9}$/;
            if(!phoneRegex.test(phone)){
                const err = document.getElementById('accPhoneError');
                err.textContent = 'Phone must be 10 digits starting with 0 - e.g. 0123456789';
                err.style.display = 'block';
                isValid = false;
            }

            if(isValid){
                // Success - Simulate login
                const successMsg = document.getElementById('accSuccess');
                successMsg.style.display = 'block';
                successMsg.textContent = `Welcome back! Logged in as ${email} - Loyalty Points: 50 - Next free bread at 100 points - Jo's Bakery 123 Main Road Rosebank 0181 - Blue door 8a - Bread baked 3am daily`;
                successMsg.setAttribute('aria-live', 'polite');
                
                // Save to localStorage - simulate account
                localStorage.setItem('joBakeryUser', JSON.stringify({
                    email: email,
                    phone: phone,
                    points: 50,
                    address: '123 Main Road, Rosebank, Pretoria 0181',
                    loginTime: new Date().toISOString()
                }));

                // Clear form
                accountForm.reset();

                // Show dashboard if exists
                const dashboard = document.getElementById('accountDashboard');
                if(dashboard){
                    dashboard.style.display = 'block';
                    dashboard.innerHTML = `
                        <h3>Welcome ${email}</h3>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Address:</strong> 123 Main Road, Rosebank, Pretoria 0181 - Blue door 8a</p>
                        <p><strong>Loyalty:</strong> 50 points - Free bread at 100 points (R25 value)</p>
                        <p><strong>Recent Orders:</strong> Bread R25 x2 - Banana Cake R280 - Total R330</p>
                        <p><strong>Contact:</strong> Phone 012 345 6789 | Email orders@jobakery.co.za | WhatsApp 072 123 4567</p>
                        <p><strong>Location:</strong> -25.993,28.112 - 5 min walk Rosebank College</p>
                        <button onclick="logout()" class="button" style="background:#8b3a50;">Logout</button>
                    `;
                }

                // Auto hide success after 5 seconds
                setTimeout(()=>{ successMsg.style.display='none'; }, 5000);
            }
        });
    }

    // Load saved user if exists
    const savedUser = localStorage.getItem('joBakeryUser');
    if(savedUser){
        try{
            const user = JSON.parse(savedUser);
            const emailField = document.getElementById('accEmail');
            if(emailField && !emailField.value){
                emailField.value = user.email;
            }
            // Auto show dashboard
            const dashboard = document.getElementById('accountDashboard');
            if(dashboard && user.email){
                dashboard.style.display = 'block';
                dashboard.innerHTML = `
                    <h3>Welcome back ${user.email}</h3>
                    <p>Phone: ${user.phone} | Points: ${user.points} | Free bread at 100 points</p>
                    <p>Address: 123 Main Road, Rosebank, Pretoria 0181 - Blue door 8a</p>
                    <p>Coordinates: -25.993,28.112 - Jo's Bakery EST 2019</p>
                `;
            }
        } catch(e){
            console.log('No saved user');
        }
    }

    // Product search functionality for account page if search box exists
    const productSearch = document.getElementById('productSearch');
    if(productSearch){
        productSearch.addEventListener('input', function(){
            const term = this.value.toLowerCase();
            const cards = document.querySelectorAll('.product-card');
            let found = 0;
            cards.forEach(card=>{
                const text = (card.textContent + (card.querySelector('img')?.alt || '')).toLowerCase();
                const match = text.includes(term);
                card.style.display = match ? 'block' : 'none';
                if(match) found++;
            });
            const msg = document.getElementById('searchMessage');
            if(msg){
                msg.textContent = term ? `${found} products found for "${term}" - Jo's Bakery Rosebank 0181` : '';
            }
            const noResults = document.getElementById('noResults');
            if(noResults){
                noResults.style.display = found === 0 && term ? 'block' : 'none';
            }
        });
    }
});

// Logout function - global
function logout(){
    localStorage.removeItem('joBakeryUser');
    const dashboard = document.getElementById('accountDashboard');
    if(dashboard) dashboard.style.display = 'none';
    const success = document.getElementById('accSuccess');
    if(success){
        success.style.display = 'block';
        success.textContent = 'Logged out successfully - See you soon at 123 Main Road, Rosebank, Pretoria 0181 - Jo\'s Bakery - Bread baked 3am daily';
        setTimeout(()=>{ success.style.display='none'; }, 3000);
    }
    document.getElementById('accountForm').reset();
}

// Quick contact form - for contact.html if using account.js
const quickForm = document.getElementById('quickContactForm');
if(quickForm){
    quickForm.addEventListener('submit', function(e){
        e.preventDefault();
        // Reuse validation from main script.js
        if(typeof validateQuickForm === 'function'){
            validateQuickForm();
        }
    });
}