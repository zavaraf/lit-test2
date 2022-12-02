import { LitElement, html, css } from "lit";
import "@material/mwc-button/mwc-button";
import "@material/mwc-textfield/mwc-textfield";
import "@material/mwc-list/mwc-list";
import '@material/mwc-select/mwc-select.js';
import '@material/mwc-list/mwc-list-item.js';

class ConversorLitElement extends LitElement{
	static get properties() {
	    return {
	      unidad :{type : Number},
	      unidadConver : {type : Number},
	      unidades : {type : Array},
	      	
	    };
	}

	constructor(){
		super();

		this.unidad = 0;
		this.unidadConver = 0;
		this.unidades = ["mm","cm", "in", "ft"]
	}

	convertir(e){
		const numero = this.shadowRoot.querySelector("#numero");
		const select = this.shadowRoot.querySelector("#select");
		const select2 = this.shadowRoot.querySelector("#select2");

		let auxCon = 0;


//convertimos a Milimetros
		switch (select.value) {
			case "mm":
				auxCon = this.unidad; 
				break;
			case "cm":
				auxCon = this.unidad * 10;
				break;
			case "in":
				auxCon = this.unidad * 25.4;
				break;
			case "ft":
				auxCon = this.unidad * 304.8;
				break;
			default:
				// statements_def
				break;
		}

	console.log("Milimetros: "+ auxCon);
	switch (select2.value) {
			case "mm":
				this.unidadConver = auxCon ; 
				break;
			case "cm":
				this.unidadConver = auxCon / 10;
				break;
			case "in":
				this.unidadConver = auxCon / 25.4;
				break;
			case "ft":
				this.unidadConver = auxCon / 304.8;
				break;
			default:
				// statements_def
				break;
		}

		console.log(this.unidadConver)
	




	}

	render() {
    return html`
      <section id="content">
        <p>
        <span>Convertidor</span>
        </p>
        <mwc-textfield 
          id="numero"
           @keyup="${(e) => (this.unidad = e.target.value)}"
          .value=${this.unidad}
          label="Unidad Inicial en mm">
        </mwc-textfield>

        <mwc-select id="select">
          ${this.unidades.map( (item) => html `
          	<mwc-list-item value=${item}>${item}</mwc-list-item>
          	` )}
		  
		</mwc-select>

		<p> A </p>

		<mwc-select id="select2">
          ${this.unidades.map( (item) => html `
          	<mwc-list-item value=${item}>${item}</mwc-list-item>
          	` )}
		  
		</mwc-select>

		<mwc-button  @click="${this.convertir}" raised label="Convertir"></mwc-button>
        
		<p>
			<span>${this.unidadConver}</span>
		</p>

	 </section>

      
    `;
  }
}

customElements.define("conversor-lit-element", ConversorLitElement);