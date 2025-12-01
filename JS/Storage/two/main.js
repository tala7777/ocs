document.getElementById("projectForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let subject = document.getElementById("subject").value;
    let desc = document.getElementById("desc").value;
    let users = document.getElementById("users").value;
    let tech = document.getElementById("tech").value;

    let obj = { subject, desc, users, tech };

    let arr = JSON.parse(sessionStorage.getItem("projects")) || [];
    arr.push(obj);
    sessionStorage.setItem("projects", JSON.stringify(arr));

    renderProjects();
    this.reset();
});

function renderProjects() {
    let container = document.getElementById("projectCards");
    let arr = JSON.parse(sessionStorage.getItem("projects")) || [];

    container.innerHTML = "";

    arr.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <h3>${p.subject}</h3>
                <p>${p.desc}</p>
                <p><b>User Types:</b> ${p.users}</p>
                <p><b>Tech:</b> ${p.tech}</p>
            </div>
        `;
    });
}

renderProjects();
