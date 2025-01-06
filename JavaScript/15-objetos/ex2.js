let pessoa = {
        nome: 'Rafael',
        idade: 25
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa['idade']);

pessoa.idade = 26;
console.log(pessoa.idade);

pessoa.profissao = 'Programador';
delete pessoa.idade;

console.log(pessoa);

for (let chave in pessoa) {
    console.log(chave + ': ' + pessoa[chave]);
}