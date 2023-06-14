function callback() {
  setTimeout(() => {
    console.log(`first`);
    setTimeout(() => {
      console.log(`second`);
      setTimeout(() => {
        console.log(`third`);
        setTimeout(() => {
          console.log(`fourth`);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}
callback();
