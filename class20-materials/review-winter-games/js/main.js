//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
let array1 = [1,2,4,7,1,4,5,2,6,7,5,2,6,7]
function oddEven(arr){
	let evenArray = []
	arr.forEach( x => {
		if (x%2 == 0) {
			evenArray.push(x)
		}
	})
	return(evenArray)
}
console.log(oddEven(array1))