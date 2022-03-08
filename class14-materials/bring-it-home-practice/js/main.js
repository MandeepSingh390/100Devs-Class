// *Variables*
// Create a variable and console log the value
let var1 = 69
console.log(var1)

// Create a variable, add 10 to it, and alert the value
let var2 = 410
alert(var2 + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour(num1, num2 , num3 , num4){
	sub = num1 - num2 - num3 - num4
	alert(sub)
}
subFour(100, 50, 25, 12.5)

// Create a function that divides one number by another and returns the remainder
function divideTwo(num1, num2){
	div = num1 / num2
	return(div)
}
console.log(divideTwo(16, 4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(num1, num2){
	sum = num1 + num2
	if (sum > 50){
		alert('jumanji')
	}
}
addTwo(45, 6)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiThree(num1, num2, num3){
	mul = num1 * num2 * num3
	if (mul % 3 == 0){
		alert("Zebra")
	}
}
multiThree(2, 3, 3)