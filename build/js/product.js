let products=[];function convertToJson(t){if(t.ok)return t.json();throw new Error("Bad Response")}function setLocalStorage(t,o){localStorage.setItem(t,JSON.stringify(o))}function getProductsData(){fetch("../json/tents.json").then(convertToJson).then(t=>{products=t})}function addToCart(t){console.log("clicked");const o=products.find(e=>e.Id===t.target.dataset.id);console.log(o),setLocalStorage("so-cart",o)}getProductsData(),document.getElementById("addToCart").addEventListener("click",addToCart);
