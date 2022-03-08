//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking(){
	let snacks = document.querySelector('input').value
	document.querySelector('#stops').innerText = ""
	if (snacks < 70) {
		for (let i=1; i <= Number(snacks);i++){
			document.querySelector('#stops').innerText += " STOP"
		}
	}
}
