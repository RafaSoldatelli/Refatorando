const veiculo = {
    descrever() {
        return `Este é um ${this.marca} ${this.modelo}`;
    }
};

const meuCarro = Object.create(veiculo);
meuCarro.marca = 'Toyota';
meuCarro.modelo = 'Corolla';

console.log(meuCarro.descrever());