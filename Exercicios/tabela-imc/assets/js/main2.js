//capturar o evento de submit do formulário
const form = document.querySelector("#imcForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  //Obtenção dos elementos HTML
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // Verifica se peso é invalido => Negando a condição
  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  // Verifica se altura é invalido => Negando a condição
  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  //Chama a função que ira realizar o calculo do IMC
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResultado(msg, true);
  console.log(imc, nivelImc);
});

//Obtém a classificação do seu nivel de acordo com o valor do IMC obtido
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 1",
  ];

  if (imc >= 39.9) return nivel[5];

  if (imc >= 34.9) return nivel[4];

  if (imc >= 29.9) return nivel[3];

  if (imc >= 24.9) return nivel[2];

  if (imc >= 18.5) return nivel[1];

  if (imc < 18.5) return nivel[0];
}

//Função que realiza o calculo IMC
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

//Cria um paragrafo dentro do HTML
function criaP() {
  const p = document.createElement("p");
  return p;
}

//Função que a realiza a apresentação da Msg em tela
function setResultado(msg, isValid) {
  const result = document.querySelector("#result");

  //Zera o conteúdo de result
  result.innerHTML = "";

  //Chama a função para criação do paragrafo
  const p = criaP();

  //adiciona uma classe ao elemento p que foi criado
  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  //Inseri a mensagem que é passada para o parâmetro
  p.innerHTML = msg;

  //Inserindo um elemento filho dentro do elemento result
  result.appendChild(p);
}
