function alterarObjeto(obj) {
    obj.propriedade = 'novo valor';
}

let objeto = {propriedade: 'valor original'};
alterarObjeto(objeto);
console.log(objeto.propriedade);