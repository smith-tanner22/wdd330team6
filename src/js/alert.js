function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("No alerts");
    }
  }

export default class Alert {
    constructor() {
        this.path = '../json/alerts.json';
        this.init();
    }
    getAlerts() {
        return fetch(this.path)
        .then(convertToJson)
        .then((data) => data);
    }

    async init() {
        this.outputElement.innerHTML = this.alertTemplate;
        const alerts = await this.getAlerts();
        this.renderAlert(alerts, outputElement.innerHTML, ".alertList");
    }

    alertTemplate(){
      return `<section class="alertList">
        <p></p>
      </section>`;
    }

    renderAlert(alerts, template, outputId) {
      
    }
    
}