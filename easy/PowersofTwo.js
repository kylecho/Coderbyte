// Powers of Two
function PowersofTwo(num) {
  if (num < 2) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    return PowersofTwo(num / 2);
  }
}
