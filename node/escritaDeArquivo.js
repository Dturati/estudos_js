const fs = require('fs')

const produto = {
    nome : 'David',
    idade : 32,
    peso : 'variável'
}

fs.writeFile(__dirname+"arquivoNovo.json",JSON.stringify(produto),err =>{
    console.log(err || 'Arquivo salvo')
})
