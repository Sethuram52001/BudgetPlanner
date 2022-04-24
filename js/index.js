google.charts.load("current", { package: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    let data = google.visualization.arrayToDataTable([
        ['Category', 'Budget'],
        ['Budget', 5500],
        ['Expense', 3000],
        ['Savings', 2500],
    ]);

    let options = {
        title: 'Budget Summary',
        pieHole: 0.4
    };

    let chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}