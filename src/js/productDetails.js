import {
  setLocalStorage
} from "./utils.js";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    document.querySelector("main").innerHTML = this.renderProductDetails();
    // add listener to Add to Cart button
    const element = document.getElementById("addToCart")
    element.addEventListener("click", this.addToCart.bind(this));
  }

  addToCart() {
    setLocalStorage("so-cart", this.product);
  }

  renderProductDetails() {
    const discountedPrice = this.product.SuggestedRetailPrice - this.product.FinalPrice;
    const formattedDiscount = (discountedPrice).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    if (window.innerWidth < 500) {
      var picture = this.product.Images.PrimaryMedium;
    } else {
      var picture = this.product.Images.PrimaryLarge;
    }
    return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${picture}"
      ${console.log(this.product)}

      alt="${this.product.NameWithoutBrand}"
    />
    <p>Orginal: $${this.product.SuggestedRetailPrice}</p>
    <p class="product_discount_price">You save: ${formattedDiscount}</p>
    <p class="product-card__price">$${this.product.FinalPrice}</p>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    </div></section>`;
  }
}
