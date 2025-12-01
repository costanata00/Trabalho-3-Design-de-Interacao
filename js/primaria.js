export class MyCep extends HTMLElement {

  constructor() {
    super();
    this.innerHTML = `
    <label for="cep">CEP</label>
    <input type="number" id="cep"> 8 algarismos<br>
    <input type="button" value="Enviar" id="enviar"><br>
    <div id="mostra"></div>
    `;
  }
}
customElements.define('my-cep', MyCep);

export async function consulta() {

  try {
    let cep = document.querySelector('#cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    await fetch(url)
      .then(resposta => resposta.json())
      .then(js => mostraDados(js))
      .catch(erro => {
        document.querySelector('#mostra').innerHTML =
          `Erro ao consultar API: ${erro}`;
      });

  } catch (e) {
    document.querySelector('#mostra').innerHTML =
      `Erro ${e}`;
  }
}

export function mostraDados(js) {
  const painel = document.querySelector('#mostra');
  let texto = "<h1>Dados solicitados</h1>";
  texto += "Localidade: " + js.localidade + "<br>"
  texto += "Bairro: " + js.bairro + "<br>";
  texto += "DDD: " + js.ddd + "<br>";

  painel.innerHTML = texto;
}