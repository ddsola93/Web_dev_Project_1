document.querySelector('#btnLogin').addEventListener('click', (event) => {
    fetch("components/login.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        // objScript.src = 'js/login.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divLandingPage').innerHTML += html;
        document.querySelector('#headerLanding').style.display = 'none';
        document.querySelector('#frmLandingPage').style.display = 'none';
        document.querySelector('#divLogin').style.display = 'block';
       
    })
    .catch(error => console.error("Error fetching chart:", error));
});

document.querySelector('#btnRegister').addEventListener('click', (event) => {
    fetch("components/Registration_1.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        // objScript.src = 'js/registration.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divLandingPage').innerHTML += html;
        document.querySelector('#headerLanding').style.display = 'none';
        document.querySelector('#frmLandingPage').style.display = 'none';
        document.querySelector('#frmRegister').style.display = 'block';
       
    })
    .catch(error => console.error("Error fetching chart:", error));
});