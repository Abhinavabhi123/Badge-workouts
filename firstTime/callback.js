function hello(callback){
  setTimeout(()=>{
    const data = {name:"Abhinav"}
    callback(true,data)
  },2000)
}

function handler(error,data){
  if(error){
   throw new Error(`error while fetching the data form the server`)
  }else{
    console.log(data);
  }
}

hello(handler)