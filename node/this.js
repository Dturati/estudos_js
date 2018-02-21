console.log(this === global)
console.log(this === module.exports)

function teste(){
    console.log(this === exports)
    console.log(this === global)
    this.perigo = 'David'
}

teste()
this.perigo2 = '...'
console.log(perigo)
console.log(exports.perigo2)