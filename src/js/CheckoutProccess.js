import {
  getLocalStorage,
  setLocalStorage,
  addTotal,
} from './utils.js';

const baseURL = "http://157.201.228.93:2992/checkout";

function packageItems(items) {
  // convert the list of products from localStorage to the simpler form required for the checkout process. Array.map would be perfect for this.

}


export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0.00;
    this.shipping = 23.00;
    this.tax = 0.06;
    this.orderTotal = 0.00;
    this.subtotal = 0.00;
  }
  init() {
    this.list = getLocalStorage(this.key);
    this.calculateItemSummary();
  }
  calculateItemSummary() {
    // calculate and display the total amount of the items in the cart, and the number of items.
    this.subtotal = parseFloat(addTotal());

    return this.subtotal
  }


  calculateOrdertotal() {
    this.calculateItemSummary()
    // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
    this.total = this.subtotal + this.shipping + (this.subtotal * this.tax)

    this.list = getLocalStorage('so-cart');

    this.displayOrderTotals();
  }
  displayOrderTotals() {
    // once the totals are all calculated display them in the order summary page

    const tax = document.getElementById("tax").innerHTML = "$" + (this.subtotal * this.tax).toFixed(2)
    const shipping = document.getElementById("shipping").innerHTML = "$" + this.shipping
    const subtotal = document.getElementById("subtotal").innerHTML = "$" + this.subtotal
    document.getElementById("Ordertotal").innerHTML = "$" + this.total.toFixed(2)

  }
  async checkout() {
    try {
      const formData = this.formDataToJSON(this.outputSelector)


      // build the object
      const object2 = {
        "orderDate": Date.now(),
        "fname": formData.fname,
        "lname": formData.lname,
        "street": formData.street,
        "city": formData.city,
        "state": formData.state,
        "zip": formData.zip,
        "cardNumber": formData.cardNumber,
        "expiration": formData.expiration,
        "code": formData.code,
        "items": this.list,
        "orderTotal": formData.orderTotal,
        "shipping": formData.shipping,
        "tax": formData.tax
      }
      fetch(baseURL, {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(object2),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });




    } catch (err) {
      console.log(err)
    }
    // build the data object from the calculated fields, the items in the cart, and the information entered into the form

    // call the checkout method in our ExternalServices module and send it our data object.
  }
  // takes a form element and returns an object where the key is the "name" of the form input.
  formDataToJSON(formElement) {
    const formData = new FormData(formElement),
      convertedJSON = {};

    formData.forEach(function (value, key) {
      convertedJSON[key] = value;
    });
    return convertedJSON;
  }

}
