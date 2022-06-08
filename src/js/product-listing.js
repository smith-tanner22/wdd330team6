import ProductListing from './productList';
import ExternalServices from './ExternalServices';
import {
  loadHeaderFooter,
  getParam
} from './utils';


const category = getParam('category');

const dataSource = new ExternalServices();
// then get the element we want the product list to render in
const listElement = document.querySelector('.product-list');
console.log(category);
const cateogyTitle = document.querySelector('.categoryTitle').innerHTML = category;
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductListing(category, dataSource, listElement);

// finally call the init method to show our products
myList.init();
console.log(myList);
// const head = document.querySelector('.product-list');
// const productData = new ProductData('tents');
// const productList = new ProductListing('tents', productData, head);
// const alert = new Alert();
loadHeaderFooter();

// console.table(productList);
// console.table(productData);

// productList.init();
// console.table(productList);
// console.table(productData);
