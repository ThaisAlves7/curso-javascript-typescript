function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

// "Gambiarra"
// function esperaAi(msg, tempo, cb) {
//   setTimeout(() => {
//     console.log(msg);
//   }, tempo);
// }

// esperaAi("Frase 1", rand(1, 3), function () {
//   esperaAi("Frase 2", rand(1, 3), function () {
//     esperaAi("Frase 3", rand(1, 3));
//   });
// });

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject ('BAD VALUE')
    setTimeout(() => {
      // console.log(msg);
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Conexão com o BD", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados da BASE", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(2222, rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Exibe dados na tela");
  })
  .catch(e => {
    console.log('ERRO:', e)
  });

console.log("Isso aqui será exibido antes de qualquer promises");
