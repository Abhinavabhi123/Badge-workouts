const Emitter = require("events");
const EventEmitter =  new Emitter()

EventEmitter.on("click",()=>{
    console.log("event added");
})
EventEmitter.emit("click")