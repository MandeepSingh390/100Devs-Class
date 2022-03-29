//Create a stopwatch object that has four properties and three methods
let stopwatch = {}
let date = new Date();
stopwatch.currentHour = [date.getHours()];
stopwatch.currentMinute = [date.getMinutes()];
stopwatch.currentSecond = [date.getSeconds()];
stopwatch.color = "Gray";

stopwatch.tellTime = function(hour,minute,second){
	console.log(`Time now is ${hour}:${minute}:${second}`)
}

stopwatch.tellTime(stopwatch.currentHour,stopwatch.currentMinute,stopwatch.currentSecond)

stopwatch.style = function(color){
	console.log(`Color of the watch is ${color}`)
}

//stopwatch.style(stopwatch.color)

stopwatch.start = function(){
	alert("Started")
}


stopwatch.updateTime = function(){
	date = new Date();
	stopwatch.currentHour = [date.getHours()];
	stopwatch.currentMinute = [date.getMinutes()];
	stopwatch.currentSecond = [date.getSeconds()];
}
