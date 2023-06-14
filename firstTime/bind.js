function greet(name){
    console.log(`hello:${name}`);
}

const person={
    name:"Abhinav"
}

const result =greet.bind(person)

result("aishu")