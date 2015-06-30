function StringScramble(str1,str2) {
  var result = true;
  for (var i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) === -1) {
      result = false;
    }
  }
  return result;
}
