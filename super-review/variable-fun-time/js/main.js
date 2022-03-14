//--- Easy
//create a variable and assign it a number
let var1 = 69
//minus 10 from that number
var1 -= 10
//print that number to the console
console.log(var1)
//--- Medium
//create a variable that holds a value from the input
let var2 = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
var2 += 25
//alert that number
alert(var2)
//--- Hard
//create a variable that holds the h1
const headOne = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
headOne.addEventListener('click', logConsole)

function logConsole(){
	console.log(var1 + parseInt(var2))
}