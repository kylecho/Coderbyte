// Alphabet Soup
function AlphabetSoup(str) {
  var myStr = str.split('');
  var compare = function(a, b) {
  	if (a > b) {
      return 1
    } else {
      return -1
    }
  };
  myStr.sort(compare);
  return myStr.join('');
}
