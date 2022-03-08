let total = 0

document.querySelector('#pumpkin').addEventListener('click', setZero)
document.querySelector('#onePunch').addEventListener('click', addOne)
document.querySelector('#dominosPizza').addEventListener('click', addThree)
document.querySelector('#zebra').addEventListener('click', addNine)
document.querySelector('#cantThinkOfAnything').addEventListener('click', subTwo)
document.querySelector('#minusOne').addEventListener('click', subOne)

function setZero(){
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function addOne(){
  total += 1
  document.querySelector('#placeToPutResult').innerText = total
}

function addThree(){
  total += 3
  document.querySelector('#placeToPutResult').innerText = total
}

function addNine(){
  total += 9
  document.querySelector('#placeToPutResult').innerText = total
}

function subTwo(){
  total -= 2
  document.querySelector('#placeToPutResult').innerText = total
}

function subOne(){
  total -= 1
  document.querySelector('#placeToPutResult').innerText = total
}

// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)
// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// document.querySelector('#zebra').addEventListener('click', add9)
// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function add9() {
//   total = total + 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub2() {
//   total = total - 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }
