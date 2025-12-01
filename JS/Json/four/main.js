"use strict";

var users = [];

function submitObj() {
    // get inputs
    var $items = $('#name, #email, #phone');
    var obj = {};

    $items.each(function () {
        obj[this.id] = $(this).val();
    });

  
    users.push(obj);

    console.log("Saved users:", users);

   
    document.getElementById('resultColored').innerHTML = `
        <span style="background-color: green; font-weight: bold;">${obj.name}</span> , 
        <span style="background-color: red;">${obj.email}</span> , 
        <span style="background-color: orange;">${obj.phone}</span>
    `;

    let tableHTML = `
        <table border="1" cellpadding="5" cellspacing="0">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
    `;

    users.forEach(user => {
        tableHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
            </tr>
        `;
    });

    tableHTML += `</tbody></table>`;

    document.getElementById('resultTable').innerHTML = tableHTML;

    $('#name, #email, #phone').val("");
}


function checkName(element, errorId) {
    let value = element.value.trim();
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

    console.log("Value:", value, "Valid?", isValid);
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
