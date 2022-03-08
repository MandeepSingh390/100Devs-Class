//Write your pseduo code first! 
//Take input
//Use maffs
	// (input - 32) * 5/9
//Output

document.querySelector('#toF').addEventListener('click', toFarhan)
document.querySelector('#toC').addEventListener('click', toCellsius)

function toFarhan(){
	let temp = document.querySelector('#temp').value
	const newTemp = temp * 9/5 + 32
	document.querySelector('#result').innerText = newTemp
	if (newTemp < 104) {
		document.querySelector('#result').style.color = 'blue'
	}
	else{
		document.querySelector('#result').style.color = 'red'
	}
}

function toCellsius(){
	let temp = document.querySelector('#temp').value
	const newTemp = (temp - 32) * 5/9
	document.querySelector('#result').innerText = newTemp
	if (newTemp < 40){
		document.querySelector('#result').style.color = 'blue'
	}
	else{
		document.querySelector('#result').style.color = 'red'
	}
}