//A resposta ficou praticamente igual a resolução
const elementos = [
  {
    tag: "p",
    texto: "Frase1",
  },
  {
    tag: "div",
    texto: "Frase2",
  },
  {
    tag: "footer",
    texto: "Frase3",
  },
  {
    tag: "section",
    texto: "Frase4",
  },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

//Modelo 001 - Resolução
// for (let i = 0; i < elementos.length; i++) {
//   let {tag, texto} = elementos[i]

//   let tagCriada = document.createElement(tag)
//   tagCriada.innerHTML = texto
//   div.appendChild(tagCriada);
// }
// container.appendChild(div);

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}
container.appendChild(div);
