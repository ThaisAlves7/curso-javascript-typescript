function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),
    btnEq: document.querySelector(".btn-eq"),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.KeyCode === 13) {
          this.realizaConta();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta Inválida");
          return;
        }
        this.display.value = String(conta);
      } catch (err) {
        alert("Conta Inválida");
        return;
      }
    },

    cliqueBotoes() {
      //this => calculadora
      document.addEventListener("click", (e) => {
        const el = e.target;

        //Inserir comandos no display da Calculadora
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        //Limpar o Display da Calculadora
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        //Apagar itens 1 a 1 no Display
        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }

        //Mostrar resultado na tela do Display
        if (el.classList.contains("btn-eq")) {
          this.realizaConta();
        }
        
        //Deixa focado no btnEq já que ele ficava colocando o ultimo valor digitado
        //no display invés de resolver a conta
        
        this.btnEq.focus()
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
