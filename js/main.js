import './menu/menu.js';
import './secundaria.js';
import './primaria.js';
import { consulta } from './primaria.js';

class MyHeader extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
    <style>
        header{
          background-color: #f0f0f0;
          padding: 10px;
          text-align: center;
          border-radius: 5px;
          border: 2px solid darkgray;
          }
    </style>
      <header>
        <h1>
           ${this.getAttribute('titulo')}
        </h1>
      </header>
    `;
  }
}
customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {

  constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
    <style>
         footer {
          padding: 10px;
          margin-top: 10px;
          text-align: center;
          border-radius: 5px;
          border: ${this.getAttribute('borda') || '2'}px solid darkgray; 
          background-color: #f0f0f0;}
    </style>
    <footer>
        <p>
          &copy; ${this.getAttribute('mensagem') || '2025 Meu Site'}
        </p>
      </footer>
    `;
  }
}
customElements.define('my-footer', MyFooter);

document.querySelector('#enviar').addEventListener('click', consulta);
// class MyCep extends HTMLElement {

//   constructor() {
//     super();
//     this.innerHTML = `
//     <label for="cep">CEP</label>
//     <input type="number" id="cep"> 8 algarismos<br>
//     <input type="button" value="Enviar" id="enviar"><br>
//     <div id="mostra"></div>

//     `;
//   }
// }
// customElements.define('my-cep', MyCep);


// document.querySelector('#enviar').addEventListener('click', consulta);
// function consulta() {

//   let cep = document.querySelector('#cep').value;
//   const url = 'https://viacep.com.br/ws/' + cep + '/json/';
//   fetch(url)
//     .then(resposta => resposta.json())
//     .then(js => mostraDados(js));
// }
// function mostraDados(js) {
//   const painel = document.querySelector('#mostra');
//   let texto = "<h1>Dados solicitados</h1>";
//   texto = texto + "Bairro:" + js.bairro + "<br>";
//   texto = texto + "DDD:" + js.ddd + "<br>";
//   painel.innerHTML = texto;
// }



//

// let texto=document.querySelector("#texto2");
// const url1='https://brasilapi.com.br/api/cambio/v1/cotacao/USD/2025-11-24';
// const url2='https://viacep.com.br/ws/96201470/json/';
// const url3='https://viacep.com.br/ws/96201480/json/';

// promessas();

// async function promessas() {

// try{
// let promessas= await Promise.all([fetch(url1),fetch(url2),fetch(url3)]);
// let promessaAll1= await promessas[0].text();
// texto.innerHTML+="<h1>All</h1>";
// texto.innerHTML+=promessaAll1;
// texto.innerHTML+="<br><br>";

// let promessaAll2= await promessas[1].text();
// texto.innerHTML+=promessaAll2;
// texto.innerHTML+="<br><br>";

// let promessaAll3= await promessas[2].text();
// texto.innerHTML+=promessaAll3;
// texto.innerHTML+="<br><br>";

// }
// catch(err) {
//     texto.innerHTML+="Erro:<br> "+err;}
// }

