// Ex Oh
function ExOh(str) {
  var myStr = str.toLowerCase().split('');
  var countX = 0;
  var countO = 0;
  for (var i = 0; i < myStr.length; i++) {
    if (myStr[i] === 'x') {
      countX++;
    } else if (myStr[i] === 'o') {
      countO++;
    }
  }
  return (countX === countO) ? true : false;
}
