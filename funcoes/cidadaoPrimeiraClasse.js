const fun = function(nome,idade){
    console.log(nome,idade)
}

//Arrow function
const fun1 = (nome,idade) => {
    console.log(nome,idade)
}

fun('david',32),fun1('jose',65)

const arr = [function(nome,idade){console.log(nome,idade),fun,fun1}]

arr[0]('Maria',21)

function fun2(fun,nome,idade){
    fun1(nome,idade)
}

fun2(fun1,'Joana',33)

function soma(a,b){
    return function(c){
        console.log('Soma',a+b+c)
    }
}

soma(1,2)(4)
const res = soma(1,2)
res(3)