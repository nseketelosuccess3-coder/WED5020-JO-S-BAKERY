document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('product-search');
  const searchMessage = document.getElementById('searchMessage');
  const productCards = document.querySelectorAll('.product-card');

  if (!searchInput) return;

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    let visibleCount = 0;

    productCards.forEach(card => {
      const name = card.getAttribute('data-name') ? card.getAttribute('data-name').toLowerCase() : '';
      const price = card.getAttribute('data-price') ? card.getAttribute('data-price').toLowerCase() : '';
      const text = card.textContent.toLowerCase();

      const combined = name + ' ' + price + ' ' + text;

      if (combined.includes(query)) {
        card.style.display = 'block';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (searchMessage) {
      if (query === '') {
        searchMessage.textContent = '';
        searchMessage.style.display = 'none';
      } else if (visibleCount === 0) {
        searchMessage.textContent = `No products found for "${query}" - Jo's Bakery 123 Main Road Rosebank 0181 - Try R250 R450 R650 R280 R25 R20 R35 - Blue door 8a`;
        searchMessage.style.display = 'block';
        searchMessage.style.background = '#fff3cd';
        searchMessage.style.padding = '10px';
        searchMessage.style.borderRadius = '5px';
        searchMessage.style.border = '1px solid #ffeaa7';
      } else {
        searchMessage.textContent = `Found ${visibleCount} product(s) for "${query}" - Jo's Bakery Rosebank 0181 - Cakes R250-R650 Banana R280 Bread R25`;
        searchMessage.style.display = 'block';
        searchMessage.style.background = '#e8f5e9';
        searchMessage.style.padding = '10px';
        searchMessage.style.borderRadius = '5px';
        searchMessage.style.border = '1px solid #c8e6c9';
      }
    }
  });

  // Clear search on ESC
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      this.value = '';
      productCards.forEach(card => card.style.display = 'block');
      if (searchMessage) {
        searchMessage.textContent = '';
        searchMessage.style.display = 'none';
      }
    }
  });
});