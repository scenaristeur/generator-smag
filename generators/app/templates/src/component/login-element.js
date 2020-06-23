import { LitElement, html } from 'lit-element';

class LoginElement extends LitElement {

  static get properties() {
    return {
      webId: {type: String},
    };
  }

  constructor() {
    super();
    this.webId = "nobody"
  }

  render(){
    return html`
    <button>Login</button>
    <button>Logout</button>
    ${this.webId}
    `;
  }

}

customElements.define('login-element', LoginElement);
