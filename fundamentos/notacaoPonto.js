const obj = {}

obj.nome = 'David'
obj['idade'] = 32

// console.log(obj)
// console.log(obj.nome)
// console.log(obj.idade)

function Obj1(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj1('Cadeira')
const obj3 = new Obj1('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()