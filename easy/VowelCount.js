// Vowel Count
function VowelCount(str) {
  var vowels = 'aeiou';
  var myStr = str.toLowerCase().split('');
  var counter = 0;
  for (var i = 0; i < myStr.length; i++) {
    if (vowels.indexOf(myStr[i]) !== -1) {
      counter++;
    }
  }
  return counter;
}
