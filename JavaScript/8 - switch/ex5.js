function obterCategoria(idade) {
    if (idade < 18) return 'Menor de idade';
    if (idade < 65) return 'Adulto';
    return 'Idoso';
}

let idade = 7;

switch(obterCategoria(idade)) {
    case 'Menor de idade':
        console.log('Acesso negado');
        break;
    case 'Adulto':
        console.log('Acesso permitido');
        break;
    case 'Idoso':
        console.log('Acesso permitido com desconto');
        break;
    default:
        console.log('Caregoria desconhecida');
}