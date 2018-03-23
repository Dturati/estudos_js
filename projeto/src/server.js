const port = 3003

const express = require('express')
const app = express()
const dados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

app.get('/produtos',(req,res,next) => {
    res.send({dados: dados.getProdutos()})
})

app.get('/produtos/:id',(req,res,next) => {
    res.send({dados: dados.getProduto(req.params.id)})
})

app.delete('/produtos/:id',(req,res,next) => {
    const produto = dados.excluirProduto(req.params.id)
    res.send(produto)
})

app.post('/produtos',(req,res,next) => {
    
    const produto = dados.salvarProduto({
        nome: req.body.nome,
        preco : req.body.preco
    })

    res.send(produto)
})
app.get('/teste',(req,res,next) => {
    const nome = 'David'
    const [a,b,...c] = nome;
    res.send({'a':a,'b':b,'c':c})
});

app.post('/vaginas',(req,res,next) => {
    res.send({status:'Uhmmm quero chupar ...'})
})

app.listen(port,() => {
    console.log('Server Running port:',port)
})