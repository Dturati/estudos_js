const saudacao = 'Opa' //Contexto léxico

function exec(){
    const saudacao = 'Fala'
    return saudacao
}

console.log(exec())

const cliente = {
    nome: 'David',
    idade : 32,
    endereco : {
        logradoura : 'Rua da vadias gostosas',
        numero : 345
    }
}
console.log(saudacao)
console.log(cliente.endereco.logradoura)