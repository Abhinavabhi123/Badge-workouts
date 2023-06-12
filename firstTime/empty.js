const fs = require("fs");


const data =fs.readFileSync("./index.js",(error)=>{
    if(error){
        console.error(error);
    }else{
        console.log("Success");
    }
})

console.log(data);