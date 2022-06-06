let userBudgetPlans = [
    {
        "email": "abc@gmail.com",
        "budget": 5500,
        "expense": 3000,
        "savings": 2500
    },
    {
        "email": "def@gmail.com",
        "budget": 6000,
        "expense": 2500,
        "savings": 3500
    }
];

let userExpensePlans = [
    {
        "email": "abc@gmail.com",
        "travel": 1000,
        "entertainment": 500,
        "food": 1500
    },
    {
        "email": "def@gmail.com",
        "travel": 1500,
        "entertainment": 500,
        "food": 500
    }
];
/*
let jsonBudgetPlans = JSON.stringify(userBudgetPlans);
localStorage.setItem("userBudgetPlans", jsonBudgetPlans);

let jsonExpensePlans = JSON.stringify(userExpensePlans);
localStorage.setItem("userExpensePlans", jsonExpensePlans);*/


function validateUser() {
    const activeUser = sessionStorage.getItem("activeUser");
    const users = JSON.parse(localStorage.getItem("userCredentials"));
    for (const user of users) {
        if (user.email === activeUser) {
            document.getElementById("welcome_user").innerHTML = `Welcome back ${user.name}! Here's your current status of budget plan`;
        }
    }
}