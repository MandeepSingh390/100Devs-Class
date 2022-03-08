function rules(){
	//Create a conditonal that checks their age
	let age = document.querySelector('#danceDanceRevolution').value
	//If under 16, tell them they can not drive
	if (Number(age) < 16) {
		document.querySelector('p').innerText = 'You can not drive'
	}
	//If under 18, tell them they can't hate from outside the club, because they can't even get in
	else if (Number(age) < 18) {
		document.querySelector('p').innerText = "You can't hate from outside the club, because you can't even get in"
	}
	//If under 21, tell them they can not drink
	else if (Number(age) < 21) {
		document.querySelector('p').innerText = "You can not drink"
	}
	//If under 25, tell them they can not rent cars affordably
	else if (Number(age) < 25) {
		document.querySelector('p').innerText = "You can not rent cars affordably"
	}
	//If under 30, tell them they can not rent fancy cars affordably
	else if (Number(age) < 30) {
		document.querySelector('p').innerText = "you can not rest fancy cars affordably"
	}
	//If under over 30, tell them there is nothing left to look forward too
	else if (Number(age)===69) {
		document.querySelector('p').innerText = "NICE"
	}
	else {
		document.querySelector('p').innerText = "There is nothing left to look forward too"
	}
}
rules()
//--- Harder
//On click of the h1
document.querySelector('h1').addEventListener('click', rules)
//Take the value from the input
//Place the result of the conditional in the paragraph
