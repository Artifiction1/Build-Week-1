
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


  
 const quiz = [
  {
    question: "How can I create a checkbox in HTML?",
    correctAnswer:"<input type = 'checkbox'>",
    wrongAnswers:["<input type = 'check'>", "<checkbox>", "<input type = 'button'>"]
  },
   {
     question: "What does HTML stand for?",
     correctAnswer:"Hyper Text Markup Language",
     wrongAnswers:["Hyper Tag Markup Language", "Hyper Text Markdown Language", "Hyperlink Text Marking Language"]
   },
   {
    question: "What does CSS stand for?",
    correctAnswer:"Cascading Style Sheets",
    wrongAnswers:["Computer Style Sheets", "Creative Style Sheets", "Cascading Style System"]
   },
   {
    question: "Which is not a Datatype?",
    correctAnswer:"Objects",
    wrongAnswers:["Boolean", "String", "Number"]
   },
 ]
function printQuestion() {
  console.log(quiz)
}




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

function showQuestion(question) {
  for (i=0; i<quiz.length; i++) {
    questionElement.innerText= quiz[i].question
    
    
  }
}
showQuestion()

function selectAnswer() {


}

 



