
function enableButton() {
    let textEnable = document.getElementById('comment').value
    let buttonEnable = document.getElementById('moreInfo')
    let linked = document.getElementById("link")
    if(textEnable.length >= 10) {
        buttonEnable.removeAttribute('disabled')
        linked.href="https://epicode.com/it/"
    }else {
        buttonEnable.disabled = "true"
        linked.href=""
    }
}

let stars = document.querySelectorAll("#stars img")
for(i=0;i<stars.length;i++){
    stars[i].value=i
}

function textButton(){
    textBox = document.getElementById("textBox")
    if(textBox.value === ""){
        }else{
            console.log(textBox.value)
        }
}
let StarsE = document.getElementById("stars")
StarsE.addEventListener('mouseover', function (e){
    console.log(e.target.value)
    let starAmount = e.target.value
    stars = document.querySelectorAll("#stars img")
    for(i=0;i<starAmount+1;i++){
        stars[i].style.opacity = 1
    }
    for(i=stars.length-1; i>starAmount; i--){
        stars[i].style.opacity = 0.1
    }
},false)
 
