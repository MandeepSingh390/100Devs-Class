//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwo(num1, num2){
	alert(num1 - num2)
}
subTwo(420, 69)
//create a function that divides three numbers and console logs the quotient
function divThree(num1, num2, num3){
	console.log(num1/num2/num3)
}
divThree(100, 2, 5)
//create a function that multiplys three numbers and returns the product
function mulThree(num1, num2, num3){
	return(num1*num2*num3)
}
console.log(mulThree(2, 2, 2))
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function midThree(num1, num2, num3){
	return((num1+num2)%num3)
}
console.log(midThree(2, 3, 2))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hardFour(num1, num2, num3, num4){
	let mulTwo = num1*num2
	if ( mulTwo > 100){
		console.log(num3+num4)
	}
	else if (mulTwo < 100){
		console.log(num3-num4)
	}
	else{
		alert((num1*num2*num3)%num4)
	}
}
hardFour(51, 2, 3, 4)