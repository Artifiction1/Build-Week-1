let totalquestions = 10
let correctAnswers = 7
let wrongAnswers = totalquestions - correctAnswers
var xValues = ["false", "correct"];
            var yValues = [wrongAnswers, correctAnswers];
            var barColors = [
            "#D20094",  
            "#00FFFF",
               ];
            
            new Chart("myChart", {
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
    results(correctAnswers)