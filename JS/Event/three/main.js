function checkPass(element, errorId) {
    const passValue = element.value;
    const passError = document.getElementById(errorId);

    if (passValue.length < 6) {
        passError.innerText = "Password too short (min 6 characters)";
        passError.style.color = "red";
        element.classList.add("invalid");
    } else {
        passError.innerText = "";
        element.classList.remove("invalid");
    }
}

function passConf(element, errorId) {
    const password = document.getElementById("password").value;
    const confPass = element.value;
    const passConfError = document.getElementById(errorId);

    if (password === confPass) {
        passConfError.innerText = "";
    } else {
        passConfError.innerText = "The two passwords don't match";
        passConfError.style.color = "red";
    }
}
