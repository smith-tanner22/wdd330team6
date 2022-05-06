
import ProductData from './productData.js';
import { getParam } from './utils.js';
const dataSource = new ProductData('tents');

const productId = getParam('product');

console.log(dataSource.findProductById(productId));
                
let products = [];

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// get tents data
function getProductsData() {
  fetch('../json/tents.json')
    .then(convertToJson)
    .then((data) => {
      products = data;
    });
}
// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch('../json/tents.json').then(convertToJson);
// }

var items = [];
// add to cart button event handler
function addToCart(e) {
  console.log('clicked')
  const product = products.find((item) => item.Id === e.target.dataset.id);

  setLocalStorage('so-cart', product);
  console.log(product);
  items.push(product);
  setLocalStorage('so-cart', items)
}
// add listener to Add to Cart button
document.getElementById('addToCart').addEventListener('click', addToCart);


