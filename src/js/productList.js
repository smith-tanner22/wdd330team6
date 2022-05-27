export default class ProductListing {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;

  }
  async init() {
    const list = await this.dataSource.getData(this.category);
    // render list
    console.log(this.dataSource);
    this.renderList(list);
  }

  renderList(list) {
    const template = document.getElementById('product-card-template');
    list.forEach(product => {
      const clone = template.content.cloneNode(true);
      // insert the actual details of the current product into the template
      const hydratedTemplate = this.prepareTemplate(clone, product);
      console.log(hydratedTemplate);
      this.listElement.appendChild(hydratedTemplate);
    })
  }
  prepareTemplate(template, product) {
    const discounted = product.SuggestedRetailPrice - product.FinalPrice;
    const formattedDiscount = (discounted).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });


    template.querySelector('.cardImage').src = product.Images.PrimaryMedium
    template.querySelector('a').href += product.Id;
    template.querySelector('.card__brand').innerHTML = product.Brand.Name;
    template.querySelector('.card__name').innerHTML = product.Name;
    template.querySelector('.product-card__price').innerHTML = product.FinalPrice;
    template.querySelector('.product_discount_price').innerHTML = `You Save ${formattedDiscount}`;


    // fill in the rest of the data here...
    console.log(product);
    console.log(template);
    //template.querySelector('h3').innerHTML += 
    return template;
  }
}
