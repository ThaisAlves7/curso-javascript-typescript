//Substituindo o Switch por Array

const msgH1 = document.querySelector("#txtH1");
const diaAtual = new Date();

const msg = textTimeZone(diaAtual);
msgH1.innerHTML = msg;
console.log(msg);

function textTimeZone(diaAtual) {
  diaSemana = getWeek(diaAtual.getDay());
  dia = diaAtual.getDate();
  mes = Month(diaAtual.getMonth());
  ano = diaAtual.getFullYear();
  hora = zeroAEsquerda(diaAtual.getHours());
  minuto = zeroAEsquerda(diaAtual.getMinutes());
  seconds = zeroAEsquerda(diaAtual.getSeconds());

  function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
  }

  //Obter Semana
  function getWeek(diaSemana) {
    const semanas = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];

    return semanas[diaSemana];
  }

  //Obtem o mês
  function Month(mes) {
    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return meses[mes];
  }

  return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}:${seconds}`;
}
