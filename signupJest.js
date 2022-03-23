function validation(){
    let flag = true;
    let email = document.getElementById("email").value
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!regexEmail.test(email)){
        flag = false;
        document.getElementById("emailError").innerHTML = "Please enter a valid email"
    }

    let name = document.getElementById("name").value
    if (name === ""){
        flag = false;
        document.getElementById("nameError").innerHTML = "Please enter a valid name"
    }

    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('re-password').value;

    if (password !== rePassword){
        flag = false;
        document.getElementById("retypeError").innerHTML = "Please make sure your passwords match"
    }

    var regularPassword  = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(!regularPassword.test(password)) {
        flag = false;
        document.getElementById("emailError").innerHTML = "Please enter a valid password"
    }

    if (flag === true){
        return true
    }
    return false

}

function testValidation(email="", name="", password="", rePassword = ""){
    let flag = true;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!regexEmail.test(email)){
        flag = false;
    }

    if (name === ""){
        flag = false;
    }


    if (password !== rePassword){
        flag = false;
    }

    var regularPassword  = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if(!regularPassword.test(password)) {
        flag = false;
    }

    if (flag === true){
        return true
    }
    return false

}

module.exports = testValidation