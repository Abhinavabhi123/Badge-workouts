const { json } = require("express")

const user={
    name:"john",
    age:20,
    place:"New York",
    job:"Engineer"
}

const data=JSON.stringify(user)
console.log(typeof data);


function sum(...data) {
    let sum=0;
    for(let value of data){
        sum +=value
    }
    return sum
}

console.log(sum(1,2,3,4,5,6));