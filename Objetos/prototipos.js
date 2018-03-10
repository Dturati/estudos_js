var myObject = {
    name : 'David'
}

var myObjectTwo = Object.create(myObject)
var myObjectTwo = Object._proto_(myObject)
console.log(myObjectTwo)
