var answer = 0;
function cal() {
  var first = document.getElementById("first");
  var second = document.getElementById("second");
  var campo = document.getElementById("campo").value;

  switch (campo) {
    case "soma":
      alert(soma(second.value, first.value));
      break;

    case "subtracao":
      alert(subtracao(first.value, parseFloatsecond.value));
      break;

    case "multiplicacao":
      alert(multiplicacao(first.value, second.value));
      break;

    case "divisao":
      alert(divisao(first.value, second.value));
      break;

    case "exponenciacao":
      alert(exponenciacao(first.value , second.value));
      break;
  }
}

function soma(a,b) {
    return parseFloat(a) + parseFloat(b);
}

function subtracao(a,b){
    return parseFloat(a) - parseFloat(b);
}

function multiplicacao(a,b){
    return parseFloat(a) * parseFloat(b);
}

function divisao(a,b){
    return parseFloat(a) / parseFloat(b);
}
function exponenciacao(a,b){
    return parseFloat(a) ** parseFloat(b);
}
module.exports = {soma, subtracao, multiplicacao,divisao, exponenciacao};
