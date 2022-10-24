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

//Obtém o CPF e devolve ele "Limpo"
class ValidaCPF {
  constructor(cpfEnviado) {
    this.cpfEnviado = cpfEnviado;
    this.cpfValido = true;
    this.cpfLimpo = this.cpfEnviado.replace(/\D+/g, "");
  }

  tratarCPF() {
    if (typeof this.cpfEnviado === "undefined") {
      this.cpfValido = false;
      return this.msgCPF();
    }

    if (this.cpfLimpo.length !== 11) {
      this.cpfValido = false;
      return this.msgCPF();
    }
    if (this.isSequencia()) {
      this.cpfValido = false;
      return this.msgCPF();
    }

    return validaCPF();
  }

  isSequencia() {
    console.log(this.cpfLimpo);
    let sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);

    return sequencia === this.cpfLimpo;
  }

  criaDigito(cpf) {
    const cpfArray = Array.from(cpf);
    let regressivo = cpfArray.length + 1;

    let total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }

  validaCPF() {
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    this.cpfValido = novoCpf === this.cpfLimpo;
    return this.msgCPF();
  }

  msgCPF() {
    if (this.cpfValido !== true) return `O CPF ${this.cpfEnviado} é Inválido`;
    return `O CPF ${this.cpfEnviado} é Válido`;
  }
}

// const cpf = new ValidaCPF("111.111.11-11");
// console.log(cpf.validaCPF());

// const cpf = new ValidaCPF("705.484.450-52");
// console.log(cpf.validaCPF());
