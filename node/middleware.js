const passoUm = (ctx,next) => {
    ctx.valorUm = 'mid1'
    next()
}

const passoDois = (ctx,next) => {
    ctx.valorDois = 'mid2'
    next()
}

const passoTres = (ctx,next) => {
    ctx.valorTres = 'mid3'
}

const exec = (ctx,...middlewears) => {
    const execPasso = (indice) => {
        middlewears && indice < middlewears.length && middlewears[indice] &&
            middlewears[indice](ctx,()=>execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx,passoUm,passoDois,passoTres)

console.log(ctx);

