function check() {
    document.getElementsByClassName("checkbox").checked = true;
  }
  
  function uncheck() {
    document.getElementsByClassName("checkbox").checked = false;
  }
  let cb = document.querySelector('.checkbox')
  
  
  function checked(){
    console.log(cb.value)
   let clickable = document.getElementById('link')
   if (cb.checked == true){
     clickable.href = "test.html"
   }else{
     clickable.href = ""
   }
 
}
function proceed() {
  let checkbox = document.getElementById("checkbox")
  let proceed = document.getElementById("button")
  proceed.addEventListener("click", function (e) {
      if (checkbox.checked === false) {
          alert("checkbox is checked to proceed!")
      } else if (checkbox.checked === true) {
          location.href = "questionPage.html"
      }
  })
}

