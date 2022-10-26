function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Encontrei um erro");
        return;
      }

      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

/*
  Promise.all => Resolve todas as promessas e retorna elas num Array
  Promise.race => Sempre entrega a primeira promessa que ele conseguir resolver (resolve ou reject)
  Promise.resolve => Você valida uma promessa já resolvida trazendo os resultados, senão você resolve ela
  Promise.reject =>

*/

// const promises = [
//   esperaAi(1000, rand(1, 5)),
//   esperaAi("Promise 1", rand(1, 5)),
//   esperaAi("Promise 2", rand(1, 5)),
//   esperaAi("Promise 3", rand(1, 5)),
// ];

// Promise.all
// // Promise.all(promises)
// //   .then((valor) => {
// //     console.log(valor);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // Promise.race
// Promise.race(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.resolve
// function baixaPagina() {
//   const emCache = false;

//   if (emCache) {
//     return Promise.resolve("Página em cache");
//   } else {
//     return esperaAi("Baixei a pagina", 3000);
//   }
// }
// baixaPagina()
//   .then((dadosPagina) => {
//     console.log(dadosPagina);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Promise.resolve
function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.reject("Página em cache");
  } else {
    return esperaAi("Baixei a pagina", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => {
    console.log("ERRO:", e);
  });
