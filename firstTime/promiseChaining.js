function delay(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
    })
}



delay(1000).then(()=>{
    console.log("First promise resolved");
    return delay(2000)
}).then(()=>{
    console.log("Second promise resolved");
    return delay(3000)
}).then(()=>{
    console.log("Third promise resolved");
}).catch((error)=>{
    console.error('Error:',error);
})