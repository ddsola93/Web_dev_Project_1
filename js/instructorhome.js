function generateSurveys () {
    count = 0
    for (let i = 0; i < 5; i++) {
        let strDiv = ''
        if(count % 2 == 0) {
            strDiv = '<div id="divInnerSurvey" class="card mt-1 mb-2" style="background-color: rgb(250, 210, 252); border: none; padding: 10px;">'
        }
        else {
            strDiv = '<div id="divInnerSurvey" class="card mt-1 mb-2" style="background-color: rgb(250, 245, 200); border: none; padding: 10px;">'
        }
        strDiv += '<a id="loadsurveystatus" class="stretched-link"></a>'
        strDiv += '<div class="d-flex" style="padding:10px; justify-content: space-evenly">'
        strDiv += '<h6 style="color: black">Survey Name</h6>'
        strDiv += '<h6 style="color: black">75% Complete</h6>'
        strDiv += '</div>'
        document.querySelector('#divSurveys').innerHTML += strDiv
        count++
    }
}
generateSurveys()

document.querySelector('#btnCreateNewSurvey').addEventListener('click', (event) => {
    fetch("components/createsurvey.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/createsurvey.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;       
    })
    .catch(error => console.error("Error fetching chart:", error));
});

document.querySelector('#loadsurveystatus').addEventListener('click', (event) => {
    fetch("components/surveystatus.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/surveystatus.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;       
    })
    .catch(error => console.error("Error fetching chart:", error));
});

document.querySelector('#btnReturnToDashboard').addEventListener('click', (event) => {
    fetch("components/home.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/home.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;       
    })
    .catch(error => console.error("Error fetching chart:", error));
});