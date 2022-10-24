class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector(".formulario");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidos();

    if (camposValidos && senhasValidas) {
      alert("Formulário Enviado");
      this.formulario.submit();
    }
  }

  //Valida os Campos de Senhas e Repetir Senha
  senhasSaoValidos() {
    let valid = true;

    const senha = this.formulario.querySelector(".senha");
    const repetirSenha = this.formulario.querySelector(".repetir-senha");

    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, "Campos senha e repetir senha precisar ser iguais");
      this.criaErro(
        repetirSenha,
        "Campos senha e repetir senha precisar ser iguais"
      );
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      this.criaErro(senha, "Senha precisa estar entre 6 e 12 caracteres");
    }
    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    //Remove a class de erros do campos preenchidos
    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    //Adiciona a class de erros nos campos vazios
    for (let campo of this.formulario.querySelectorAll(".validar")) {
      let label = campo.previousElementSibling.innerText;
      label = label.replace(":", "");

      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
        valid = false;
      }

      //Validação do CPF
      if (campo.classList.contains("cpf")) {
        if (!this.validaCPF(campo)) valid = false;
      }

      //Validação do Usuário
      if (campo.classList.contains("usuario")) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    //Verifica a quantidade de caracteres do Usuário digitado
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, "Usuário precisa ter entre 3 e 12 caracteres");
      valid = false;
    }

    //Verifica se o Usuário contém letras e/ou números
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, "Usuário precisa conter apenas letras e/ou números");
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, "CPF Inválido");
      return false
    }
    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    campo.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidaFormulario();
