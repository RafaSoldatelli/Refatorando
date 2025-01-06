function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

const meuCarro = new Carro('Toyota', 'Corolla');

Carro.prototype.descrever = function() {
    return `Este é um ${this.marca} ${this.modelo}`;
};

console.log(meuCarro.descrever());