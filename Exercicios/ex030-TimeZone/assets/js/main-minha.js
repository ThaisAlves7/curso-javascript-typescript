// diaSemana, dia, mes, ano, hora, minuto

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
    switch (diaSemana) {
      case 0:
        return (textWeek = "Domingo");
      case 1:
        return (textWeek = "Segunda-feira");
      case 2:
        return (textWeek = "Terça-feira");
      case 3:
        return (textWeek = "Quarta-feira");
      case 4:
        return (textWeek = "Quinta-feira");
      case 5:
        return (textWeek = "Sexta-feira");
      case 6:
        return (textWeek = "Sábado");
      default:
        return (textWeek = "");
    }
  }

  //Obtem o mês
  function Month(mes) {
    switch (mes) {
      case 1:
        return (textMonth = "Janeiro");
      case 2:
        return (textMonth = "Fevereiro");
      case 3:
        return (textMonth = "Março");
      case 4:
        return (textMonth = "Abril");
      case 5:
        return (textMonth = "Maio");
      case 6:
        return (textMonth = "Junho");
      case 7:
        return (textMonth = "Julho");
      case 8:
        return (textMonth = "Agosto");
      case 9:
        return (textMonth = "Setembro");
      case 10:
        return (textMonth = "Outubro");
      case 11:
        return (textMonth = "Novembro");
      case 12:
        return (textMonth = "Dezembro");
      default:
        return (textMonth = "");
    }
  }

  return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}:${seconds}`;
}
