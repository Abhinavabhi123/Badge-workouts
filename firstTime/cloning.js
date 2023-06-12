let array = [1,2,3,4,5,6,7]

// using slice operator
let array2 = array.slice()
console.log(array2,"array2");

// using concat() method
let array1 = [].concat(array)
console.log(array2);

// using Array.from() 
let array4 = Array.from(array)
console.log(array2);


// using Spread Operator
let array3 = [...array]
console.log(array3);