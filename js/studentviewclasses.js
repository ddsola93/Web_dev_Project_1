document.querySelector('#loadStudentHome').addEventListener('click', (event) => {
    fetch("components/addgroup.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/addgroup.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;
       
    })
    .catch(error => console.error("Error fetching chart:", error));
});

document.querySelector('#btnReturnClasses').addEventListener('click', (event) => {
    fetch("components/studenthome.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/studenthome.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;
       
    })
    .catch(error => console.error("Error fetching chart:", error));
});