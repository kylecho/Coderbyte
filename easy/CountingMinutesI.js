// Counting Minutes I (This is a wrong answer only works partially)
function CountingMinutesI(str) {
  var myStr = str.split('-');
  var time1Hr = (myStr[0].length === 6) ? myStr[0].substring(0, 1) : myStr[0].substring(0, 2),
  		time1Min = (myStr[0].length === 6) ? myStr[0].substring(2, 4) : myStr[0].substring(3, 5),
  		time1ampm = (myStr[0].length === 6) ? myStr[0].substring(4) : myStr[0].substring(5),
  		time2Hr = (myStr[1].length === 6) ? myStr[1].substring(0, 1) : myStr[1].substring(0, 2),
  		time2Min = (myStr[1].length === 6) ? myStr[1].substring(2, 4) : myStr[1].substring(3, 5),
  		time2ampm = (myStr[1].length === 6) ? myStr[1].substring(4) : myStr[1].substring(5);

  var convertTo24hours = function(hr,min,ampm) {
  	// do something to convert time from 12 hrs base to 24 hrs base
  	if (ampm.toLowerCase() === 'am') {
  		if (hr === '12') {
  			hr = '00';
  		}
  	} else {
  		if (hr === '11' || hr.length === 1) {
  			hr = (+hr + 12).toString();
  		}
  	}
  	return [hr, min];
  };

  var time1 = convertTo24hours(time1Hr, time1Min, time1ampm); // [ 1, 23 ]
  var time2 = convertTo24hours(time2Hr, time2Min, time2ampm); // [ 1, 08 ] work correctly upto this point.
  var result = [];
  // if time1's hr is before time2's hr
  if (time1[0] < time2[0]) {
  	if (time1[1] < time2[1]) {				// "3:15am-11:20am" => 485
	  	result.push(+time2[0] - +time1[0]);
  		result.push(+time2[1] - +time1[1]);
  	} else if (time1[1] > time2[1]) {	// "3:50am-11:30am" => 460
	  	result.push(+time2[0] - +time1[0] - 1);
  		result.push((60 - +time1[1]) + (60 - +time2[1]));
  	} else {													// "3:00am-11:00am" => 480
	  	result.push(+time2[0] - +time1[0]);
  		result.push('00');
  	}
  }
  // if time1's hr is after time2's hr
  if (time1[0] > time2[0]) {
  	if (time1[1] < time2[1]) { 				// "11:13pm-3:41pm" => 988
	  	result.push(+(24 - time1[0]) + +time2[0]);
  		result.push(+time2[1] - +time1[1]);
  	} else if (time1[1] > time2[1]) { // "11:41pm-3:13pm" => 932
	  	result.push(+(24 - time1[0]) + +time2[0] - 1);
  		result.push(+(60 - time1[1]) + +time2[1]);
  	} else { 													// "11:00pm-3:00pm" => 960
	  	result.push(+(24 - time1[0]) + +time2[0]);
  		result.push('00');
  	}
  }
  // if time1's hr is same as time2's hr
  if (time1[0] == time2[0]) {
  	if (time1[1] < time2[1]) {				// "7:01pm-7:55pm" => 54
	  	result.push('00');
  		result.push(time2[1] - time1[1]);
  	} else if (time1[1] > time2[1]) { // "6:55pm-6:01pm" => 1386
	  	result.push('23');
  		result.push(+(60 - time1[1]) + +time2[1]);
  	} else {													// "6:00pm-6:00pm" => 0
	  	result.push('00');
  		result.push('00');
  	}
  }

  return '' + (result[0] * 60) + result[1];
}

CountingMinutesI("1:23am-1:08am");
//Input = "1:23am-12:08am"Output = 1425
