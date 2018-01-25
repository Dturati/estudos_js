const pessoa = {
    nome : 'David',
    idade : 32,
    endereco : {
        logradouro : 'Rua 123',
        numero : 10000
    }
}

console.log(pessoa)

const {nome,idade} = pessoa 
const {nome : n, idade : i} = pessoa
console.log(nome,idade)
console.log(n,i)

const {endereco:{logradouro,numero}} = pessoa

console.log(logradouro, numero)