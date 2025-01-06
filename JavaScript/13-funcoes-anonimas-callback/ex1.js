function processar(callback) {
    console.log('Processando...');
  callback();
}

processar(function() {
    console.log('Processo concluído.');
});