'use strict'

const formElement = document.getElementById("registration");

formElement.addEventListener("submit", function(event) {
    event.preventDefault();

    const errors = {};

    let usernameValue = document.getElementById("usernamfield").value
    if(usernameValue == "") {
        errors.username = 'Username field can not be empty'
    }
    
    let passwValue = document.getElementById("passwordfield").value;
    let passw2Value = document.getElementById("passwordfield2").value;

    if(passwValue == "") {
        errors.passw = 'Password field can not be empty'
    }

    if(passwValue != passw2Value) {
        errors.passw2 = 'passwords  do not match'
    }

    function showPassFnc() {
        if (passwValue.type === "password") {
            passwValue.type = "text";
        } else {
            passwValue.type = "password";
        } 
    }

    let gender = false;
    formElement.querySelectorAll('[name = "gender"]').forEach(item => {
        if (item.checked) {
            gender = true;
        }
    })

        if (!gender) {
            errors.gender = 'please select your gender'
        }
 
        let checkInput = document.getElementById("agree").checked;

        if (!checkInput) {
            errors.check = 'you must agree our terms and conditions'
        }

        formElement.querySelectorAll('.error-text').forEach(el => {
            el.textContent = '';
        })

        for (let item in errors) {
            console.log(item);

            let errorPElement = document.getElementById("error-" + item);  
            console.log(errorPElement);
            
            if (errorPElement) {
                errorPElement.textContent = errors[item]
            
            }
        }
        console.log(errors);
        if (Object.keys(errors).length == 0) {
            formElement.onsubmit();
        }

});