const produtos = [
    {nome : 'Notebook', preco:2499,fragil:true},
    {nome : 'copo de vidro', preco:10.90,fragil:true},
    {nome : 'Ipad Pro', preco:2300,fragil:true},
    {nome : 'Ryzen', preco:1700,fragil:false},
    {nome : 'copo de plastico', preco:5.99,fragil:true},
]

const nomes_produtos = produtos.filter(function(index){
    return index.preco > 0 && index.fragil
}).map(function(index){
    return index.preco
}).reduce(function(sum,index){
    return sum + index
});

console.log(nomes_produtos)


const fragil = produtos.map(function(index,i){
    return index.fragil
}).reduce(function(resultado,fragil){
    return resultado && fragil
})

console.log(fragil)