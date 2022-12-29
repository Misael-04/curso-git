        import { LitElement, html, css } from 'lit';



        export class TestApp extends LitElement {
          static get properties() {
            return {
              data: { type: Object },
              name: { type: String },
              pokemon: { type: String },
              show:{ type: Boolean }
            };
          }

          static get styles() {
            return css`
              div{
                width: 200px;
                display: flex;
              }

              button{
                width: 50px;
              }

              h4{
                margin: auto;
              }
              button{
                width: 130px;
              }

              .not_show{
                display:none;
              }

              .show{
                display: block;
              }
            `;
          }

          
          constructor() {
            super()
            this.data = {},
            this.pokemon = '',
            this.name = ''
            this.show = true
            
          }



          connectedCallback() {
            super.connectedCallback();
            console.log("bienvenido")
          }

          changeName(event) {
            event.preventDefault()
            const input = event.target;
            this.pokemon = input.value;
          }

          fetchData(){
            this.show = true
             fetch(`https://pokeapi.co/api/v2/pokemon/${ this.pokemon }`)
              .then(response => response.json())
              .then(data => {
                console.log(data)
                this.data = data
                this.name = data.name
              }).catch( err => {
                this.name = this.pokemon
                this.show = !this.show
              }) 
          }

          findPokemon(){
            if(this.pokemon.length == 0){
              html `<p>Ingresa un pokemon</p>`
            }else{
            this.fetchData()}
          }



          render() {
            return html`
       
                <div>
                  <h1>Busca a tu pokemon</h1>
                  <input type="text"  @input = ${this.changeName} />
                  <button type="submit" @click=${this.findPokemon} >Pokemon</button>
                </div>
                <div>
                  ${ this.show ?
                    html `<p>${ this.name }</p>` :
                    html `<p>${ this.name } no encontrado</p>`
                  }
                </div>
           
      
            `;
          }
        }

        customElements.define('test-app', TestApp);
