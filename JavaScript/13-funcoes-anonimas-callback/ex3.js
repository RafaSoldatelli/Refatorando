var globalVar = "Eu sou global";

function outerFunction(){
    var outerVar = "Eu sou externa";

    function innerFunction(){
        var innerVar = "Eu sou interna";
        console.log(globalVar, outerVar, innerVar);
    }

    console.log(globalVar, outerVar);
}