//Funções são => First-class object (Objetos de primeira classe)

//Declaração de função (Function Hoisting)

falaOi();

function falaOi() {
  console.log("Oie");
}

//Function expression
const souUmDado = function () {
  console.log("Sou um dado");
};

souUmDado();

function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo: ");
  funcao();
}
executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
  console.log("Sou uma Arrow Function");
};

funcaoArrow();

//Dentro de um objeto
// const obj = {
//   falar: function(){
//     console.log('Estou falando....')
//   }
// }

const obj = {
  falar(){
    console.log('Estou falando....')
  }
}

obj.falar()