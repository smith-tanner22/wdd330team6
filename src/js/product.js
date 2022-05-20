import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";

import {
  getParam
} from "./utils.js";
import Alert from "./alert.js";

const productId = getParam("product");
const dataSource = new ProductData("tents");
const product = new ProductDetails(productId, dataSource);
console.log("this", dataSource)
console.log(product)
product.init();
