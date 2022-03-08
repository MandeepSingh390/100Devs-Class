//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if(day === "tuesday" || day === "thursday"){
    console.log("YOU HAVE CLASS")
    document.querySelector('#placeToSee').innerText = "YOU HAVE CLASS"
  }else if( day === "saturday" || day === "sunday"){
    console.log("Its The Weekend")
    document.querySelector('#placeToSee').innerText = "Its The Weekend"
  }else if (day === "monday" || day === "wednesday" || day === "friday"){
    console.log("BORING")
    document.querySelector('#placeToSee').innerText = "BORING"
  }else{
    console.log("Please Enter Valid Day")
    document.querySelector('#placeToSee').innerText = "Please Enter Valid Day"
  }

}
