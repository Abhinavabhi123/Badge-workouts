function * generator(){
    yield 1;
    yield 2;
    return 3;
}

const result = generator()

// let one =result.next()
// console.log(one);
// console.log(result.next());
// console.log(result.value);
// console.log(result.next());

for(let value of result){
    console.log(value);
}