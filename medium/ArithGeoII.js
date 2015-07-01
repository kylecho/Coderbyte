function ArithGeoII(arr) {
  var isArith = function(arr) {
    var diff;
    for (var i = 0; i < arr.length - 1; i++) {
      if (diff === undefined) {
        diff = Math.abs(Math.abs(arr[i]) - Math.abs(arr[i + 1])); 
      }
      if (arr[i] + diff !== arr[i + 1]) {
        return false;
      }
    }
    return true;
  };
  
  var isGeo = function(arr) {
    var diff;
    for (var i = 0; i < arr.length - 1; i++) {
      if (diff === undefined) {
        diff = Math.abs(Math.abs(arr[i + 1]) / Math.abs(arr[i])); 
      }
      if (arr[i] * diff !== arr[i + 1]) {
        return false;
      }
    }
    return true;
  };
  
  if (isArith(arr)) {
    return "Arithmetic";
  } else if (isGeo(arr)) {
    return "Geometric";
  } else {
    return -1;
  }
}
