function Animal(tipo) {
    this.tipo = tipo;
}

Animal.prototype.descrever = function() {
    return `Sou um ${this.tipo}`;
};

function Gato() {
    Animal.call(this, 'Gato');
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

let gato = new Gato();

console.log(gato.descrever());