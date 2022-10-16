function meuEscopo() {
  //querySelector deixa você selecionar como se estivesse usando CSS
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  // form.onsubmit = function (evento) {
  //   evento.preventDefault();
  //   alert(1);
  //   console.log("Foi Enviado");
  // };

  function recebeEventoForm(evento) {
    //Evita o carregamento da pagina perdendo as informações
    evento.preventDefault();

    const nome = form.querySelector(".nome").value;
    const sobrenome = form.querySelector(".sobrenome").value;
    const peso = form.querySelector(".peso").value;
    const altura = form.querySelector(".altura").value;

    //Minha solução
    // const addPessoa = function (nome, sobrenome, peso, altura) {
    //   return {
    //     nome,
    //     sobrenome,
    //     peso,
    //     altura,
    //   };
    // };
    // pessoas.push(addPessoa(nome, sobrenome, peso, altura));

    //Resolução do Professor
    pessoas.push({
      nome,
      sobrenome,
      peso,
      altura,
    });

    resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}<p/>`;

    console.log(pessoas);
  }

  form.addEventListener("submit", recebeEventoForm);
}
