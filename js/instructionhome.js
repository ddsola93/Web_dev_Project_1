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
        strDiv += '<a href="components/instructorhome.html" class="stretched-link"></a>'
        strDiv += '<div class="d-flex" style="padding:10px; justify-content: space-evenly">'
        strDiv += '<h6 style="color: black">Survey Name</h6>'
        strDiv += '<h6 style="color: black">75% Complete</h6>'
        strDiv += '</div>'
        document.querySelector('#divSurveys').innerHTML += strDiv
        count++
    }
}
generateSurveys()