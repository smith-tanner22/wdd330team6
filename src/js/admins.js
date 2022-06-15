import { loadHeaderFooter } from './utils';
import Admin from "./Admin.js";
loadHeaderFooter();
const loadLogin = new Admin();
loadLogin.showlogin();
console.log("admins");