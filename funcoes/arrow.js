const a = 2
let dobro = function(a){
    return a * 1
}
// console.log(dobro(a))

dobro = (a) => {
    console.log(this)
    return a * 2
}
console.log(dobro(a))

dobro = (a) => a * 3
// console.log(dobro(a))

const testeTeclado = () => {
    return 'Teclado é bom, barulhento'
}

console.log(testeTeclado())