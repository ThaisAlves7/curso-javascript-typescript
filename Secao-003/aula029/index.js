const data = new Date();

function getSemanaTexto(diaSemana) {
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
      return (diaSemanaTexto = "Domingo");
    case 1:
      return (diaSemanaTexto = "Segunda-feira");
    case 2:
      return (diaSemanaTexto = "Terça-feira");
    case 3:
      return (diaSemanaTexto = "Quarta-feira");
    case 4:
      return (diaSemanaTexto = "Quinta-feira");
    case 5:
      return (diaSemanaTexto = "Sexta-feira");
    case 6:
      return (diaSemanaTexto = "Sábado");
    default:
      return (diaSemanaTexto = "");
  }
}
// const diaSemana = data.getDay();
const diaSemana = 5;

const diaSemanaTexto = getSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto);

// if (diaSemana === 0) {
//   diaSemanaTexto = "Domingo";
// } else if (diaSemana === 1) {
//   diaSemanaTexto = "Segunda-feira";
// } else if (diaSemana === 2) {
//   diaSemanaTexto = "Terça-feira";
// } else if (diaSemana === 3) {
//   diaSemanaTexto = "Quarta-feira";
// } else if (diaSemana === 4) {
//   diaSemanaTexto = "Quinta-feira";
// } else if (diaSemana === 5) {
//   diaSemanaTexto = "Sexta-feira";
// } else if (diaSemana === 6) {
//   diaSemanaTexto = "Sábado";
// } else {
//   diaSemanaTexto = ''
// }
