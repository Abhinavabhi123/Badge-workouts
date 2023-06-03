function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "john", age: 30 };
    callback(null, data);
  }, 2000);
}

function handle(error, data) {
   
  if (error) {
    console.error("error", error);
  } else {
    console.log("data fetched", data);
  }
}

fetchData(handle)
