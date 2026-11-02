// Jo's Bakery - Search.js - 123 Main Road Rosebank Pretoria 0181 - EST 2019
// Phone 012 345 6789 - orders@jobakery.co.za - Coordinates -25.993,28.112
// Products: Cakes R250-R650 Banana R280 Cupcakes R20 Bread R25 Pies R35 Cookies R15

document.addEventListener('DOMContentLoaded', function(){

    // ===== 1. PRODUCT SEARCH - For services.html / product.html =====
    const productSearch = document.getElementById('productSearch');
    const productList = document.getElementById('productList');
    const searchMessage = document.getElementById('searchMessage');
    const noResults = document.getElementById('noResults');

    if(productSearch && productList){
        productSearch.addEventListener('input', function(){
            const term = this.value.toLowerCase().trim();
            const cards = productList.querySelectorAll('.product-card');
            let foundCount = 0;

            cards.forEach(card => {
                // Search in text + alt text + data attributes
                const cardText = card.textContent.toLowerCase();
                const imgAlt = card.querySelector('img')?.alt.toLowerCase() || '';
                const combined = cardText + ' ' + imgAlt;
                
                // Keywords mapping - so user types "bread" finds "bread"
                const keywords = {
                    'cake': ['cake', 'birthday', 'wedding', 'r250', 'r450', 'r650', 'chocolate', 'vanilla'],
                    'banana': ['banana', 'r280', 'gogo', 'walnut', 'slice r30'],
                    'cupcake': ['cupcake', 'r20', 'box 6 r110', 'icing'],
                    'bread': ['bread', 'r25', 'white', 'brown', 'baked 3am', 'sold out 10am', 'loaf'],
                    'pie': ['pie', 'r35', 'family r120', 'chicken', 'beef', 'vegetable', 'flaky'],
                    'cookie': ['cookie', 'r15', 'box r80', 'chocolate chip', 'oatmeal'],
                    'never': ['never too late', 'motivational', 'r450', 'custom']
                };

                let matches = combined.includes(term);

                // Check keyword synonyms
                if(!matches && term){
                    for(let key in keywords){
                        if(term.includes(key)){
                            for(let syn of keywords[key]){
                                if(combined.includes(syn)){
                                    matches = true;
                                    break;
                                }
                            }
                        }
                    }
                }

                // Show all if empty
                if(term === '') matches = true;

                card.style.display = matches ? 'block' : 'none';
                if(matches) foundCount++;
            });

            // Update messages - accessibility live region
            if(searchMessage){
                if(term === ''){
                    searchMessage.textContent = `Showing all ${cards.length} products - Jo's Bakery 123 Main Road Rosebank 0181 - Cakes R250-R650 Bread R25 Banana R280 Cupcakes R20 Pies R35 Cookies R15`;
                } else {
                    searchMessage.textContent = `${foundCount} products found for "${term}" - Jo's Bakery Rosebank 0181 - Phone 012 345 6789`;
                }
                searchMessage.setAttribute('aria-live', 'polite');
            }

            if(noResults){
                if(foundCount === 0 && term !== ''){
                    noResults.style.display = 'block';
                    noResults.textContent = `No products found for "${term}" - Try: cakes, banana, cupcakes, bread, pies, cookies, R25, R250, R450 - Jo's Bakery 123 Main Road Rosebank 0181`;
                } else {
                    noResults.style.display = 'none';
                }
            }
        });

        // Initial message
        if(searchMessage){
            const totalCards = productList.querySelectorAll('.product-card').length;
            searchMessage.textContent = `Showing all ${totalCards} products - Jo's Bakery 123 Main Road Rosebank 0181 - Blue door 8a - Bread baked 3am daily`;
        }
    }

    // ===== 2. SITE-WIDE SEARCH - For header search =====
    const siteSearch = document.getElementById('siteSearch');
    const siteSearchBtn = document.getElementById('siteSearchBtn');

    function doSiteSearch(){
        if(!siteSearch) return;
        const term = siteSearch.value.toLowerCase().trim();
        if(!term){
            alert('Enter search term - Try cakes R250, bread R25, banana R280, contact, 123 Main Road Rosebank - Jo\'s Bakery');
            return;
        }

        // Redirect to products page with search
        if(window.location.pathname.includes('services.html') || window.location.pathname.includes('product')){
            // Already on product page - trigger product search
            if(productSearch){
                productSearch.value = term;
                productSearch.dispatchEvent(new Event('input'));
                productSearch.focus();
                window.scrollTo({ top: productList.offsetTop - 100, behavior: 'smooth' });
            }
        } else {
            // Redirect to services with query
            window.location.href = `services.html?search=${encodeURIComponent(term)}#productList`;
        }
    }

    if(siteSearchBtn){
        siteSearchBtn.addEventListener('click', doSiteSearch);
    }

    if(siteSearch){
        siteSearch.addEventListener('keydown', function(e){
            if(e.key === 'Enter'){
                e.preventDefault();
                doSiteSearch();
            }
        });

        // Auto search if ?search= in URL
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get('search');
        if(searchParam && productSearch){
            productSearch.value = searchParam;
            productSearch.dispatchEvent(new Event('input'));
        }
    }

    // ===== 3. FILTER BY PRICE - Optional buttons =====
    const priceFilters = document.querySelectorAll('[data-price-filter]');
    priceFilters.forEach(btn => {
        btn.addEventListener('click', function(){
            const filter = this.getAttribute('data-price-filter');
            if(productSearch){
                productSearch.value = filter;
                productSearch.dispatchEvent(new Event('input'));
            }
            // Highlight active
            priceFilters.forEach(b => b.style.background = '');
            this.style.background = '#c49a3c';
        });
    });

    // ===== 4. VOICE SEARCH - Optional enhancement =====
    window.startVoiceSearch = function(){
        if('webkitSpeechRecognition' in window || 'SpeechRecognition' in window){
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-ZA';
            recognition.onresult = function(event){
                const transcript = event.results[0][0].transcript;
                if(productSearch){
                    productSearch.value = transcript;
                    productSearch.dispatchEvent(new Event('input'));
                } else if(siteSearch){
                    siteSearch.value = transcript;
                    doSiteSearch();
                }
            };
            recognition.start();
            alert('Listening... Say cakes, bread, banana, cupcakes - Jo\'s Bakery Rosebank 0181');
        } else {
            alert('Voice search not supported - Type cakes, bread R25, banana R280 - Jo\'s Bakery 123 Main Road Rosebank 0181 - Phone 012 345 6789');
        }
    };
});