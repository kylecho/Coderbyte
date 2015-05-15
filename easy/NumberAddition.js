// Number Addition
function NumberAddition(str) {
  var num = str.match(/[0-9]+/g);
  return num.reduce(function(a, b){ return parseInt(a) + parseInt(b); });
}
