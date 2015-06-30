function Division(num1,num2) {
  var nums = [];
  for (var i = 0; i <= num1; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      nums.push(i);
    }
  }
  return nums.pop();
}
