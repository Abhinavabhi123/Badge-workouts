function curr(a){
    console.log(a,"first");
    return function(b){
        console.log(b,"second");
        return function(c){
            console.log(c,"third");
            return a+b+c
        }
    }
}

console.log(curr(1)(2)(3));