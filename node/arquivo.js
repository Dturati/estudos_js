const fs = require('fs')
const caminho = __dirname + "/arquivo.json"

console.log(caminho)

const conteudo = fs.readFileSync(caminho,'utf-8')

console.log(conteudo)

fs.readFile(caminho,'utf-8',(erro,conteudo) => {
    const config = JSON.parse(conteudo) 
    console.log(config.db.nome)
})
