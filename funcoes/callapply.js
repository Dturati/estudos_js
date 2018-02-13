function getPreco(imposto = 0 , moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome:'Notebook',
    preco:4589,
    desc:0.15,
    getPreco
}
const carro = {preco:5000,desc:0.10}
console.log(getPreco())
console.log(produto.getPreco())
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro,0.17,'$'))
console.log(getPreco.apply(carro,[0.25,'$']))