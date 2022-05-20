
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

let pos=0;

let questions = [
  {"question" : "what is the capital of india?" , "options" : ["hyderabad","delhi","chennai","bengalore"], "answer" : "hyderabad"},
  {"question" : "what is even number?" , "options" : [1,3,5,8], "answer" :8}
];

const displayQuestions = function () {
  let wrap = document.querySelector(".questions");
    const question = questions[pos];
    wrap.innerHTML = `
    <div class="questions${pos}">
        <p>${question.question}</p>
        <div id="answer-buttons" class="btn-grid">
        <input type="button" class="button" value=${question.options[0]} />
        <input type="button" class="button" value=${question.options[1]} />
        <input type="button" class="button" value=${question.options[2]} />
        <input type="button" class="button" value=${question.options[3]} />
        </div>
    </div>`;
  }

function next() {
  let wrap = document.querySelector(".questions");
  wrap.style.display = "visible"
pos++
  displayQuestions()
}


window.onload = function() {
  displayQuestions()
}
