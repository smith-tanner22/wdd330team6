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

// console.table(productList);
// console.table(productData);

productList.init();
// console.table(productList);
// console.table(productData);
