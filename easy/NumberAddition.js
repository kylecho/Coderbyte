/* Have the function numberSearch(str) take the str parameter, search for all numbers
 * in string, add them together, then return that final number
 *
 * For exmaple:
 * if str is "88Hello 3World!" the output should be 91.
 * You will have to differentiate between single digit numbers and multiple digit numbers
 * like in the example above. So "55Hello" and "5Hello 5" should return two different answers.
 */

function numAddition(str) {
	var myArr = str.match(/\d+/g);
	var myNum = myArr.reduce(function(cur, prev) { return +cur + +prev; });
	return +myNum;
}
