const nome = 'David'

for(let i of nome){
    console.log(i)
}

let nomes = new Map()

nomes.set('nome1','David')
nomes.set('nome2','Maria')

for(let i of nomes){
    console.log(i)
}

const nomesArrray = ['David',32,89]

for(let i in nomesArrray){
    console.log(i)
}

for(let i of nomesArrray){
    console.log(i)
}