/*google.charts.load("current", { package: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    console.log("called inside index.js")
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
}*/

function validateUser() {
    const activeUser = sessionStorage.getItem("activeUser");
    const users = JSON.parse(localStorage.getItem("userCredentials"));
    for (const user of users) {
        if (user.email === activeUser) {
            document.getElementById("welcome_user").innerHTML = `Welcome back ${user.name}! Here's your current status of budget plan`;
        }
    }
}