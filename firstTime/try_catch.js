function hello(){
    try {
        const result = 10/2;
        console.log("hello");
       if(result===Infinity){
        throw new Error("Can't divide 10 with 0")
       }
       console.log(result,"this is the result");
    } catch (error) {
        console.log('podo');
        console.log("There is an error",error);
    }
}
hello()