//import event module
const events = require('events')

//create an eventEmitter object for manage events
const eventEmitter=new  events.EventEmitter()

//create an event
// sayhi =>event name   
//parametre olmayacaksa (name) parametresi koyulmaz
eventEmitter.on('sayhi', (name)=>{
    console.log('Hi..!',name)
})

//trigger an event
eventEmitter.emit('sayhi')

//trigger an event once
// eventEmitter.once('sayhi')

let counter=0
setInterval(()=>{
    counter++;
    console.log(counter)
    //paramtere ile event tetikleme
    eventEmitter.emit('sayhi','John')
},1000)