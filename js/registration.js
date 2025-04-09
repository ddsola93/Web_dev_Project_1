// // Switches to landing form when btnSwapLanding is clicked (Update so it actually works later)
// document.querySelector('#btnSwapLanding').addEventListener('click', (event) => {
//     fetch("index.html")
//     .then(response => response.text())
//     .then(html => {
//         const objScript = document.createElement('script');
//         objScript.src = 'js/index.js'; 
//         objScript.type = 'text/javascript';
//         document.head.appendChild(objScript);
//         document.querySelector('#divLandingPage').innerHTML = '';
//         document.querySelector('#divLandingPage').innerHTML += html;
//         document.querySelector('#frmLandingPage').style.display = 'block';
//     })
//     .catch(error => console.error("Error fetching chart:", error));
// });


document.querySelector("#btnRegistration").addEventListener("click",(e) => {
    // Regular expressions to ensure valid email format and password is NIST compliant
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    let strEmail = document.getElementById("txtEmail").value;
    let strPassword = document.getElementById("txtPassword").value;
    let strConfirmPassword = document.getElementById("txtRepassword").value;
    let strFirstname = document.getElementById("txtFirstname").value;
    let strLastname = document.getElementById("txtLastname").value;
    let numPhone = document.getElementById("telPhone").value;

    let blnError = false
    let strMessage = ""

    // Checks to see if users inputed email is in a valid format (update when backend works)
    if(!regEmail.test(strEmail)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Email must be an email address</p>'
    }
    if(!regPassword.test(strPassword)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Password must be valid</p>'
    }
    if(strConfirmPassword != strPassword){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Passwords do not match</p>'
    }
    if(strFirstname.length < 1) {
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Enter your first name</p>'
    }
    if(strLastname.length < 1) {
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Enter your last name</p>'
    }
    if(numPhone.trim().length < 12){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Phone Number must be a phone number</p>'
    }

        // If there is an error show the errors
        if(blnError){
            Swal.fire({
                title: "Oh no, you have an error!",
                html: strMessage,
                icon: 'error'
            });
        }
    
        // Confirms that the user logedin sucessfully
        else{
            Swal.fire({
                title: "Congratulations!",
                html: "You have successfully registered",
                icon: 'success'
            });
        }
                
}) 

// Switches to registration form when btnSwapRegister is clicked
document.querySelector('#btnSwapRegistration').addEventListener('click', (event) => {
    fetch("components/login.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/login.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;
        document.querySelector('#divLogin').style.display = 'block';
    })
    .catch(error => console.error("Error fetching chart:", error));
});