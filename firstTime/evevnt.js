const event = require('events')
const eventEmitter = new event()

eventEmitter.on("click",()=>{
    console.log(`event added`);
})

eventEmitter.emit("click")