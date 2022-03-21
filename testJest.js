function validation(email="", name="", password="", rePassword = ""){
    let flag = true;
    // let email = document.getElementById("userEmail").value
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!regexEmail.test(email)){
        flag = false;
    }

    // let name = document.getElementById("userName").value
    if (name === ""){
        flag = false;
    }

    // var password = document.getElementById('password').value;
    // var rePassword = document.getElementById('retypePassword').value;

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

module.exports = validation