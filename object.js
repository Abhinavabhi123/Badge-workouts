let user = {
    name:"John",
    age:20
}

user.sayHello=()=>{
    console.log("hello");
}
console.log(user);

user.sayHello()
user = null

console.log(user);

const data = {};

console.log(data?.name?.take?.data);
