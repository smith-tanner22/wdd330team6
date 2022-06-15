const baseURL="http://157.201.228.93:2992/login"
import ExternalServices from './ExternalServices.js';


export default class Admin {
    constructor() {
        // this.mainElement = document.querySelector(outputSelector);
        this.token = null;
        this.services = new ExternalServices();
    }
    
    async login() {
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

    showlogin() {
        const loginForm = `<form id="loginForm">
        <div id="login">
          <h2>Login</h2>
          <input type="email" placeholder="example@website.com">
          <input type="password" placeholder="Password">
          <button type="submit" id="loginButton">Login</button>
        </div>
      </form>`;
      document.getElementById("loginContainer").innerHTML = loginForm;
      document.querySelector("#loginButton").addEventListener("click", (e) => {
          e.preventDefault();
          console.log("admin");
      })
    }
}