function PalindromeTwo(str) {
  var myStr = str.match(/[a-z]+/ig).join('').toLowerCase().split('');
  var myStrReversed = myStr.slice().reverse();
  for (var i = 0; i < myStr.length; i++) {
    if (myStr[i] !== myStrReversed[i]) {
      return false;
    }
  }
  return true;
}
