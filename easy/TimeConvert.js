// Time Convert
function TimeConvert(num) {
	var mins = num % 60;
	var hrs = Math.floor(num / 60);
	return '' + hrs + ':' + mins;
}
