//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
let product = 1
let array1 = [1,2,3,4,5]
function alertProduct(arr){
	arr.forEach((x) => { product *= x})
	alert(product);
}
alertProduct(array1)