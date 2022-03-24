//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let favTvShows = ['How I Met Your Mother', 'Two and a Half Men', 'Breaking Bad']
favTvShows.forEach((x)=> console.log(x))
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numberArray = [1,2,12,25,5,11,51,18,4,6,8]
let evenNumberArray = arr => arr.filter( n => n% 2 === 0)
console.log(evenNumberArray(numberArray))
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function arrayArray(arr){
	let sorted = arr.sort((a,b)=> a-b)
	console.log(sorted)
	alert(sorted[1]+sorted[sorted.length-2])
}
arrayArray(numberArray)