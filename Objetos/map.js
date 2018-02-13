const carrinho = [
    '{"nome":"borracha","preco":3.50}',
    '{"nome":"caderno","preco":13.90}',
    '{"nome":"kit lapis","preco":41.22}',
    '{"nome":"caneta","preco":7.50}',
]

const trata = carrinho.map((valor,i) =>{
    let temp = JSON.parse(valor)
    return temp
}).map((valor,i) => { 
  return valor.preco
})

console.log(trata)

