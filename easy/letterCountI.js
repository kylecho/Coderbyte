// Letter Count I
function LetterCountI(str) {
  
  // Compare function should be carefully set up.
  var compare = function(a, b) {
      if (a < b) {
          return -1;
      } else if (a > b) {
          return 1;
      } else {
          return 0;
      }
  };
  
  var copy = str.split(' ').slice();
  var myArr = copy.slice();
  var max = 0;   // Must be initiated with 0
  var count = 0; // Must be initiated with 0
  var theIndex;
  var word;

  for (var i = 0; i < myArr.length; i++) {
    word = myArr[i].split('').sort(compare);
    for (var j = 0; j < word.length - 1; j++) {
      if (word[j] === word[j + 1]) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      theIndex = i;
      count = 0;
    }
  }
  
  return (theIndex !== undefined) ? copy[theIndex] : -1;
}
