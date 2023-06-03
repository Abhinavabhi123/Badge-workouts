function fetchData() {
  return new Promise((resolve,reject)=>{
    let data;

        data = {name:"john",age:30}
    
    if(data){
      resolve(data)
    }else{
      reject("error")
    }
  })
}

fetchData().then(data=>{
  console.log("fetch data:",data);
}).catch((error)=>{
  console.error('Error',error);
})