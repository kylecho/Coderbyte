/**
 * Have the function swapCase(str) take the str parameter and swap the case of each character.
 * For example: if str is "Hello World" the output should be hELLO wORLD.
 * Let numbers and symbols stay the way they are.
 */

function swapCase(str) {
	var myArr = str.split('');
	for (var i = 0; i < myArr.length; i++) {
		if (myArr[i] == myArr[i].match(/[a-z]/)) {
			myArr[i] = myArr[i].toUpperCase();
		} else if (myArr[i] == myArr[i].match(/[A-Z]/)) {
			myArr[i] = myArr[i].toLowerCase();
		}
	}

	return myArr.join('');
}
