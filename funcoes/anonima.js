const func1 = function(x,y)
{
    return x + y
}

const imprime = function(a,b,operecao = func1){
    console.log(operecao(a,b))
}

imprime(3,4,(x,y) => x-y)

imprime(3,4,(x,y) => x*y)

const Pessoa ={
    falar : () => {
        console.log('aqui')
    }
}

Pessoa.falar()