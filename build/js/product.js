<<<<<<< HEAD
import r from"./productData.js";import c from"./productDetails.js";import{getParam as d}from"./utils.js";const t=d("product"),o=new r("tents"),s=new c(t,o);s.init(),console.log(o.findProductById(t));
=======
import s from"./productData.js";import{getParam as a}from"./utils.js";const d=new s("tents"),i=a("product");console.log(d.findProductById(i));let e=[];function u(t){if(t.ok)return t.json();throw new Error("Bad Response")}function n(t,o){localStorage.setItem(t,JSON.stringify(o))}function m(){fetch("../json/tents.json").then(u).then(t=>{e=t})}var c=[];function l(t){console.log("clicked");const o=e.find(r=>r.Id===t.target.dataset.id);n("so-cart",o),console.log(o),c.push(o),n("so-cart",c)}document.getElementById("addToCart").addEventListener("click",l);
>>>>>>> 478d4ee478915d46859f0274e279cccc0e4efb10
