document.querySelector('#check').addEventListener('click', check)

function check(){

  const day = document.querySelector('#day').value.toLowerCase()

  if (day == 'wednesday' || day == 'friday'){
    document.querySelector('#placeToSee').innerText = 'Class'
  }
  else if (day == 'monday') {
    document.querySelector('#placeToSee').innerText = 'Office Hours'
  }
  else if (day == 'sunday' || day == 'saturday'){
    document.querySelector('#placeToSee').innerText = 'weekend'
  }
  else if (day == 'monday' || day == 'tuesday' || day == 'thursday'){
    document.querySelector('#placeToSee').innerText = 'Boring'
  }
  else {
    document.querySelector('#placeToSee').innerText = 'Place enter a valid day MF'
  }
}