const array = [1,2,3,4,5,6,7,8,9];
const array1 =[1,2,3,4,5,6,7,8,]
const copy =[...array]

const result = new Array(...array,...array1)
console.log(copy);