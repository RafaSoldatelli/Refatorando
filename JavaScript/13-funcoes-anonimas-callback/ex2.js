const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', function(erro, dados) {
    if (erro) {
        console.log('Erro ao ler o arquivo');
    } else {
        console.log(dados);
    }
    });

console.log('Lendo o arquivo...');