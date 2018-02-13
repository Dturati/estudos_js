const valor = 'global'

function funUm(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    funUm()
}

funUm()


