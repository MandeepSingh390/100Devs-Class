// *Variables*
// Create a variable and console log the value
let var1 = 69
console.log(var1)
// Create a variable, add 10 to it, and alert the value
let var2 = 15
alert(var2 + 10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(num1,num2,num3,num4){
	alert(num1-num2-num3-num4)
}
subFour(1000,500,250,125)
// Create a function that divides one number by another and returns the remainder
function divideFour(num1,num2){
	return(num1%num2)
}
console.log(divideFour(5,2))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sumTwo(num1,num2){
	let sum = num1 + num2
	if (sum > 50){
		alert("Jumanji")
	}
}
sumTwo(49,2)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mulThree(num1,num2,num3){
	let product = num1 * num2 * num3
	if (product % 3 == 0){
		alert("Zebra")
	}
}
mulThree(3,2,1)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordNum(str,num1){
	for (let i=1; i < num1; i++){
		console.log(str)
	}
}
wordNum("bob",6)