// Class name validation and code creation for when btnGenerateCode is clicked
document.querySelector('#btnGenerateCode').addEventListener('click', (event) => {
    // Grabs the values inputed by the user
    let strClassName = document.querySelector("#txtClassName").value
    let strGroupName = document.querySelector("#txtGroupName").value

    let blnError = false
    let strMessage = ""

    // Checks to see if a class name was entered
    if(strClassName.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">A code cannot be generated without a class name</p>'
    }

    // Throws an error if no class name was entered
    if(blnError){
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: 'error'
        });
    }
    // Creates a code and confirms code is created
    else {
        Swal.fire({
            position: "middle",
            icon:"success",
            title:"Generating code",
            showConfirmButton: false,
            timer: 1000
        })

        let x = 0;
        let code =''

        // Creates a random number of length 6
        while ( x < 6) {
            code += Math.floor(Math.random() * 10);
            x++
        }

        // *Add check to see if class or code is already in the database*
        
        // Outputs the code to the user
        document.querySelector('#txtkey').innerHTML = '<h6 id="txtkey" class="text-left mb-0" style="color:black;">' + code +'</h6>'
    }
});

// Class code validation for when btnViewClassesInstructor is clicked
document.querySelector('#btnViewClassesInstructor').addEventListener('click', (event) => {
    fetch("components/instructorviewclasses.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/instructorviewclasses.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;
           
    })
    .catch(error => console.error("Error fetching chart:", error));
});