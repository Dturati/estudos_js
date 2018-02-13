const aprovados = ['maria', 'joana','manu','jana']

aprovados.forEach(function(nome,i){
    console.log(i+1,':',nome)
})

aprovados.forEach((nome,i) => console.log(`${i} : ${nome}`))