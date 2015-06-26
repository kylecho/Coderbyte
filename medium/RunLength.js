function RunLength(str) {
  var groups = str.match(/([a-z])\1*/g);
  var result = '';
  groups.forEach(function(elem){
  	result += elem.length + elem[0];
  });
  return result;
}

RunLength(readline());
