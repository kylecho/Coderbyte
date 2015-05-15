// Additive Persistence
function AdditivePersistence(num) {
  var count = 0;
  
  var reduceToSingleNum = function recursion(num) {
    var myNum = num.toString();
    if (myNum.length === 1) {
      return true;
    } else {
      myNum = myNum.split('');
      count++;
      myNum = myNum.reduce(function(a, b) { return parseInt(a) + parseInt(b); });
    } return recursion(myNum);
  };

  reduceToSingleNum(num);
  return count;
}
