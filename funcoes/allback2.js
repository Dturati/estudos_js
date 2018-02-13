const notas = [1,2,3,4,5,6,7,8,9]


//sem callback
let notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
});

console.log(notasBaixas2);
const notasBaixasFun = (nota) => nota < 7
const notasBaixas3 = notas.filter( notasBaixasFun)
console.log(notasBaixas3)
