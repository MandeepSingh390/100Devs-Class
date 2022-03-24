// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let newVar = "Hello"
newVar = "Noodles with egg and cheese"
alert(newVar)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let anotherNewVar = "Is this a string?"
alert(anotherNewVar.charAt(1))
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function itTakesThree(num1, num2, num3){
	alert(num1/num2*num3)
}
itTakesThree(4,2,2)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num1){
	console.log(Math.cbrt(num1).toFixed(4))
}
cubeRoot(16)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthYayOrNay(month){
	monthLowerCase = month.toLowerCase()
	if (monthLowerCase == "march" || month == "april" || month == "may" || month == "june" || month == "july"){
		alert("YAY")
	}
	else{
		alert("Booo")
	}
}
monthYayOrNay("March")
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function fiveMultipleNoEntry(notFive){
	for (let i=1; i<=notFive; i++){
		if ( i%5 !== 0){
			console.log(i)
		}
	}
}
fiveMultipleNoEntry(100)