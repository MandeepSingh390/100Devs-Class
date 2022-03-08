document.querySelector('#finalRose').onclick = winnerIs

function winnerIs(){
	document.querySelector('#claire').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
}

document.querySelector('#finalRose').addEventListener('click', hide)

// function hide(){
// 	document.querySelector('#claire').style.display = 'none'
// 	document.querySelector('#sharleen').style.display = 'none'
// }
