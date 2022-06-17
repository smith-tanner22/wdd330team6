import ProductListing from './productList';
import ExternalServices from './ExternalServices';
import Alert from './alert';
import {
  loadHeaderFooter
} from './utils';
const head = document.querySelector('.product-list');
const productData = new ExternalServices('tents');
const productList = new ProductListing('tents', productData, head);
const alert = new Alert('divider');
loadHeaderFooter();
productList.init();

setTimeout(() => {
var temp = JSON.parse(localStorage["so-cart"]);
const count = Object.keys(temp).length
const cartCount= document.getElementById("lblCartCount").innerHTML = count 

}, "1000")


