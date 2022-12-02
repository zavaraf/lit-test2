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


		switch (select.value) {
			case "mm":
				this.unidadConver = this.unidad; 
				break;
			case "cm":
				this.unidadConver = this.unidad * 60;
				break;
			case "in":
				this.unidadConver = this.unidad * 0.0393701;
				break;
			case "ft":
				this.unidadConver = this.unidad * 0.00328084;
				break;
			default:
				// statements_def
				break;
		}


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

		<mwc-button  @click="${this.convertir}" raised label="Convertir"></mwc-button>
        
		<p>
			<span>${this.unidadConver}</span>
		</p>

	 </section>

      
    `;
  }
}

customElements.define("conversor-lit-element", ConversorLitElement);