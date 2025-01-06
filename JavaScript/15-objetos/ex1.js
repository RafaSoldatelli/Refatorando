let meuObjeto = {   
    nome: 'Rafael',
    idade: 25,
    falar: function() {
        console.log('Olá, meu nome é ' + this.nome);
    }
};

meuObjeto.falar();