/**
 * Have the function multiplicativePersistence(num) take the num parameter being passed
 * which will always be a positive integer and return its multiplicative persistence which is the number of times
 * you must multiply the digits in num until you reach a single digit.
 * 
 * For example: if num is 39 then your program should return 3
 * because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.
 */

function multiplicativePersistence(num) {

	var counter = 0;

	function recursion(num) {
		var myNum = num.toString().split('');
		if (myNum.length === 1) {
			return counter;
		} else {
			counter++;
			return recursion(myNum.reduce(function(cur, prev) {
				return cur * prev;
			}));
		}
	}

	recursion(num);
	return counter;
}
