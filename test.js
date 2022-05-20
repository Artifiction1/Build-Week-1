    let correctAnswers = 0
    let outcome = []
    let wrongAnswers = 0
  
    
   
   /*var data = {


var data = {


  datasets: [
    {
      data: [30,70],
      backgroundColor: [
        "grey",
        "#00fff0"
      ]
    }]
 };
 var promisedDeliveryChart = new Chart(document.getElementById('myChart'), {
  type: 'doughnut',
  data: data,
  options: {
     responsive: true,
     cutoutPercentage: 75,
     borderWidth: 0,
    
    legend: {
      display: false
    }
 
  }
 });
 
 var questions = [
  {
      question: "What is 36 + 42",
      a: "64",
      b: "78",
      c: "76",
      answer: "B"
    },
  {
      question: "What is 7 x 4?",
      a: "21",
      b: "27",
      c: "28",
      answer: "C"
    },
 ]
 

  
 let  all_questions = [
  {
    question: "How can I create a checkbox in HTML?",
    choices: {
    correctAnswer:"<input type = 'checkbox'>",
    wrongAnswers:["<input type = 'check'>", "<checkbox>", "<input type = 'button'>"]
  }
},
   {
     question: "What does HTML stand for?",
     choices: {
     correctAnswer:"Hyper Text Markup Language",
     wrongAnswers:["Hyper Tag Markup Language", "Hyper Text Markdown Language", "Hyperlink Text Marking Language"]
   }},
   {
    question: "What does CSS stand for?",
    choices: {
    correctAnswer:"Cascading Style Sheets",
    wrongAnswers:["Computer Style Sheets", "Creative Style Sheets", "Cascading Style System"]
   }},
   {
    question: "Which is not a Datatype?",
    choices: {
    correctAnswer:"Objects",
    wrongAnswers:["Boolean", "String", "Number"]
   }},
 ]
 




 const startButton = document.getElementById('start-btn')

 startButton.addEventListener('click', proceedToStart)
//const nextButton = document.getElementById('next-btn')
 const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById("questions")
 const answerButtonsElement = document.getElementsByClassName('options')

 


 function proceedToStart() {
   console.log('Lets begin')
   startButton.classList.add('hide')
   questionContainerElement.classList.remove('hide')
   let currentQuestionIndex = 0
}

function nextQuestion() {
showQuestion(quiz[currentQuestionIndex])
}

function showQuestion(all_questions) {
  for (i=0; i<quiz.length; i++) {
    all_questions.Element.innerText= quiz[i].question
    
    
  }
}
showQuestion()

function selectAnswer() {


}
*/
let text = "";
let pos=0;
clickable = document.getElementById("link")
let results = []

let questions = [
  {question : "what is the capital of india?" , options : ["hyderabad","delhi","chennai","bengalore"], answer : "hyderabad"},
  {question : "what is even number?" , options : [1,3,5,8], answer :8},
  {question: "what is 2+2?", options :["3", "5", "6", "4"], answer:"4"}, 
  {question: "which of these is a prime number?" , options: [4, 9, 12, 3], answer: 3}, 
  {question: "This is a question.", options: ["false","true"], answer: "true"},
  {question: "earth is the 7th planet in our solar system.", options:["false","true"], answer: "true"}, 
  {question: "which one was the 1st mars rover?", options: ["Opportunity", "curiosity", "Sojourner","Mars Pathfinder"], answer: "Mars Pathfinder"},
  {question: "who wsa the 1st person in space?", options: ["Neil Armstrong", "Buzz Aldrin", "Matt Damon","Yuri Gagarin" ], answer: "Yuri Gagarin"},
  {question: "how much of the land is covered in water?", options:["71%", "68%", "80%", "0%"], answer:"0%"} 
  
];
let totalquestions = questions.length
const displayQuestions = function () {
  if(pos > questions.length-1){
    clickable.href = "results.html"
  }else {
  let wrap = document.querySelector("#questions");
    const question = questions[pos];
    wrap.innerHTML = `
    <div id="questions${pos}">
        <p>${question.question}</p>
        <div id="answer-buttons" class="btn-grid">
        <div><input type="button" class="button" value=${question.options[0]} />
        <input type="button" class="button" value=${question.options[1]} />
        </div><div>
        <input type="button" class="button" value=${question.options[2]} />
        <input type="button" class="button" value=${question.options[3]} />
        </div>
        </div>
    </div>`;
    currentQuestionNr= document.getElementById("currentQNr")
    console.log(pos)
    currentQuestionNr.innerHTML = "QUESTION "+(pos+1)
  }}

function next() {
  if(pos > questions.length-1){
    clickable.href = "results.html"
  }else {
  if(text == ""){
  }else{
    if(text == questions[pos].answer){
      correctAnswers++
      console.log("correct= "+ correctAnswers)
    }else{
      wrongAnswers++
      console.log("wrong= "+ wrongAnswers)
    }
    bothAnswers = {correct: questions[pos].answer, chosenAnswer: text}
    results.push(bothAnswers)
    console.log(results)
    pos++
    displayQuestions()
    counter = 30
    
}}}


window.onload = function() {
  displayQuestions()
}

let getText = document.querySelector("#questions")
getText.addEventListener('click', function (e){
text = e.target.value
if(text == questions[pos].answer){
  console.log(true)
}else{
  console.log(false)
}
},false)



  const numb = document.querySelector(".number");
  let counter = 30;
  setInterval(() => {
    if(counter == 0 ){
      counter = 30
      pos++
      displayQuestions()
      wrongAnswers++
      
    }else{
      counter = counter - 1;
      numb.textContent = counter;
    }
  }, 1000)


   /*
  var xValues = ["false", "correct"];
            var yValues = [wrongAnswers, correctAnswers];
            var barColors = [
            "#D20094",  
            "#00FFFF",
               ];
            
            new Chart("myChartt", {
              type: "doughnut",
              data: {
                
                datasets: [{
                  backgroundColor: barColors,
                  data: yValues
                }]
              },
              options: {
                cutoutPercentage: 65
                
                }
              }
            );
           
    function results(correct){
        let location = document.getElementById("correct")
        let perccentage = location.getElementsByTagName('h1')
        let value = correct*100 / totalquestions
        let wrongCount = totalquestions-correct
        console.log(wrongCount)
        let wrongValue = (totalquestions - correct)*100 /6
        value = value.toFixed(1)
        perccentage[0].innerText = value + "%"
        let results = location.getElementsByTagName('p')
        results[0].innerText = correct +"/"+totalquestions +" questions" 
        let wrong = document.getElementById("wrong")
        let wrongH = wrong.getElementsByTagName('h1')
        wrongValue = wrongValue.toFixed(1)
        wrongH[0].innerText = 100-value +"%"
        let Wresults = wrong.getElementsByTagName('p')
        Wresults[0].innerText = wrongCount +"/"+totalquestions 
      }
      */
      
