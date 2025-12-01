function checkName(element, errorId) {
    const value = element.value.trim();
    const pattern = /^[A-Za-z\u0600-\u06FF'-]+(?:\s[A-Za-z\u0600-\u06FF'-]+)*$/;
    const isValid = pattern.test(value);
    const errorElem = document.getElementById(errorId);

    if (!isValid) {
        errorElem.innerText = "Please use letters only";
        element.classList.add("invalid");
    } else {
        errorElem.innerText = "";
        element.classList.remove("invalid");
    }
}

function checkBirthdate() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdateValue = birthdateInput.value;
    const errorElem = document.getElementById("birthdate-error");

    if (!birthdateValue) {
        errorElem.innerText = "Please enter your birthdate";
        birthdateInput.classList.add("invalid");
        return false;
    }

    const today = new Date();
    const birthDate = new Date(birthdateValue);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 13) {
        errorElem.innerText = "You must be at least 13 years old";
        birthdateInput.classList.add("invalid");
        return false;
    }

    errorElem.innerText = "";
    birthdateInput.classList.remove("invalid");
    return true;
}

function checkEmail() {
    const input = document.getElementById("email");
    const emailValue = input.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailError = document.getElementById("email-error");
    const isValid = pattern.test(emailValue);

    if (!isValid) {
        emailError.innerText = "Please enter your email correctly";
        input.classList.add("invalid");
    } else {
        emailError.innerText = "";
        input.classList.remove("invalid");
    }
}

function emailConf() {
    const email = document.getElementById("email").value;
    const confEmail = document.getElementById("confirm-email").value;
    const errorElem = document.getElementById("emailconf-error");

    if (email === confEmail) {
        errorElem.innerText = "";
    } else {
        errorElem.innerText = "The email and the confirmation email are not the same";
    }
}

function checkPass() {
    const input = document.getElementById("password");
    const value = input.value;
    const passError = document.getElementById("pass-error");

    const pattern = /^(?=.*\d.*\d)(?=.*[@$!%*?&])[A-Z][A-Za-z\d@$!%*?&]{7,31}$/;
    const isValid = pattern.test(value);

    if (!isValid) {
        passError.innerText =
            "Password must:\n• Start with a capital letter\n• Contain at least 2 numbers\n• Include at least 1 symbol (@ $ ! % * ? &)\n• Be 8–32 characters long";
        input.classList.add("invalid");
    } else {
        passError.innerText = "";
        input.classList.remove("invalid");
    }
}

function passConf() {
    const pass = document.getElementById("password").value;
    const conf = document.getElementById("confirm-password").value;
    const errorElem = document.getElementById("passconf-error");

    if (pass === conf) {
        errorElem.innerText = "";
    } else {
        errorElem.innerText = "The password and the confirmation password are not the same";
    }
}

function checkPhone() {
    const phoneInput = document.getElementById("phone");
    const phoneValue = phoneInput.value.trim();
    const phoneError = document.getElementById("phone-error");
    const pattern = /^\d{10}$/;

    if (!pattern.test(phoneValue)) {
        phoneError.innerText = "Phone number must be exactly 10 digits";
        phoneInput.classList.add("invalid");
    } else {
        phoneError.innerText = "";
        phoneInput.classList.remove("invalid");
    }
}
