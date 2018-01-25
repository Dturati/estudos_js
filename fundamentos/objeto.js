const objeto = {
    'Eriane' : 'Que beleza em',
    'Idade' : '28'
};
objeto.nome = "David";
console.log(JSON.stringify(objeto)); 

function teste(){
    var obj = this
    var nomes = {
        objeto : this,
        nome : 'David'
    }

    return [obj,nomes.objeto]
}

var res = teste()
console.log(res[0])
console.log(res[1])


