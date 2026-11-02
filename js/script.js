document.addEventListener('DOMContentLoaded', function() {
  const search=document.getElementById('productSearch');
  if(search){
    search.addEventListener('input',function(){
      const q=this.value.toLowerCase().trim(); let count=0;
      document.querySelectorAll('.product-card').forEach(card=>{
        const show=(card.textContent.toLowerCase()+card.querySelector('img').alt.toLowerCase()).includes(q);
        card.style.display=show?'block':'none'; if(show) count++;
      });
      const m=document.getElementById('searchMessage');
      if(m) m.textContent=q?`Found ${count} results for "${q}"`:'Showing all products';
    });
  }

  const mapDiv=document.getElementById('map');
  if(mapDiv && typeof L !== 'undefined'){
    try{
      const map=L.map('map').setView([-25.993,28.112],15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap'}).addTo(map);
      L.marker([-25.993,28.112]).addTo(map).bindPopup("<b>Jo's Bakery</b><br>123 Main Road<br>Rosebank 0181<br>Blue door 8a").openPopup();
      L.marker([-25.997,28.115]).addTo(map).bindPopup("<b>Rosebank College</b><br>5 min walk");
      L.polyline([[-25.993,28.112],[-25.997,28.115]],{color:'#1565C0',dashArray:'10,10',weight:4}).addTo(map);
      setTimeout(()=>map.invalidateSize(),800);
    }catch(e){}
  }

  try{
    const lb=document.createElement('div'); lb.id='lightbox';
    lb.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.92);display:none;justify-content:center;align-items:center;z-index:9999;flex-direction:column;';
    lb.innerHTML='<img id="lightboxImg" style="max-width:90%;max-height:75%;border:5px solid white;border-radius:12px;"><p id="lightboxCaption" style="color:white;margin-top:10px;text-align:center;"></p>';
    document.body.appendChild(lb); lb.addEventListener('click',()=>lb.style.display='none');
    document.querySelectorAll('.product-card img').forEach(img=>{
      img.style.cursor='zoom-in';
      img.addEventListener('click',function(){
        document.getElementById('lightboxImg').src=this.src;
        document.getElementById('lightboxCaption').textContent=this.alt;
        lb.style.display='flex';
      });
    });
  }catch(e){}
});