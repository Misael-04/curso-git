import { LitElement, html, css } from 'lit';
import './login-lit'

//Esta es la aplicacion principal, o componente padre

export class LoginApp extends LitElement {
   
    static get properties (){
        return{
            succes: { type: Boolean }
        }
    }

    static get styles () {
        return css`
        :host {
            display: block;
        }
    `
}

    render() {
        return html`
            <h1>Login simple con lit element</h1>
            ${ this.succes ?
                    html `<h1>Welcome</h1>`
                :   html `<login-lit @logon='${ this._hiddenLogin }'></login-lit>`
            }
          
        `;
    }

    _hiddenLogin(){
        this.succes = true
    }
}
customElements.define('login-app', LoginApp);


