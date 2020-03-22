const CHART = document.getElementById('lineChart').getContext('2d');
window.onload = function() {
    console.log(CHART);
    let lineChart = new Chart(CHART, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

            datasets: [{
                label: "My First dataset",
                fill: false,
                lineTension: 0.4,
                backgroundColor: "rgba(380, 192, 192, 0.4)",
                borderColor: "rgba(00, 192, 192, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(200,400,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHitRadius: 10,
                pointHoverBackgroundColor: "rgb(300,100,100)",
                data: [65, 59, 80, 81, 56, 55, 40, 80],

            }, {
                label: "My Second dataset",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75, 100, 192, 0.4)",
                borderColor: "rgba(100, 72, 192, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(130,72,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHitRadius: 10,
                pointHoverBackgroundColor: "rgb(300,10,100)",
                data: [35, 49, 70, 41, 56, 45, 20],
            }
    
        ]
        }
    });

}