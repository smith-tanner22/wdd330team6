const baseURL = "http://157.201.228.93:2992/login"
const baseURL2 = "http://157.201.228.93:2992/orders"
import ExternalServices from './ExternalServices.js';


export default class Admin {
  constructor() {
    this.mainElement = null;
    this.token = null;
    this.services = new ExternalServices();
  }

  async login() {
    //const formData = this.formDataToJSON(this.mainElement);
    console.log(this.mainElement);
    //console.log(formData);
    console.log("login");
    // try {
    //     this.token = await this.services.loginRequest(creds);
    //     next()
    //   } 
    //   catch(err) {
    //     // remember this from before?
    //     alertMessage(err.message.message);
    //   }
  }

  getOrders() {
    fetch(baseURL2, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + this.token
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  showlogin() {
    const loginForm = `<form id="loginForm">
        <div id="login">
          <h2>Login</h2>
          <input name='email' type="email" value="user1@email.com" >
          <input name='password' type="password" value="user1">
          <button type="submit" id="loginButton">Login</button>
        </div>
      </form>`;
    document.getElementById("loginContainer").innerHTML = loginForm;
    document.querySelector("#loginButton").addEventListener("click", (e) => {
      e.preventDefault();
      console.log("admin");
      this.mainElement = document.querySelector('#loginForm');
      const formData = this.formDataToJSON(this.mainElement);
      console.log(formData);

      const object1 = {
        "email": formData.email,
        "password": formData.password
      }

      fetch(baseURL, {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(object1),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          this.token = data.accessToken;
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    })
    setTimeout(() => {
      this.getOrders()
    }, '3000');

  }

  formDataToJSON(formElement) {
    const formData = new FormData(formElement),
      convertedJSON = {};

    formData.forEach(function (value, key) {
      convertedJSON[key] = value;
    });
    return convertedJSON;
  }
}
