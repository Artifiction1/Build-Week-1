var xValues = ["false", "correct"];
            var yValues = [2, 4];
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