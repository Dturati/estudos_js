let compara = function(param){
    let nome = 'david'
    console.log(this === param)
    return this
}

const apontaPraca = {

}
compara(global)
compara = compara.bind(apontaPraca)
compara(global)
console.log(compara(global))

let arrow = (param) => {
    console.log(this === param)
} 

arrow(window)