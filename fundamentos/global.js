let a = 3
global.b = 4
this.c = 5

console.log(a)

console.log(this.a)

console.log(this.b)
module.exports.a = 98
console.log(this)