// Swap Case
function SwapCase(str) {
  var upper = 'abcdefghijklmnopqrstuvwxyz';
  var lower = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var myStr = str.split('');
  var result = '';
  for (var i = 0; i < myStr.length; i++) {
    if (upper.indexOf(myStr[i]) !== -1) {
      result += lower[upper.indexOf(myStr[i])];
    } else if (lower.indexOf(myStr[i]) !== -1) {
      result += upper[lower.indexOf(myStr[i])];
    } else {
      result += myStr[i];
    }
  }
  return result;
}
