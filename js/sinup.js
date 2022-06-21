var username= document.querySelector("#name");
var password = document.querySelector("#password");
var confirmPwd = document.querySelector("#password-confirmation");
var registerError = document.querySelector(".registerError");
var btnRegister = document.querySelector("#btn-Register");


btnRegister.addEventListener("click", checkPassword);

const rexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const email = document.querySelector(".email");

email.addEventListener("blur", function () {
    if (rexEmail.test(email.value)) {
        registerError.textContent = "";
    } else {
        registerError.textContent = " Invalid email";
    }
})

function checkPassword(){
   
    if (password.value != confirmPwd.value) {
        registerError.textContent = " The password does not match. Re-enter";
       // alert(" The password does not match. Re-enter")
    } else{
        alert(" Successful account registration");
        username.value = '';
        password.value = '';
        confirmPwd .value = '';
       
    }
}
