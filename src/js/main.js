import ProductListing from './productList';
import ProductData from './productData';
const head = document.querySelector('.product-list');
const productData = new ProductData('tents');
const productList = new ProductListing('tents', productData, head);

productList.init();
console.table(productList);
console.table(productData);
