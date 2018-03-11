const schedule = require('node-schedule')

const tarefaUm = schedule.scheduleJob('*/1 * 11 * * 0',function(){
    console.log('aqui')
})


setTimeout(function(){
    tarefaUm.cancel()
    console.log('cancelado')
},5000)

