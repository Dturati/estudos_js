const fun2 = function(){
    setTimeout(function(){
            console.log('fun1')
    },2000)
}

const fun3 = function(){
    setTimeout(function(){
            console.log('fun3')
    },2000)
}
const fun1 = function(fun2,fun3){
    console.log('Fun1')
}

fun1(fun2(),fun3);
