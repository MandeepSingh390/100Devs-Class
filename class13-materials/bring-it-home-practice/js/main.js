// *Variables*
// Create a variable and console log the value
let var1 = 69
console.log(var1)

// Create a variable, add 10 to it, and alert the value
let var2 = 410
alert(var2 + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(num1, num2, num3, num4){
	let ans = num1 - num2 - num3 - num4
	alert(ans)
}
subFour(100, 50, 25, 12.5)

// Create a function that divides one number by another and returns the remainder
function divideTwo(num1,num2){
	let ans = num1 / num2
	return (ans)
}
console.log(divideTwo(16, 4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(num1, num2){
	let ans = num1 + num2
	if (ans > 50) {
		alert("Jumanji")
	}
}
addTwo(49,2)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mulThree(num1, num2, num3){
	let ans = num1 * num2 * num3
	if (ans % 3 == 0){
		alert("Zebra")
	}
}
mulThree(2,3,3)