const pontos = [
    {x:10, y:20},
    {x:20, y:30}
]

console.log(typeof pontos)

const imprimir = new Imprime(pontos)
pontos.calcula = function(obj){
    this.p1 = this[0].x
    this.p2 = this[0].y
    return this.p1 + this.p2
}

function Imprime(pontos){
    this.pontos = pontos
}

// console.log(typeof Imprime)
// console.log(typeof imprimir)
// console.log(imprimir.idade)
// console.log(pontos.calcula())
console.log(imprimir.pontos.calcula())
