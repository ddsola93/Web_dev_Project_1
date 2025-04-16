document.querySelector('#btnbtnEditCompletedSurveys').addEventListener('click', (event) => {
    fetch("components/studentdashboard.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/studentdashboard.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;       
    })
    .catch(error => console.error("Error fetching chart:", error));
});

// document.querySelector('#btnbtnEditCompletedSurveys').addEventListener('click', (event) => {
//     fetch("components/studentdashboard.html")
//     .then(response => response.text())
//     .then(html => {
//         const objScript = document.createElement('script');
//         objScript.src = 'js/studentdashboard.js'; 
//         objScript.type = 'text/javascript';
//         document.head.appendChild(objScript);
//         document.querySelector('#divTopLanding').innerHTML = '';
//         document.querySelector('#divTopLanding').innerHTML = html;       
//     })
//     .catch(error => console.error("Error fetching chart:", error));
// });