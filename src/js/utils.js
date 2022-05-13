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
