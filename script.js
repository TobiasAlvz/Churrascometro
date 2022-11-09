let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let res = document.getElementById("res");
let button = document.getElementById("button");

button.addEventListener("click", function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qdtCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
  let qdtCerveja = cervejaPP(duracao) * adultos;
  let qdtTotalBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

  res.innerHTML = `<p>${qdtCarne / 1000} Kg de Carne</p>`;
  res.innerHTML += `<p>${Math.ceil(qdtCerveja / 355)} Latas de Cerveja</p>`;
  res.innerHTML += `<p>${Math.ceil(
    qdtTotalBebidas / 2000
  )} Pet's 2L de bebidas</p>`;
});

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 1200;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
