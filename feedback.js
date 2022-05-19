<<<<<<< HEAD
function enableButton() {
    let textEnable = document.getElementById('comment').value
    let buttonEnable = document.getElementById('moreInfo')
    if(textEnable.length >= 10) {
        buttonEnable.removeAttribute('disabled')
    }else {
        buttonEnable.disabled = "true"
    }
}

=======
function textButton(){
    textBox = document.getElementById("textBox")
    if(textBox.value === ""){
        }else{
            console.log(textBox.value)
        }
}
>>>>>>> develop
