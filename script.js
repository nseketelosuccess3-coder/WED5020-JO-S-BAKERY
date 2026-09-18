// Products for services page - search + filter
const products=[
{name:"Fresh Bread Loaf",cat:"bread",price:"R25"},
{name:"Birthday Cake Custom",cat:"cake",price:"From R350"},
{name:"Pastries Box 6",cat:"pastries",price:"R120"},
{name:"Sourdough",cat:"bread",price:"R35"},
{name:"Cupcakes 12",cat:"cake",price:"R180"}
];
function loadProducts(list=products){
const el=document.getElementById('product-list');
if(!el)return;
el.innerHTML=list.map(p=>`<div class="card" style="margin:0.5rem 0"><b>${p.name}</b> - ${p.price} <small>(${p.cat})</small></div>`).join('');
}
function filterProducts(){
let q=document.getElementById('search').value.toLowerCase();
loadProducts(products.filter(p=>p.name.toLowerCase().includes(q)||p.cat.includes(q)));
}
loadProducts();

// Form - enquiries
const enquiryForm=document.getElementById('enquiryForm');
if(enquiryForm){
enquiryForm.addEventListener('submit',async(e)=>{
e.preventDefault();
let err=document.getElementById('formError'),suc=document.getElementById('formSuccess');
err.innerText="";suc.innerText="";
if(!e.target.checkValidity()){err.innerText="Please fix: name 3+ chars, 10 digit phone, message 20+ chars";return;}
try{
let res=await fetch(e.target.action,{method:'POST',body:new FormData(e.target),headers:{'Accept':'application/json'}});
if(res.ok)suc.innerText="Thank you! Bread R25, Cakes from R350. Available Mon-Sat 7am-6pm. We will reply within 2 hours.";
}catch{
suc.innerText="Thank you! (Demo mode) Cost R25-R350, Available 7am-6pm daily. Check email info@josbakery.co.za";
}
e.target.reset();
});
}

// Form - contact compiles email
const contactForm=document.getElementById('contactForm');
if(contactForm){
contactForm.addEventListener('submit',(e)=>{
e.preventDefault();
let name=e.target.name.value,msg=e.target.message.value;
window.location.href=`mailto:info@josbakery.co.za?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg)}`;
document.getElementById('contactMsg').innerText="Opening email to info@josbakery.co.za - Email compiled!";
});
}