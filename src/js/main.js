import ProductListing from './productList';
import ProductData from './productData';
import Alert from './alert';
import {
  loadHeaderFooter
} from './utils';
const head = document.querySelector('.product-list');
const productData = new ProductData('tents');
const productList = new ProductListing('tents', productData, head);
const alert = new Alert('divider');
loadHeaderFooter();

// console.table(productList);
// console.table(productData);

productList.init();
// console.table(productList);
// console.table(productData);
