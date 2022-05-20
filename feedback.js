
function enableButton() {
    let textEnable = document.getElementById('comment').value
    let buttonEnable = document.getElementById('moreInfo')
    let clickLink = document.getElementById('link')
    if(textEnable.length >= 10) {
        buttonEnable.removeAttribute('disabled')
        clickLink.href = "https://epicode.com/it/"
    }else {
        buttonEnable.disabled = "true"
        clickLink.href = ""
    }
}

/* function textButton(){
    textBox = document.getElementById("textBox")
    if(textBox.value === ""){
        }else{
            console.log(textBox.value)
        }
}
*/
