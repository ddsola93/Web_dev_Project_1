
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

// Allows user to reset password when btnForgotPassword is clicked (Update so it actually works later)
document.querySelector("#btnForgotPassword").addEventListener("click",(e) => {
    Swal.fire({
        title: "Reset password",
        html: "You can reset your password here",
        icon: 'info'
    });
})

// Email and password validation for when btnLogin is clicked
document.querySelector("#btnLogIn").addEventListener("click",(e) => {
    // Regular expression for valid email format
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/


    // Grabs the values inputed by the user
    let strEmail = document.querySelector("#txtEmail").value
    let strPassword = document.querySelector("#txtPassword").value

    let blnError = false
    let strMessage = ""

    // Checks to see if users inputed email is in a valid format (update when backend works)
    if(!regEmail.test(strEmail)){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Email must be an email address</p>'
    }

    // Checks to see if users inputed password is longer than 1 (update when backend works)
    if(strPassword.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Password must be valid</p>'
    }

    // If there is an error show the errors
    if(blnError){
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: 'error'
        });
    }

    // Confirms that the user loggedin sucessfully
    else{
        Swal.fire({
            title: "Congratulations!",
            html: "You have successfully signed in",
            icon: 'success'
        });
        fetch("components/home.html")
        .then(response => response.text())
        .then(html => {
            const objScript = document.createElement('script');
            objScript.src = 'js/home.js'; 
            objScript.type = 'text/javascript';
            document.head.appendChild(objScript);
            document.querySelector('#divTopLanding').innerHTML = '';
            document.querySelector('#divTopLanding').innerHTML = html;
            document.querySelector('#divHome').style.display = 'block';
        
        })
        .catch(error => console.error("Error fetching chart:", error));
    }
})

// Switches to registration form when btnSwapRegister is clicked
document.querySelector('#btnSwapRegister').addEventListener('click', (event) => {
    fetch("components/registration.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/registration.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;
        document.querySelector('#divRegister').style.display = 'block';
       
    })
    .catch(error => console.error("Error fetching chart:", error));
});