import {
  loadHeaderFooter
} from './utils';
import Admin from "./Admin.js";
loadHeaderFooter();
const loadLogin = new Admin();
loadLogin.showlogin();
loadLogin.login();
console.log("admins");
