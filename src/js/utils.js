// wrapper for querySelector...returns matching element
export function qs(selector) {
  return document.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

var items = [];
// save data to local storage
export function setLocalStorage(key, data) {
  var item = localStorage.getItem(key);
  // add here

  if (item == null) {
    items.push(data);
    localStorage.setItem(key, JSON.stringify(items));
  } else {
    var stored = JSON.parse(localStorage.getItem(key));
    stored.push(data);
    localStorage.setItem(key, JSON.stringify(stored));
    animateSvg();
    //document.getElementById('addToCart').addEventListener('click', function () {
    // console.log('its in the function');
    // document.querySelector('.cart').classList.toggle('.rotate');
    //});
  }
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener('touchend', (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener('click', callback);
}

export function getParam(param) {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

function animateSvg() {
  const cart = document.querySelector('.cart');
  cart.style.transform = 'rotate(-360deg)';
  cart.style.transition = 'all .1s linear';
  // cart.style.transform = 'rotate(10deg)';
  // cart.style.transition = 'all .3s linear';
}
