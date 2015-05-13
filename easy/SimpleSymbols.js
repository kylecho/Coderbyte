// Simple Symbols
function SimpleSymbols(str) {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  var myStr = str.split('');
  for (var i = 0; i < myStr.length; i++) {
    if (alpha.indexOf(myStr[i]) !== -1 && (myStr[i - 1] !== '+' || myStr[i + 1] !== '+')) {
      return false;
    }
  }
  return true;
}
