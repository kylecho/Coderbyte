// Arith Geo
function ArithGeo(arr) {
  var result = -1;
  var isArithmetic = function(arr) {
  	for (var i = arr.length - 1; i >= 2; i--) {
      if (arr[i] - arr[i-1] !== arr[i-1] - arr[i-2]) {
        return result;
      }
    }
    result = 'Arithmetic';
  };
  var isGeometric = function(arr) {
  	for (var i = arr.length - 1; i >= 2; i--) {
      if (arr[i] / arr[i-1] !== arr[i-1] / arr[i-2]) {
        return result;
      }
    }
    result = 'Geometric';
  };
  isArithmetic(arr);
  isGeometric(arr);
  return result;
}
