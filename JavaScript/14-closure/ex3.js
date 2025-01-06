function multiplyBy(factor) {
    return function (number) {
        return factor * number;
    };
}

let multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(4));