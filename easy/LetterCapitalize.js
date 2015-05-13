// Letter Capitalize
function LetterCapitalize(str) {
  var myStr = str.toLowerCase().split(' ');
  var result = [];
  
  for (var i = 0; i < myStr.length; i++) {
    var temp = myStr[i].split('');
    temp[0] = temp[0].toUpperCase();
    temp = temp.join('');
    result.push(temp);
  }
  
  return result.join(' ');
}
