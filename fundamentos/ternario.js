const resultadoArrowUm = nota => nota >=7 ? 'Aprovado' : 'Reprovado'

const resultadoArrowDois = (nota,trabalho) => {
    return (nota+trabalho)/2 >=7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultadoArrowUm(6))
console.log(resultadoArrowDois(7,9))