this.ola = 'olá'
exports.bemVindo = "node js"
module.exports.dois = 2

const http = require('http')
http.createServer((req,res) =>{
    console.log(req)
    res.write('Olá')
    res.end()
}).listen(8000)