function getLocalStorage(t){return JSON.parse(localStorage.getItem(t))}const items=[];function getCartContents(){let t="";const e=getLocalStorage("so-cart");if(console.log(e),e){const a=e.map(r=>renderCartItem(r));document.querySelector(".product-list").innerHTML=a.join("")}}function renderCartItem(t){const e=`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Image}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class='cart-card__price'>$${t.FinalPrice}</p>
</li>`;return e}getCartContents();function hideTotal(){const t=getLocalStorage("so-cart");console.log("this is hidee",t);var e=document.querySelector(".cart-footer");console.log(e),t?e.style.visibility="visible":e.style.visibility="hidden",e.innerHTML="Total $"+addTotal()}function addTotal(){const t=getLocalStorage("so-cart");var e=0;for(let a=0;a<Object.keys(t).length;a++)e=e+t[a].FinalPrice;return e}hideTotal();
