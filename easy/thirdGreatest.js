// Third Greatest
function ThirdGreatest(strArr) {
  var myArr = strArr.slice(); // make a copy
  myArr.sort(function(a, b){ return b.length - a.length; });
  return myArr[2];
}
