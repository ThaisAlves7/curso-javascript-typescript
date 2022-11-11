const { texto, arquivos } = require("../base");

// const regExp1 = /Jo+ão/gi
// const regExp2 = /\.(jpg|jpeg)/gi
// const regExp2 = /\.jpe?g/gi;
// const regExp2 = /\.jpe{0,1}g/gi;
// const regExp2 = /\.(jp(e|E)?g)/g;
const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g;

for (const arquivo of arquivos) {
  // console.log(arquivo, arquivo.match(regExp2))
  const valido = arquivo.match(regExp2);

  // if (!valido) continue;

  console.log(arquivo, valido);
}

// console.log(texto.match(regExp1))
