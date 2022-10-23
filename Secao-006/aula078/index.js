//Super Classe (Função Construtora === Classe)
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/ ${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

//Criação da Conta Corrente dentro do Banco
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

//Criação da Conta Corrente dentro do Banco
function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

//Instancia Conta Corrente
const cco = new ContaCorrente(11, 22, 0, 100);
console.log(cco);

cco.depositar(10);
cco.sacar(110);
cco.sacar(1);

console.log();

//Instancia Conta Poupança
const ccp = new ContaPoupanca(11, 22, 0);
console.log(ccp);

ccp.depositar(10);
ccp.sacar(10);
ccp.sacar(1);
