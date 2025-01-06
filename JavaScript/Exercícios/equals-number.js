function equalsBigger(a, b) {
    return a === b ? "Os números são iguais" : (a > b ? a : b); 
}

console.log(equalsBigger(10, 20));
console.log(equalsBigger(30, 10)); 
console.log(equalsBigger(15, 15));