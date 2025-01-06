function calcular(a, b) {
    return [a + b, a - b, a * b, a / b];
}

let [soma, subtracao, multiplicacao, divisao] = calcular(10, 5);
console.log(soma + ' ' + subtracao + ' ' + multiplicacao + ' ' + divisao);