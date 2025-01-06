function outerFunction() {
    let outerVarable = 5;

    function innerFunction() {
        return outerVarable;
    }

    return innerFunction;
}

let getOuterVariable = outerFunction();
console.log(getOuterVariable());