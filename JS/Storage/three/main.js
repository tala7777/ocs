// REGISTER
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");
    this.reset();
});

// LOGIN
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let stored = JSON.parse(localStorage.getItem("user"));

    if (!stored) {
        alert("No user found!");
        return;
    }

    if (stored.email === email && stored.password === password) {
        alert("Login Successful!");
    } else {
        alert("Invalid credentials");
    }
});
