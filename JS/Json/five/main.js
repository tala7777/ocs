
let pplArray = [];

document.querySelector(".table-btn").addEventListener('click', element => {
  if (element.detail === 2) return;
  pplArray = [];

  fetch('users.json')
    .then(response => response.json())
    .then(data => {

      let arr = data.users;

      arr.forEach(element => {

        let name = element.firstName;
        let email = element.email;
        let phone = element.phone;
        let newPerson = {};
        newPerson = { name, email, phone };

        pplArray.push(newPerson);







      });

      let usersTable = "";
      pplArray.forEach(element => {
        usersTable += `
<tr>
<td>${element.name} </td>
<td>${element.email} </td>
<td> ${element.phone}</td>
</tr>
`;


      });
      document.querySelector('.users-table').innerHTML = usersTable;


    });

});
document.querySelector(".table-btn").addEventListener('dblclick', () => {


  document.querySelector('.users-table').innerHTML = "";

})