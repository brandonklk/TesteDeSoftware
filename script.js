var answer = 0;
function cal() {
  var first = document.getElementById("first");
  var second = document.getElementById("second");
  var campo = document.getElementById("campo").value;

  switch (campo) {
    case "soma":
      alert(parseFloat(second.value) + parseFloat(first.value));
      break;

    case "subtracao":
      alert(parseFloat(first.value) - parseFloat(second.value));
      break;

    case "multiplicacao":
      alert(parseFloat(first.value) * parseFloat(second.value));
      break;

    case "divisao":
      alert(parseFloat(first.value) / parseFloat(second.value));
      break;

    case "exponenciacao":
      alert(parseFloat(first.value) ** parseFloat(second.value));
      break;
  }
}
