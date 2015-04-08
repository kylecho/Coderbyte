/**
 * Have the function firstReverse(str) take the str paramenter being passed
 * and return string in reversed order.
 */

function firstReverse(str) {
	var myStr = '';
	for (var i = str.length - 1; i >= 0; i--) {
		myStr += str.charAt(i);
	}

	return myStr;
}

firstReverse('Hello World!'); // !dlroW olleH