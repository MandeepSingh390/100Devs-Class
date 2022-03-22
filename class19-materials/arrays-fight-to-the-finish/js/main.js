//Create an array of movie titles. Loop through the array and each element to the h2.
let movieArray = ['cars1','cars2','cars3']
movieArray.forEach((x)=>document.querySelector('h2').innerText += " " + (x))
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numberArray = [1,2,3,4,5]
// for (let i=0;i<numberArray.length;i++){
// 	numberArray[i] += 3
// }
numberArray.forEach((item, i) => {
	numberArray[i] = item + 3
})
console.log(numberArray)
//Find the average of all the numbers from question three
let newNum = 0
for (let i=0;i<numberArray.length;i++){
	newNum += numberArray[i]
	// console.log(newNum)
}
console.log(newNum)