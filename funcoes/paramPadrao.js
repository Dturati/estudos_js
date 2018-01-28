function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1(1,2,3))

console.log(soma1())

console.log(soma1(1))

console.log(soma1(1,2))

console.log(soma1(1,2,3))