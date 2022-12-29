import { LitElement, html, css } from 'lit';


//Este es el componente hijo

export class LoginLit extends LitElement {
    
    static get properties (){
        return{
            email: { type: String },
            password: { type: String }
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
           <div class="container">
                <input id='email' type="email" placeholder="email"/>
                <input id='password' type="password" placeholder="password"/>

                <button @click = ${ this._login }>Inicia Sesion</button>
           </div>
        `;
    }

 /* Esto es lo funcional segun el videp
       _login(){
        const email = this.shadowRoot.querySelector('#email').value
        const password = this.shadowRoot.querySelector('#password').value

        alert (email + password)
    } */


    //Esto yo lo diseñe agregando email yt pass como propiedades y asignandolas
    _login(){
        this.email = this.shadowRoot.querySelector('#email').value
        this.password = this.shadowRoot.querySelector('#password').value

        alert (`${this.email} ${ this.password }`)

        if(!!this.email && this.password){
            this.dispatchEvent(new CustomEvent('logon', {
                detail: { login: true },//esta linea no es necesaria, si la borro funciona igual
                bubbles: true, composed: true
            }))
        }
    } 

    
}
customElements.define('login-lit', LoginLit);
