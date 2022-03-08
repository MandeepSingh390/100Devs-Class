//Write your pseduo code first! 

document.querySelector('#toF').addEventListener('click', toFarhan)
document.querySelector('#toC').addEventListener('click', toCellsius)

function toFarhan(){
	let temp = document.querySelector('#temp').value
	const newTemp = temp * 9/5 + 32
	document.querySelector('#result').innerText = newTemp
}

function toCellsius(){
	let temp = document.querySelector('#temp').value
	const newTemp = (temp - 32) * 5/9
	document.querySelector('#result').innerText = newTemp
}

// document.querySelector('#ftoc').addEventListener('click', toCelsius)
// document.querySelector('#ctof').addEventListener('click', toFarhan)

// function toCelsius(){
// 	let maff = document.querySelector('#temp').value
// 	const result = maff * 9/5 + 32
// 	document.querySelector('#result').innerText = `${result}`
// }

// function toFarhan(){
// 	let maff = document.querySelector('#temp').value
// 	const result = (maff - 32) * 5/9
// 	document.querySelector('#result').innerText = `${result}`
// }