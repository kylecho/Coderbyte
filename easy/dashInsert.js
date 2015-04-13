/**
 * Have the function dashInsert(str) insert dashes ('-') between each two odd numbers in str.
 * For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
 */

function dashInsert(str) {
	var num = str.split('');
	for (var i = 0; i < num.length - 1; i++) {
		if (num[i] % 2 !== 0 && num[i + 1] % 2 !== 0) {
			num.splice(i + 1, 0, '-');
			i++;
		}
	}
	
	return num.join('');
}
