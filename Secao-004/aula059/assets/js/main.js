function Calculadora() {
  this.display = document.querySelector(".display");
  this.btnEq = document.querySelector(".btn-eq");

  //Inicializa a calculadora
  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  //Captura o clique do Enter.
  this.capturaEnter = () => {
    document.addEventListener('keypress', e =>{
      if(e.code !== 13)return
      this.realizaConta();
    })
  }

  //Obter valores selecionados
  (this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del();
      if (el.classList.contains("btn-eq")) this.realizaConta(el);
      this.btnEq.focus();
    });
  }),
    //Adicionar valores selecionados no display
    (this.addNumDisplay = (el) => (this.display.value += el.innerText));
  //Limpar o Display
  this.clear = () => (this.display.value = "");
  //Apaga itens no Display 1 a 1
  this.del = (el) => (this.display.value = this.display.value.slice(0, -1));
  //Realiza a conta dos valores selecionados
  this.realizaConta = (el) => {
    //Realiza o tratamento de Erros
    try {
      const conta = eval(this.display.value);
      //Válida o resultado do conta para verificar se é uma conta válida
      if (!conta) {
        alert("Conta Inválida");
        return;
      }

      this.display.value = conta;
    } catch (err) {
      alert("Conta Inválida");
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
