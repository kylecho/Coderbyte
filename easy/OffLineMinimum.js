// Off Line Minimum
function OffLineMinimum(strArr) {
  var myArr = strArr.slice();
  var tempArr;
  var result = [];
  for (var i = 0; i < myArr.length; i++) {
    if (myArr[i] === 'E') {
      tempArr = myArr.slice(0, i + 1).sort(function(a, b){ return parseInt(a) - parseInt(b); });
      result.push(tempArr[0]);
      myArr.splice(i, 1); // remove 'E'
      myArr.splice(myArr.indexOf(tempArr[0]), 1); // remove 'the num'
      i = i - 2;
    }
  }
  return result.join(',');
}
