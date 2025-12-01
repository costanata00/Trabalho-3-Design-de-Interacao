const url1 = "https://brasilapi.com.br/api/feriados/v1/2025";
const url2 = "https://meowfacts.herokuapp.com/?id=3";
const url3 = "http://swapi.dev/api/planets/1/";

export async function promessas() {
    let texto = document.getElementById("secundaria");
    try {
        let promessas = await Promise.all([
            fetch(url1),
            fetch(url2),
            fetch(url3)
        ]);
        let promessaAll1 = await promessas[0].text();
        texto.innerHTML += "<h2>API 1 - Feriados de 2025</h2>";
        texto.innerHTML += `<pre>${promessaAll1}</pre><br>`;

        let promessaAll2 = await promessas[1].text();
        texto.innerHTML += "<h2>API 2 - Fatos sobre gatos</h2>";
        texto.innerHTML += `<pre>${promessaAll2}</pre><p>Tradução: Mães gatos ensinam seus filhotes a usarem caixas de areia`;

        let promessaAll3 = await promessas[2].text();
        texto.innerHTML += "<h2>API 3 - Informações sobre o planeta Tatooine (Star Wars)</h2>";
        texto.innerHTML += `<pre>${promessaAll3}</pre><br>`;
    }
    catch (err) {
        texto.innerHTML += `<h2>Erro:</h2> ${err}`;
    }
}
promessas();