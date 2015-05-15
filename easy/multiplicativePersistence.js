// Multiplicative Persistence
function MultiplicativePersistence(num) {
  var count = 0;

  var reduceToSingleNum = function recursion(num) {
    var myNum = num.toString();
    if (myNum.length === 1) {
      return true;
    } else {
      count++;
      myNum = myNum.split('');
      myNum = myNum.reduce(function(a, b) { return parseInt(a) * parseInt(b); });
    } return recursion(myNum);
  };

  reduceToSingleNum(num);
  return count;
}
