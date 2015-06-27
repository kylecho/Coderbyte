function PrimeMover(num) {
  function isPrime(n) {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  var data = [];
  for (var i = 2; i < 10000; i++) {
    if (isPrime(i)) {
      data.push(i);
    }
  }
  
  return data[num - 1];
}
