//Add check to see if student is in a group
document.querySelector('#loadInstructorHome').addEventListener('click', (event) => {
    fetch("components/classhome.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/classhome.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;
       
    })
    .catch(error => console.error("Error fetching chart:", error));
});

document.querySelector('#btnReturnClasses').addEventListener('click', (event) => {
    fetch("components/instructorhome.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/instructorhome.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;
       
    })
    .catch(error => console.error("Error fetching chart:", error));
});