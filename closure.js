function x() {
    var a = 10;
    function y() {
      console.log(a);
    }
    return y;
  }
  console.log(x());
  let result = x();
  result();
  