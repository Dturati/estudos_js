function teste(x){
    if(x == 0){ debugger
        throw new Error(x+" não pode ser 0")
    }

    console.log(x)
}

try{
    teste(0)
}catch(ex){
    console.log("Erro: "+ex)
}

const nome = (nome) => {
    if(nome == undefined){ debugger
        console.log('indefinido')
    }
    if(nome){
        console.log(nome)
    }
}

nome('David')

