const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {

    const funcionarios = response.data

    const chinesa = funcionarios.filter((pessoa) =>{
        return pessoa.pais === 'China' && pessoa.genero === 'F'
    })
   
    const escrava = chinesa.reduce((ant,pessoa) => {
            if(ant.salario < pessoa.salario)
                return ant
            return pessoa
    })
    console.log(escrava)
})