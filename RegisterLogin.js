function registerAcc() {
    let Remail, Rpsw, RepeatPsw;
    Remail = document.getElementById('R-email').value;

    Rpsw = document.getElementById('R-psw').value;

    RepeatPsw = document.getElementById("R-psw-repeat").value;

    if (Rpsw != RepeatPsw) {
        alert("Passwords are not same");
        document.getElementById('register').reset();
    } else {
        if (Rpsw.length <= 8) {
            alert("Passwords must exceed 8 characters");
            document.getElementById('register').reset();
        } else {
            let user_records = new Array();
            user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
            if (user_records.some((element) => { return element.email == Remail })) {
                alert("Email has been used");
                document.getElementById('register').reset();
            } else {
                user_records.push({
                    'email': Remail,
                    "psw": Rpsw
                })
                alert("Account Registered Successfull");
                localStorage.setItem("users", JSON.stringify(user_records));
            }
        }
    }
}

function loginAcc() {
    let Lemail, Lpsw;
    let users = localStorage.getItem('users');

    Lemail = document.getElementById("L-email").value;

    Lpsw = document.getElementById("L-psw").value;

    let login = document.getElementById("login");

    if (localStorage.key('users') == null) {
        alert("No emails have been registered yet");
    } else {
        for (i = 0; i < JSON.parse(users).length; i++) {
            var TempEmail = JSON.parse(users)[i].email; //check user email has registered or not 
            if (Lemail == TempEmail) {
                if (Lpsw == JSON.parse(users)[i].psw) { // check the password is matched or not
                    console.log(Lemail);
                    localStorage.setItem("currentUserIndex", i);
                    login.setAttribute('action', 'aboutus.html');
                    return;
                } else {
                    alert('Invalid Username or Password! Please try again.');
                    break;
                }
            }
        }
        alert('Invalid Username or Password! Please try again.');
        window.location = "RegisterLogin.html"
    }
}

function demo() {
    let users = localStorage.getItem('users');
    console.log(JSON.parse(users).length)
}