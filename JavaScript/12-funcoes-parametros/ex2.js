function criarObjeto() {
    return { nome: 'Rafael', idade: 25 };
}

function numeros() {
    return [1, 2, 3, 4, 5];
}

function fabricaDeFuncoes(){
    return function () {
        console.log('Função retornada!');
    };
}