function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}
function calculate() {
  var number = document.getElementById("inputNumber").value;
  var result = fibonacci(number);
  document.getElementById("result").innerHTML = "O termo correspondente da sequência de Fibonacci é: " + result;
}