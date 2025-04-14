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

// Class code validation for when btnViewClassesInstructor is clicked
document.querySelector('#btnViewClassesInstructor').addEventListener('click', (event) => {
    document.querySelector('#divInstructor').innerHTML = ''
    document.querySelector('#divInstructor').innerHTML = '<div id="divInnerInstructor" class="card" style="background-color: rgba(255, 190, 255, 0.624); border: none; padding: 10px; min-height: 475px;">'
    document.querySelector('#divInstructor').innerHTML += '</div>'
    document.querySelector('#divInnerInstructor').innerHTML += '<h1 class="text-center mt-2" style="font-size: 40px; color: black">Class List</h1>'
    let strDiv = '<div class="card mt-2 mb-2" style="padding: 10px; background-color: rgb(250, 222, 252); border-color: rgb(250, 222, 252)">'
    strDiv += '<h5 class="text-center mt-2" style="color: black">Class Name</h5>'
    strDiv += '<h5 class="text-center mb-2" style="color: black">Class Section</h5>'
    strDiv += '<a id="loadInstructorHome" class="stretched-link"></a>'
    document.querySelector('#divInnerInstructor').innerHTML += strDiv + '</div>'
    document.querySelector('#divInnerInstructor').innerHTML+= '<button id="btnReturnClasses" class="btn btn-secondary col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12 col-5 mt-1 mb-2" type="button">Create A Class</button>'
    document.querySelector('#loadInstructorHome').addEventListener('click', (event) => {
        fetch("components/instructorhome.html")
        .then(response => response.text())
        .then(html => {
            const objScript = document.createElement('script');
            objScript.src = 'js/instructorhome.js'; 
            objScript.type = 'text/javascript';
            document.head.appendChild(objScript);
            document.querySelector('#divTopLanding').innerHTML = '';
            document.querySelector('#divTopLanding').innerHTML = html;
            // document.querySelector('#divinstructorhome').style.display = 'block';
           
        })
        .catch(error => console.error("Error fetching chart:", error));
    });
});

// Class code validation for when btnViewClassesStudent is clicked
document.querySelector('#btnViewClassesStudent').addEventListener('click', (event) => {
    document.querySelector('#divStudent').innerHTML = ''
    document.querySelector('#divStudent').innerHTML = '<div id="divInnerStudent" class="card" style="background-color: rgba(253, 236, 182, 0.698); border: none; padding: 10px; min-height: 475px;">'
    document.querySelector('#divStudent').innerHTML += '</div>'
    document.querySelector('#divInnerStudent').innerHTML += '<h1 class="text-center mt-2" style="font-size: 40px; color: black">Class List</h1>'
    let strDiv = '<div class="card mt-2 mb-2" style="padding: 10px; background-color: rgb(252, 245, 222); border-color: rgb(252, 245, 222)">'
    strDiv += '<h5 class="text-center mt-2" style="color: black">Class Name</h5>'
    strDiv += '<h5 class="text-center mb-2" style="color: black">Class Section</h5>'
    document.querySelector('#divInnerStudent').innerHTML += strDiv + '</div>'
    document.querySelector('#divInnerStudent').innerHTML += '<button id="btnReturnJoinClasses" class="btn btn-secondary col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12 col-5 mt-1 mb-2" type="button">Join A Class</button>'
});