fetch("../src/project.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("project").innerHTML = data;
    })
    .catch(error => {
        console.error("Error:", error);
    });

    fetch("../src/experience.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("experience").innerHTML = data;
    });

    fetch("../src/certifications.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("certifications").innerHTML = data;
    });

fetch("../src/contact.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("contact").innerHTML = data;
    });