function Carro(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0

    this.acelerar = function(){
        velocidadeAtual += 10
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro(100,10)

console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof uno)