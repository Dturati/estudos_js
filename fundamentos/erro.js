
function tratarErro(e){
     throw new Error('Erro de processamento: '+ e.message)
}
function imprimir(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErro(e)
    }
    
}

let obj ={
    nome:'David'
}

imprimir(obj)