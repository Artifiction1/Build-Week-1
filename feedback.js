function enableButton() {
    let textEnable = document.getElementById('comment').value
    let buttonEnable = document.getElementById('moreInfo')
    if(textEnable.length >= 10) {
        buttonEnable.removeAttribute('disabled')
    }else {
        buttonEnable.disabled = "true"
    }
}

