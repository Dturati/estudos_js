const fun = {
     nome : 'David',
     idade : 32
}

const array = ['Nome','idade',32]

const arrayClose = ['teste',...array]

const rest = {'status':true,...fun}
console.log(rest)
console.log(arrayClose)