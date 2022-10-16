function calculoIMC() {
  const form = document.querySelector(".imcForm");
  const peso = document.querySelector(".peso").value;
  const altura = document.querySelector(".altura").value;
  const result = document.querySelector(".result").value;

  function calcular(evento) {
    evento.preventDefault();
    console.log(peso, altura);
    result.innerHTML = `Tudo OK`;

    if (peso === "" && altura === "") {
      result.innerHTML = `Insira os valores para o calculo`;
    } else {
      const imc = Math.round(peso / (altura * altura));

      if (imc < 18.5) {
        result.innerHTML = `Abaixo do peso`;
      } else if (imc <= 18.5 && imc <= 24.9) {
        result.innerHTML = `Peso normal`;
      } else if (imc <= 25 && imc <= 29.9) {
        result.innerHTML = `Sobrepeso`;
      } else if (imc <= 30 && imc <= 34.9) {
        result.innerHTML = `Obesidade grau 1`;
      } else if (imc <= 35 && imc <= 39.9) {
        result.innerHTML = `Obesidade grau 2`;
      } else {
        result.innerHTML = `Obesidade grau 3`;
      }
    }
  }

  form.addEventListener("submit", calcular);
}
