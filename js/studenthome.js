// Class code validation for when btnEnterCode is clicked
document.querySelector('#btnEnterCode').addEventListener('click', (event) => {
    // Grabs the values inputed by the user
    let strClassCode = document.querySelector("#txtClassCode").value

    let blnError = false
    let strMessage = ""

    // *Add check to see if code is in the database*

    // Checks to see if the code is a number of length 6
    if(strClassCode.length < 6 || strClassCode.length > 6 || isNaN(strClassCode)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">You must enter a valid code</p>'
    }

    // Thows an error if an improper code is used
    if(blnError){
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: 'error'
        });
    }
    // Confirms the user was added to a class
    else {
        Swal.fire({
            position: "middle",
            icon:"success",
            title:"Code entered successfuly",
            showConfirmButton: false,
            timer: 1000
        })
    }
});

// Class code validation for when btnViewClassesStudent is clicked
document.querySelector('#btnViewClassesStudent').addEventListener('click', (event) => {
    fetch("components/studentviewclasses.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/studentviewclasses.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;
           
    })
    .catch(error => console.error("Error fetching chart:", error));
});