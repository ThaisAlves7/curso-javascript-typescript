type MeuTipo = number;

const arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }),
      1000;
  });
}

promiseAsync().then((result) => console.log(result + 1));
minhaPromise().then((result) => console.log(result + 1));
