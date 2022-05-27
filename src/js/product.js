import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";

import {
  getParam,
  loadHeaderFooter
} from "./utils.js";
import Alert from "./alert.js";

const productId = getParam("product");

const dataSource = new ProductData();
const product = new ProductDetails(productId, dataSource);


product.init();

loadHeaderFooter();
