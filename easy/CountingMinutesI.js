// Counting Minutes I
function CountingMinutesI(str) {

	var toMinutes = function(timeStr) {  // "1:01am"
		var ampm = timeStr.slice(-2);		   // "am"
		timeStr = timeStr.slice(0, -2);	   // "1:01"
		var hourNmin = timeStr.split(':'); // ["1", "01"]
		if (hourNmin[0] === 12) {
			hourNmin[0] = 0;
		}
		hourNmin[1] = hourNmin[1] * 1; 		 // converts "01" to 1
		return hourNmin[0] * 60 + hourNmin[1] + (ampm === 'pm' ? 12 * 60 : 0);
	};

	var times = str.split('-');
	var time1 = toMinutes(times[0]);
	var time2 = toMinutes(times[1]);
	if (time2 <= time1) {
		time2 += 60 * 24;
	}

	return time2 - time1;
}
