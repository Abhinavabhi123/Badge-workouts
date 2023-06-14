function Person(name,age){
    this.name = name;
    this.age = age;
    this.greet=function(){
        console.log("Hello my Name is "+this.name);
    }
}


const person1 = new Person("Abhinav",21)
const person2 = new Person("Aishu",22)


console.log(person1.name);
console.log(person2.name);
person1.greet()