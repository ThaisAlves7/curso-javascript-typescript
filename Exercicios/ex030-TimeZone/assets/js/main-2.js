const msgH1 = document.querySelector("#txtH1");
const diaAtual = new Date();

// const opcoes = {
//   dateStyle: "full",
//   timeStyle: "medium"
// };

// msgH1.innerHTML = diaAtual.toLocaleString("pt-BR", opcoes);

msgH1.innerHTML = diaAtual.toLocaleString("pt-BR", {
  dateStyle: "full",
  timeStyle: "medium",
});
