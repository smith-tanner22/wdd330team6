import {
  loadHeaderFooter
} from './utils';
import  
  CheckoutProcess
 from './CheckoutProccess.js'

document.querySelector('#place_order')
  .addEventListener('click', (e) => {
    e.preventDefault();
    var myForm = document.forms[0];
    const myCheckout = new CheckoutProcess('so-cart',myForm);
    // var chk_status = myForm.checkValidity();
    // myForm.reportValidity();
    // if(chk_status) 
      myCheckout.checkout();
  });
loadHeaderFooter();
