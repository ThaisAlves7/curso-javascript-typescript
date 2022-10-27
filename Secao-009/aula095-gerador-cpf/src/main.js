import GerCPF from "./modules/GeraCPF";
import "./assets/styles/style.css";

(function () {
  const gera = new GerCPF();
  const cpfGerado = document.querySelector(".cpf-gerado");
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();
