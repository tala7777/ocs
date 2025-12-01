document.querySelector('.submit-btn').addEventListener('click', () => {
    let name = document.getElementById('user-name').value;
    let age = document.getElementById('user-age').value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let description = document.getElementById('description').value;
    let majorUni = document.getElementById('major-uni').value;
    let checkboxes = document.querySelectorAll('input[name="prog_lang"]:checked');

    let langs = [];
    checkboxes.forEach(element => {
        langs.push(element.value);
    });

    let obj = {
        namee: name,
        agee: age,
        gnderr: gender,
        desc: description,
        major: majorUni,
        prog: langs
    };


    let usersarr = JSON.parse(localStorage.getItem("users")) || [];


    usersarr.push(obj);


    localStorage.setItem('users', JSON.stringify(usersarr));

    console.log(usersarr);
    document.querySelector('.users-info').innerHTML = '';

    usersarr.forEach(element => {
        document.querySelector('.users-info').innerHTML += `
<tr>
<td>${element.namee} </td>
<td>${element.agee} </td>
<td> ${element.gnderr}</td>
<td> ${element.desc}</td>
<td> ${element.major}</td>
<td> ${element.prog}</td>
</tr>
`;
    });


});