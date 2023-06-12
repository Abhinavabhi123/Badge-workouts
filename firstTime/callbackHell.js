function hai(){
    setTimeout(()=>{
        console.log("hello");
        setTimeout(()=>{
            console.log("world");
            setTimeout(()=>{
                console.log("goodbye");
            },2000)
        },2000)
    },2000)
}

hai()