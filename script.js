function calcularIMC() {
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let resultado = document.getElementById("resultado");

  if (peso > 0 && altura > 0) {
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
      classificacao = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.9) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III (mórbida)";
    }

    resultado.innerHTML = "IMC: " + imc.toFixed(2) + " - " + classificacao;
    resultado.style.color = "blue";
  } else {
    resultado.innerHTML = "Digite valores válidos!";
    resultado.style.color = "red";
  }
}
