function ArrayAddition(arr) {
	var largest = arr.sort(function(a, b){ return a - b; }).pop();
	
	var recursion = function recursion(target, array) {
		if (array.length === 0) {
			return target === 0;
		} else {
			var n = array[0];
			array = array.slice(1);
			return recursion(target, array) ||
			       recursion(target - n, array);
		}
	};

	return recursion(largest, arr);
}
