/*let users = [
    {
        "name": "abc",
        "email": "abc@gmail.com",
        "password": "abc@gmail"
    },
    {
        "name": "abcd",
        "email": "abcd@gmail.com",
        "password": "abcd@gmail"
    }
];

let jsonUsers = JSON.stringify(users);
localStorage.setItem("userCredentials", jsonUsers);*/

function switchTab(event, formName) {
    let els = document.getElementsByClassName("tabContents");
    for (let el = 0; el < els.length; el++) {
        els[el].style.display = none;
    }
    document.getElementById(formName).style.display = "block";
}

function register() {
    let registerName = document.getElementById("register-name").value;
    let registerMail = document.getElementById("register-mail").value;
    let registerPassword = document.getElementById("register-password").value;
    const users = JSON.parse(localStorage.getItem("userCredentials"));
    for (let user of users) {
        if (user.email === registerMail) {
            alert("User mail id already exists!");
            return;
        }
    }
    const newUser = {
        "name": registerName,
        "email": registerMail,
        "password": registerPassword
    }
    users.push(newUser);
    localStorage.setItem("userCredentials", JSON.stringify(users));
    alert(`User with mail id: ${registerMail} was registered successfully!`);
}

function login() {
    let loginMail = document.getElementById("login-mail").value;
    let loginPassword = document.getElementById("login-password").value;
    const userCredentials = JSON.parse(localStorage.getItem("userCredentials"));
    for (const user of userCredentials) {
        if (user.email === loginMail && user.password === loginPassword) {
            alert("Login successful!");
            sessionStorage.setItem("activeUser", loginMail);
            return;
        }
    }
    alert("Login failed! Invalid credentials");
}