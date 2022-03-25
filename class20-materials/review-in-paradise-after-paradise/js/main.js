// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let array1 = [1,3,5,3,2,1,3,4,4,2,2,4]
//hi,hi,bye,bye,bye,hi,hi,we..hour,bye,we..hour,hi
function statusShop(arr){
	for (let i=0; i<(arr.length-1); i++){
		if (arr[i] < arr[i+1]) {
			alert("Hi")
		}
		else if (arr[i] > arr[i+1]){
			alert("Bye")	
		}
		else {
			alert("We close in an hour")
		}
	}
}
statusShop(array1)