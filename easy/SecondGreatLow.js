// Second GreatLow
function SecondGreatLow(arr) {
	var unique = [arr[0]];
	// Using indexOf() to determine unique elements
	for (var i = 0; i < arr.length; i++) {
		if (unique.indexOf(arr[i]) === -1) {
			unique.push(arr[i]);
		}
	}
	// Check if all elements are identical
	if (arr.every(function(element){ return element === arr[0]; })) {
    unique.push(arr[0]);
  }
	
	unique.sort(function(a, b){ return a - b; });
	var smallest = unique[1].toString();
	
	// Reverse the array to find the largest
	unique.reverse();
	var largest = unique[1].toString();
	return smallest + ' ' + largest;

}

