// 705.484.450-52  070.987.720-03
/*

  7x  0x  5x  4x  8x  4x  4x  5x  0x => 9 Primeiros dígitos do CPF
  10  9   8   7   6   5   4   3   2  => Multiplica por 1 sequencia regressiva de 10
  70  0   40  28  48  20  16  15  0  => Soma dos valores 237
  
  Fórmula           Resultado 
  11 - (237 % 11) = 5 (Primeiro Digito)
  (Se o número do digito for maior que 9, consideramos 0)
  ========================================================================================================
  
  7x  0x  5x  4x  8x  4x  4x  5x  0x  5x => 9 Primeiros dígitos do CPF + resultado do primeiro calculo
  11  10  9   8   7   6   5   4   3   2  => Multiplica por 1 sequencia regressiva de 11
  77  0   45  32  56  24  20  20  0   10 => Soma dos valores 284
  
  11 - (284 % 11) = 2 (Primeiro Digito)
  (Se o número do digito for maior que 9, consideramos 0)

  705.484.450-52 === 705.484.450.52 => CPF válido
*/

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

//Valida os números do CPF
ValidaCPF.prototype.valida = function () {
  if (typeof this.cpfLimpo === "undefined") return false;
  if (this.cpfLimpo.length !== 11) return false;
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;

  return novoCpf === this.cpfLimpo;
};

//Realiza os cálculos de verificação do CPF
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;

  let total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val);
    regressivo--;
    return ac;
  }, 0);

  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : String(digito);
};

//Verifica se foi CPF com números sequenciais
ValidaCPF.prototype.isSequencia = function () {
  let sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

// const cpf = new ValidaCPF("111.111.11-00");
// console.log(cpf.valida());

const cpf = new ValidaCPF("705.484.450-52");
console.log(cpf.valida());

// const cpf2 = new ValidaCPF("070.987.720-03");
// console.log(cpf2.valida());

if (cpf.valida()) {
  console.log("CPF Válido");
} else {
  console.log("CPF Inválido");
}
