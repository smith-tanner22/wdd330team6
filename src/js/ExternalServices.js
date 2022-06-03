const baseURL = 'http://157.201.228.93:2992/'

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ExternalServices {
  constructor() {

    //this.category = category;
    // this.path = `../json/${this.category}.json`;
  }
  getData(category) {

    return fetch(baseURL + `products/search/${category}`)
      .then(convertToJson).then((data) => data.Result);
    // return fetch(this.path)
    //   .then(convertToJson)
    //   .then((data) => data);
  }

  async findProductById(id) {
    // const products = await this.getData(id);
    // return products.find((item) => item.Id === id);
    return await fetch(baseURL + `product/${id}`)
      .then(convertToJson).then((data) => data.Result);


    // setLocalStorage(`so-cart${product.Id}`, product);
  }
  checkout(payload) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
    fetch(baseURL, options);
  }
}

///////////////////////////////////

// let products = [];
// var localStorageitems = [];

// function setLocalStorage(key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// }

// // get tents data
// function getProductsData() {
//   fetch("../json/tents.json")
//     .then(convertToJson)
//     .then((data) => {
//       products = data;
//     });
// }

// function addToCart(e) {
//   console.log("clicked");
//   const product = products.find((item) => item.Id === e.target.dataset.id);
//   setLocalStorage(`so-cart${product.Id}`, product);
// }

// getProductsData();
// // add listener to Add to Cart button
// document.getElementById("addToCart").addEventListener("click", addToCart);
