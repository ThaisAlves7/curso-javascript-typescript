import geraSenha from "./geradores";

const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaracteres = document.querySelector(".qtd-caracteres");
const chkMaiusculas = document.querySelector(".chk-maisculas");
const chkMiniculas = document.querySelector(".chk-minusculas");
const chkNumeros = document.querySelector(".chk-numeros");
const chkSimbolos = document.querySelector(".chk-simbolos");
const gerarSenha = document.querySelector(".gerar-senha");

export default () => {
  gerarSenha.addEventListener("click", () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  if (qtdCaracteres.value > 50) return "Máximo 50 caracteres";
  const senha = geraSenha(
    qtdCaracteres.value,
    chkMaiusculas.checked,
    chkMiniculas.checked,
    chkNumeros.checked,
    chkSimbolos.checked
  );

  return senha || "Nada selecionado";
}
