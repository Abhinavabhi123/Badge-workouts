function sum(...data) {
  for (let value of data) {
    if (value === 2) {
      return true;
    }
  }
  return false;
}

console.log(sum(1, 2, 3, 4, 5, 6));
