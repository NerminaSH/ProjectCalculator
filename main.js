// This function delet all the values
function delet() {
  document.getElementById("result").value = "";
}
// This function number values
function number(value) {
  document.getElementById("result").value += value;
}
// This function operation return result
function result() {
  var result = document.getElementById("result").value;
  var calc = eval(result);
  document.getElementById("result").value = calc;
}
