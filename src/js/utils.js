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

  if (item == null) {
    items.push(data);
    localStorage.setItem(key, JSON.stringify(items));
  } else {
    var stored = JSON.parse(localStorage.getItem(key));
    stored.push(data);
    localStorage.setItem(key, JSON.stringify(stored));
    animateSvg();
  }
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

export function renderWithTemplate(parent, template, data, callback) {
  // const template = document.getElementById('');
  const clone = template.content.cloneNode(true);
  if(callback) {
    clone = callback(clone, data);
  }
  parent.appendChild(clone);
  // insert the actual details of the current product into the template
  // const hydratedTemplate = this.prepareTemplate(clone, data);
  // console.log(hydratedTemplate);
  // this.listElement.appendChild(hydratedTemplate);
}

function convertToText(res) {
  if (res.ok) {
    return res.text();
  } else {
    throw new Error("No path");
  }
}

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}

export async function loadHeaderFooter() {
  const header = loadTemplate('../partials/header.html');
  const footer = loadTemplate('../partials/footer.html');
  const headerElement = document.getElementById('main-header');
  const footerElement = document.getElementById('footer-header');
  renderWithTemplate(headerElement, header);
  renderWithTemplate(footerElement, footer);
} 
function animateSvg() {
  const cart = document.querySelector('.cart');
  cart.style.transform = 'rotate(-360deg)';
  cart.style.transition = 'all .5s linear';
  // cart.style.transform = 'rotate(10deg)';
  // cart.style.transition = 'all .3s linear';
}
