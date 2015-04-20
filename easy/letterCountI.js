/**
 * Letter Count I
 * 
 * Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest
 * number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 
 * 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1.
 *
 * Words will be separated by spaces.
 */

function LetterCountI(str) {
  var result = str.split(' ');
  var myArr = result.slice();
  var greatest = 0;
  var current = 0;
  var index = 0;
  
  for (var i = 0; i < myArr.length; i++) {
    myArr[i] = myArr[i].split('').sort().join('');
    for (var j = 0; j < myArr[i].length-1; j++) {
      if (myArr[i][j] === myArr[i][j+1]) {
       	current++; 
      }
    }
    if (current > greatest) {
      greatest = current;
      current = 0;
      index = i;
    } else if (current < greatest) {
      current = 0; 
    }
  }
  return (greatest !== 0) ? result[index] : -1;
}
