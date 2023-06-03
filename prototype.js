let animal ={
    eats:true
}
let rabbit={
    jumps:true,
    // eats:false
}
animal.__proto__=rabbit;
// rabbit.__proto__=animal;
console.log(animal.jumps);