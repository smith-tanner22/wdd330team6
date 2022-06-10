import {
  loadHeaderFooter
} from './utils';

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Remove the element from the cart
const items = [];

function getCartContents() {
  let markup = '';

  const cartItems = getLocalStorage('so-cart');

  if (cartItems) {
    console.log(cartItems);
    let ids = [];
    cartItems.forEach(item => {
      ids.push(item.Id);
    });

    console.log(ids);
    const htmlItems = cartItems.map((item, index) => renderCartItem(item, index));
    document.querySelector('.product-list').innerHTML = htmlItems.join('');
  } else {

    document.querySelector('.product-list').innerHTML = 'Empty'
  }
  // document.querySelector('.product-list').innerHTML = renderCartItem(cartItems);
}

function renderCartItem(item, index) {

  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item[index].Images.PrimaryMedium}"
      alt="${item[index].Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item[index].Name}</h2>
  </a>
  <p class="cart-card__color">${item[index].Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: <span id="cartQuanitity">1</span></p>
  <p class='cart-card__price'>$${item[index].FinalPrice}</p>
  <button class='btn-danger btn-danger${index}'value=${index}>Remove From Cart</button>
</li>`;
  return newItem;
}


function renderCartEmptyItem() {
  const newItem = `<li class="cart-card divider">
  <p class='cart-card__price'>Empty Cart</p>

</li>`;
  return newItem;
}

getCartContents();

/*****************************Added******************************************* */

function hideTotal() {
  const Items = getLocalStorage('so-cart');

  var totalElement = document.querySelector('.cart-footer');
  console.log(totalElement);
  if (Items) {
    totalElement.style.visibility = 'visible';
  } else {
    totalElement.style.visibility = 'hidden';
  }
  totalElement.innerHTML = 'Total $' + addTotal();
}

function addTotal() {
  const Items = getLocalStorage('so-cart');
  console.log(Items);
  if (Items) {
    var total = 0;
    for (let index = 0; index < Object.keys(Items).length; index++) {
      total = total + Items[index][index]['FinalPrice'];
    }
    return (total.toFixed(2));

  }
}



function removeItem() {
  const Items = getLocalStorage('so-cart');
  if (Items) {
    for (let index = 0; index < Object.keys(Items).length; index++) {
      const element = document.querySelector(`.btn-danger${index}`)
      element.addEventListener('click', () => {
        console.log(element.value)
        Items.splice(index, 1);
        localStorage.setItem('so-cart', JSON.stringify(Items));
        location.reload();
      })
    }

  }



}
removeItem();
hideTotal();
loadHeaderFooter();
