const ferrari = {
    modelo : 'f40',
    velMax :324
}

const volvo = {
    modelo : 'V40',
    velMax : 200
}
const peso = {
    kg : 1230
}

// console.log(volvo)

function Carro() {
    Carro.prototype.peso = {
        kg : 1000,
        libra : 2000
    }
}

const carro = new Carro()

console.log(carro.peso)