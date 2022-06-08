function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("No alerts");
  }
}

export default class Alert {
  constructor() {
    this.outputElement = document.getElementsByClassName("divider");
    this.path = '../json/alerts.json';
    this.init();
  }
  getAlerts() {
      return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }

  async init() {
      const alerts = await this.getAlerts();
      this.outputElement.innerHTML = this.alertTemplate();
      this.renderAlert(alerts, this.alertTemplate, ".alertList");
  }

  alertTemplate(alert){
    return `<section class="alertList">
      <p>${alert}</p>
    </section>`;
  }

  renderAlert(alerts, template) {
    const element = document.querySelector(".divider");
    console.log(alerts[0].message);
    element.innerHTML = " ";
    const htmlString = alerts.map((item) => template(item.message));
    element.innerHTML = htmlString.join("");
  }
  
}