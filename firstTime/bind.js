function greet(name){
    console.log(`Hello, ${name}`);
}

let person={
    name:'john'
}
const result = greet.bind(person)
result("Alice")