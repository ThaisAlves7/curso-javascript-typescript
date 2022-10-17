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
container.appendChild(div);

for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i];
  console.log(tag, texto);

  let tagElement = document.createElement(tag);
  tagElement.innerHTML = `${texto}`;
  div.appendChild(tagElement);
}
