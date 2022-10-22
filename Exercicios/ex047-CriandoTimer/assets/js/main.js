function relogio() {
  //Cria uma data usando os segundos
  function getTimeHours(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "GMT",
    });
  }

  const relogio = document.querySelector(".relogio");

  let segundos = 0;
  let timer;

  //Inicia o relógio do Cronômetro
  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = getTimeHours(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (e) {
    const elemento = e.target;

    //Iniciar o Cronômetro
    if (elemento.classList.contains("iniciar")) {
      iniciaRelogio();
      //Adiciona a classe que contém a cor verde quando pausa
      relogio.classList.add("contando");
      //Remover a classe que contém a cor vermelha quando pausa
      relogio.classList.remove("pausado");
    }

    //Pausar o cronômetro
    if (elemento.classList.contains("pausar")) {
      clearInterval(timer);
      //Adicionar a classe que contém a cor vermelha quando pausa
      relogio.classList.add("pausado");
    }

    //Zerar o cronômetro
    if (elemento.classList.contains("zerar")) {
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      //Remover a classe que contém a cor vermelha e verde quando pausa
      relogio.classList.remove("pausado");
      relogio.classList.remove("contando");
    }
  });
}
relogio();
