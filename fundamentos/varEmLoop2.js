const funcs = []

for(var i = 0; i< 10; i++)
{
    funcs.push(function(){
        return console.log(i)
    })
}

funcs[2]()
funcs[8]()

let nome = 'David'

function teste()
{
    console.log(nome)
}

teste()