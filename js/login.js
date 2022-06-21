var users = [
    {
        username: "anhducati.211@gmail.com",
        password: "123456",
        permissions: "admin", 
    },
    {
        username: "admin@gmail.com",
        password: "123456",
        permissions: "admin", 
    },
    {
        username: "hungmanhbtre279@gmail.com",
        password: "123456",
        permissions: "guest", 
    },
    {
        username: "dtd.2072002@gmail.com",
        password: "123456",
        permissions: "guest",
    },
    {
        username: "khach01@gmail.com",
        password: "123456",
        permissions: "guest",
    },
    
]



var loginError = document.querySelector(".loginError");

//check Email
const rexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const email = document.querySelector(".email");

email.addEventListener("blur", function () {
    if (rexEmail.test(email.value)) {
        loginError.innerHTML = "";
    } else {
        loginError.innerHTML = " Invalid email";
    }
})

//check login
function Login() {
    event.preventDefault();
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var user = check_user(username, password, users);
    if (user) {
        if (user.permissions == "admin") {
            window.location.href = "/html/CVQuocAnh.html";
            
        } else {
             window.location.href = "/html/homepage.html";
            
        }
    } else {
        alert(" Incorrect username or password.");
        loginError.innerHTML = " Incorrect username or password.";
    }
}

//code sample: demo_pr
function check_user(username, password, users) {
    for (i in users) {
        var user = users[i];
        if (user.username == username && user.password == password) {
            return user;
        }
    }
    return false;
}

