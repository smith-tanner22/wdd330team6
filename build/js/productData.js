<<<<<<< HEAD
var d=(s,t,o)=>new Promise((e,c)=>{var h=n=>{try{r(o.next(n))}catch(a){c(a)}},i=n=>{try{r(o.throw(n))}catch(a){c(a)}},r=n=>n.done?e(n.value):Promise.resolve(n.value).then(h,i);r((o=o.apply(s,t)).next())});function u(s){if(s.ok)return s.json();throw new Error("Bad Response")}export default class f{constructor(t){this.category=t,this.path=`../json/${this.category}.json`}getData(){fetch("../json/tents.json").then(u).then(t=>t)}findProductById(t){return d(this,null,function*(){const o=yield this.getData();return o.find(e=>e.Id===t)})}}
=======
var h=(r,t,n)=>new Promise((e,c)=>{var i=o=>{try{s(n.next(o))}catch(a){c(a)}},d=o=>{try{s(n.throw(o))}catch(a){c(a)}},s=o=>o.done?e(o.value):Promise.resolve(o.value).then(i,d);s((n=n.apply(r,t)).next())});function u(r){if(r.ok)return r.json();throw new Error("Bad Response")}export default class f{constructor(t){this.category=t,this.path=`../json/${this.category}.json`}getData(){return fetch(this.path).then(u).then(t=>t)}findProductById(t){return h(this,null,function*(){const n=yield this.getData();return n.find(e=>e.Id===t)})}}
>>>>>>> 478d4ee478915d46859f0274e279cccc0e4efb10
