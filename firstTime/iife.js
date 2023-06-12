// (()=>{
//     console.log("hello");
// })()

let user={
    name:"John",
    main:function(){
        console.log(`Hello, ${this.name}`)
    }
}
setTimeout(user.main,1000)