function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Bad Response');
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }

  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);

    // setLocalStorage(`so-cart${product.Id}`, product);
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
