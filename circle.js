
for(i=0; i<10; i++){
const numb = document.querySelector(".number");
let counter = 30;
setInterval(() => {
  if(counter == 0 ){
    setInterval();
  }else{
    counter = counter - 1;
    numb.textContent = counter;
  }
}, 1000);}