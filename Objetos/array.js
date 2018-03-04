const obj ={
    nome : 'David',
    idade : 32,
    funcaoUm : () => {
         this.sobrenome = 'Turati'
        return [this, this.nome, this.sobrenome]
    },  //Dentro do node o this pertence ao escopo da função em uma arrow
    funcaoDois(){
        return `${this.nome} : ${this.idade} : ${this.peso} : ${this.teste}`
    }
}

console.log(typeof obj)
// console.log(obj.funcaoUm())
console.log(obj.funcaoDois())
obj.peso = 91
obj.teste = 'teste'

console.log(obj.funcaoDois())

const teste = {}

const teste2 = {}

const teste3 = {}