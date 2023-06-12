const obj={
    name:"john",
    greet:function(){
        console.log(`Hello,${this.name}`);
    }
}
"use strict"
obj.greet()

