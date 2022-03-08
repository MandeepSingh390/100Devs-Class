document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('chocolate').onclick = partyChocolate
document.getElementById('gradient').onclick = partyGradient
document.getElementById('black').onclick = partyBlack

function partyPurple() {
  document.querySelector('body').style.background = 'rgba(241,63,247,1)'
  document.querySelector('#color').innerText = "Purple"
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.background = 'rgba(0,253,81,1)'
  document.querySelector('#color').innerText = "Green"
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.background = 'rgba(0,254,255)'
  document.querySelector('#color').innerText = "Blue"
  document.querySelector('body').style.color = 'white'
}

function partyChocolate() {
  document.querySelector('body').style.background = 'chocolate'
  document.querySelector('#color').innerText = "Chocolate"
  document.querySelector('body').style.color = 'white'
}

function partyGradient() {
  document.querySelector('body').style.background = 'linear-gradient(90deg, rgba(68,142,34,1) 0%, rgba(0,212,255,1) 51%, rgba(187,39,149,1) 93%)'
  document.querySelector('#color').innerText = "Gradient"
  document.querySelector('body').style.color = 'yellow'
}

function partyBlack(){
  document.querySelector('body').style.background = 'black'
  document.querySelector('#color').innerText = "Black"
  document.querySelector('body').style.color= 'white'
}