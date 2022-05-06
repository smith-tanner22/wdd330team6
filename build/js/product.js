import r from"./productData.js";import c from"./productDetails.js";import{getParam as d}from"./utils.js";const t=d("product"),o=new r("tents"),s=new c(t,o);s.init(),console.log(o.findProductById(t));
