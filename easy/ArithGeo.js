/**
 * Have the function ArithGeo(arr) take the array of numbers stored in arr and
 * return the string 'Arithmetic' if the sequence follows an arithmetic pattern or
 * return 'Geometric' if it follows a geometric pattern. If the sequence doesn't follow
 * either pattern return -1.
 * 
 * An arithmetic sequence is one where the difference between each of the numbers is
 * consistent, whereas in a geometric sequence, each item after the first is multiplied by
 * some constant or common ratio.
 *
 * Arithmetic example: [2, 4, 6, 8]
 * Geometric example: [2, 6, 18, 54]
 *
 * Negative numbers my be entered as parameters, 0 will not be entered, and no array will
 * contain all the same elements.
 *
 */

function ArithGeo(arr) {
	for (var i = 0; i < arr.length - 2; i++) {
		if (arr[i + 1] - arr[i] == arr[i + 2] - arr[i + 1]) {
			return 'Arithmetic';
		} else if (arr[i + 1] / arr[i] == arr[i + 2] / arr[i + 1]) {
			return 'Geometric';
		} else {
			return -1;
		}
	}
}

var arr = [2, 4, 6, 8];
ArithGeo(arr);
// -> 'Arithmetic'

/**
 * Incorrect test cases
 * When the input was (1,2,3,4,5,10,20) your output was incorrect.
 * When the input was (1,2,3,4,5,6,7,88,2) your output was incorrect.
 * When the input was (10,110,210,310,410,511) your output was incorrect.
 */
