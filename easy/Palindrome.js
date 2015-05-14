// Palindrome
function Palindrome(str) {
  var myStr = str.split(' ').join('').split('');
  var myStrReversed = myStr.slice().reverse();
  for (var i = 0; i < myStr.length; i++) {
    if (myStr[i] !== myStrReversed[i]) {
      return false;
    }
  }
  return true;
}
