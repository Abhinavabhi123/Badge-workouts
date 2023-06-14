window.onerror = function(message, url, line, col, error) {
    console.log(`${message} \n ${url} \n ${line} \n ${col} \n ${error}`);
  };
  
  function hello() {
    console.log("Hello!");
  }
  
  function readLine() {
    hello();
  }
  
  readLine();
  