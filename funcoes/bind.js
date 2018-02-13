const pessoa = {
    // self : this,
    saudacao : 'Bom dia',
    falar(){
        console.log(this.saudacao)
    },
    meuThis(){
        console.log(this)
    },
    meuSelf(){
        console.log(this.self)
    }
}

pessoa.falar()
pessoa.meuThis()

const falar = pessoa.falar
const meuThis = pessoa.meuThis
falar()
meuThis()

const pessoaFalar = pessoa.falar.bind(pessoa)
const mudaThis = pessoa.meuThis.bind(pessoa)
pessoaFalar()
mudaThis()
pessoa.meuSelf()
