// Dash Insert
function DashInsert(num) {
	var num = num.toString().split('');
	var result = [];
	for (var i = 0; i < num.length; i++) {
		result.push(num[i]);
		if (num[i] % 2 !== 0 && num[i+1] % 2 === 1) { // For the last i, it becomes (undefined % 2 === 1) which is (NaN === 1) that's 'false'.
			result.push('-');														// But if we used (num[i+1] % 2 !== 0), it means (undefined % 2 !== 0) which is (NaN !== 0) that's 'true'.
		}																							// It will add '-' to the end of the last index.
	}
	return result.join('');
}

// Another version using .splice()
function dashInsert(str) {
	var num = str.split('');
	for (var i = 0; i < num.length - 1; i++) {
		if (num[i] % 2 !== 0 && num[i + 1] % 2 !== 0) {
			num.splice(i + 1, 0, '-');
			i++;																				// Incrementing i each time a dash is added is important step.
		}
	}
	
	return num.join('');
}
