// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let var1 = "this"
var1 = "Diwali"
console.log(var1.toUpperCase())
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let var2 = "This is a String"
alert(var2.slice((var2.length - 3),(var2.length)))
// console.log(var2)
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takesFive(num1, num2, num3, num4, num5){
	let difference = (100 - num1 - num2 -num3 - num4 - num5)
	alert( Math.abs(difference))
}
takesFive(50,25,12.5,6.25,3.125)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowToHigh(num1, num2, num3){
	console.log(`${num1} ${num2} ${num3}`)
	let min = Math.min(num1,num2,num3)
	let max = Math.max(num1,num2,num3)
	console.log(`${min} ${max}`)
}
lowToHigh(Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100))
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function headsOrTails(){
// 	let toss = Math.random()
// 	if (toss < 0.5) {
// 		return ("Heads")
// 	}
// 	else {
// 		return ("Tails")
// 	}
// }
// console.log(headsOrTails())
const headsOrTails = _ => Math.random() < 0.5 ? 'heads' : 'tails'
console.log(headsOrTails())
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function headsOrTailsMultiple(num1){
	for (let i = 0; i < num1; i++) {
		console.log(headsOrTails())
	}
}
headsOrTailsMultiple(5)