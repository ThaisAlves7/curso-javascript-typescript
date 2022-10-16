// Marco 0
// const tresHora = 60 * 60 * 3 * 1000
// const data = new Date(0 + tresHora); // 01/01/1970 Timestamp unix época unix

// const tresHora = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000

//Minimo 2 parametros para usar função desse modo
// const data = new Date(2019, 3); // ano, nes, dia, hr, Min, s, ms
//Mês funcionam como Array (quando usado em Number) iniciando no 0: 0=>Janeiro, 1=> Fevereiro e etc

// const data = new Date(1665950669356);

// console.log("Dia", data.getDate());
// console.log("Mês", data.getMonth() + 1); //Mês começa do Zero
// console.log("Ano", data.getFullYear());
// console.log("Hora", data.getHours());
// console.log("Minuto", data.getMinutes());
// console.log("Segundos", data.getSeconds());
// console.log("Milissegundos", data.getMilliseconds()); // 0-Domingo, 6-Sábado
// console.log("Dia Semana", data.getDay());
// console.log(data.toString());
// console.log(Date.now())

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
