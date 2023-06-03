// class Animal {
//   constructor(name) {
//     this.name = name;
//     this.speed = 0;
//   }
//   run(speed) {
//     this.speed = speed;
//     return `${this.name} runs with speed ${this.speed}`;
//   }
//   stop() {
//     this.speed = 0;
//     return `${this.name} stand still`;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super()
//     this.category=null;
//     this.age=0;
//     this.name=name
//   }
//   hide() {
//     return `${this.name} hides`;
//   }
//   details(cat,age){
//     this.category=cat;
//     this.age=age
//     return "added"
//   }
// }

// const rabbit = new Rabbit("dark");
// console.log(rabbit);
// console.log(rabbit.hide());
// console.log(rabbit.details("man",20));
// const animal=new Animal()
// console.log(animal);

class Coffee {
  #water = 0;
  get water() {
    return this.#water;
  }
  set water(value) {
    if (value < 0) {
      value = 0;
    } else {
      this.#water = value;
    }
  }
}

let machine = new Coffee();
machine.water = 100;
console.log(machine);
