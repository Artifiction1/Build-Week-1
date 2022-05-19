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
    alert("checkbox is need to check to proceed!")
     clickable.href = "test.html"
   }else{
    alert("checkbox is need to check to proceed!")

     clickable.href = ""
   }
 
}
function proceed() {
  let checkbox = document.getElementById('checkbox')
  let proceed = document.getElementById('button')
  proceed.addEventListener("click", function (e) {
      if (checkbox.checked === false) {
          alert("Please accepts the Terms and conditions before you Proceed forward")
          location.href = "welcomepage.html"
      } else if (checkbox.checked === true) {
          location.href = "benchmark.html"
      }
  })
}

