// *Variables*
// Declare a variable, assign it a value, and alert the value
let var1 = 69
alert(var1)
// Create a variable, divide it by 10, and console log the value
let var2 = 1000
console.log(var2/500)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiThree(num1,num2,num3){
	alert(num1*num2*num3)
}
multiThree(5,3,2)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function subTwo(num1,num2,num3,num4){
	console.log(num1+num2)
	console.log(num3-num4)
}
subTwo(5,1,6,3)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function divThree(num1,num2,num3){
	let var3 = 100
	var3 += num1
	var3 -+ num2
	var3 /= num3
	if (var3 > 25){
		console.log("WE HAVE A WINNNA")
	}
}
divThree(1000,448,2)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function takesTwo(str){
	str = str.toLowerCase()
	if (str == 'sunday' || str == 'saturday' || str == 'friday'){
		console.log("weekend")
	}
	else if(str == 'monday' || str == 'tuesday' || str == 'wednesday' || str == 'thrusday'){
		console.log('WeekDay')
	}
	else{
		console.log('Please Enter a proper day')
	}
}
takesTwo('Tuesday')
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function takesOne(num1){
	for (let i = 0; i <= num1; i+=3) {
		console.log(i)
	}
}
takesOne(69)