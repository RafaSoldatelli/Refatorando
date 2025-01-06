let animal = {
    tipo: 'Animal',
    descrever() {
        return `Sou um ${this.tipo}`;
    }
};

let gato = Object.create(animal);
gato.tipo = 'Gato';

console.log(gato.descrever());