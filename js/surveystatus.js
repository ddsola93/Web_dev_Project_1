    xArray = ["Completed", "Incomplete"];
    yArray = [75, 25];

    data = [{
        labels: xArray,
        values: yArray,
        type: "pie"
    }];
    layout = {
        height: 200,
        width: 250,
        margin: { t: 0, b: 0, l: 0, r: 0 },
        legend: {
            orientation: "h", 
            x: 0.5,
            y: -0.2,
            xanchor: "center"
        }
    };
    Plotly.newPlot("myPlot", data, layout);

    strAnswer = ''
    strLikertQuestion = 'How do you like this course?'
    strAnswer += `<p class="mb-1" style="color:black; font-size: 25px;">${strLikertQuestion}</p>`
    strAnswer += '<div class="d-flex align-items-center flex-wrap mb-2" style="gap: 20px; justify-content: space-between;">'
    strAnswer += '<div class="d-flex align-items-center flex-grow-1 justify-content-between" style="min-width: 0;">'
    strAnswer += `<p class="mb-1" style="color:black; font-size: 20px;">Disliked</p>`
    strAnswer += `<input type="radio" id="${strLikertQuestion} 1" value="${strLikertQuestion} 1" name="${strLikertQuestion}">`
    strAnswer += `<input type="radio" id="${strLikertQuestion} 2" value="${strLikertQuestion} 2" name="${strLikertQuestion}">`
    strAnswer += `<input type="radio" id="${strLikertQuestion} 3" value="${strLikertQuestion} 3" name="${strLikertQuestion}">`
    strAnswer += `<input type="radio" id="${strLikertQuestion} 4" value="${strLikertQuestion} 4" name="${strLikertQuestion}">`
    strAnswer += `<input type="radio" id="${strLikertQuestion} 5" value="${strLikertQuestion} 5" name="${strLikertQuestion}">`
    strAnswer += `<p class="mb-1" style="color:black; font-size: 20px;">Liked</p>`
    strAnswer += '</div>'
    strAnswer += '<div id="myPlot1" style="flex-grow: 1; max-width: 300px;  max-height: 300px; width: 75%;"></div>'
    strAnswer += '</div>'

    xArray = ["1", "2", "3", "4", "5"];
    yArray = [15, 10, 25, 10, 40];

    data = [{
        x: xArray,
        y: yArray,
        type: "bar",
        marker: { color: '#007bff' }
    }];

    layout = {
        height: 200,
        width: 250,
        margin: { t: 20, b: 40, l: 40, r: 20 },
        bargap: 0.3,
        bargroupgap: 0.05
    };
    document.querySelector('#divSurveys').innerHTML += `<div class="mb-4">${strAnswer}</div>`
    Plotly.newPlot("myPlot1", data, layout);

    strAnswer = ''
    strLikertQuestion = 'Which number is biggest?'
    strAnswer += `<p class="mb-1" style="color:black; font-size: 25px;">${strLikertQuestion}</p>`
    strAnswer += '<div class="d-flex align-items-center flex-wrap mb-2" style="gap: 20px;">'
    strAnswer += '<div class="d-flex align-items-center flex-wrap mb-2" style="gap: 20px; justify-content: space-between;">'
    strAnswer += '<ul class="mb-4">'
    strAnswer += `<input type="radio" id="1" value="1" style="margin-left: 30px" name="${strLikertQuestion}">`
    strAnswer += `<label for="1" style="margin-left: 15px; font-size: 20px; color: black">14</label><br>`
    strAnswer += `<input type="radio" id="2" value="2" style="margin-left: 30px" name="${strLikertQuestion}">`
    strAnswer += `<label for="2" style="margin-left: 15px; font-size: 20px; color: black">10</label><br>`
    strAnswer += `<input type="radio" id="3" value="3" style="margin-left: 30px" name="${strLikertQuestion}">`
    strAnswer += `<label for="3" style="margin-left: 15px; font-size: 20px; color: black">40</label><br>`
    strAnswer += `<input type="radio" id="4" value="4" style="margin-left: 30px" name="${strLikertQuestion}">`
    strAnswer += `<label for="4" style="margin-left: 15px; font-size: 20px; color: black">37</label><br>`
    strAnswer += '</div>'
    strAnswer += '<div id="myPlot2" style="flex-grow: 1; max-width: 300px; max-height: 300px; margin-left: auto; margin-right: auto;"></div>';
    strAnswer += '</div>'

    xArray = ["14", "10", "40", "37"];
    yArray = [10, 35, 5, 50];

    data = [{
        labels: xArray,
        values: yArray,
        type: "pie"
    }];
    layout = {
        height: 200,
        width: 250,
        margin: { t: 0, b: 0, l: 0, r: 0 },
        legend: {
            orientation: "h", 
            x: 0.5,
            y: -0.2,
            xanchor: "center"
        }
    };
    document.querySelector('#divSurveys').innerHTML += `<div class="mb-4">${strAnswer}</div>`
    Plotly.newPlot("myPlot2", data, layout);

    strLikertQuestion = 'What has been your favorite part of this course so far?'
    document.querySelector('#divSurveys').innerHTML += `<p class="mb-1" style="color:black; font-size: 25px;">${strLikertQuestion}</p>`
    document.querySelector('#divSurveys').innerHTML += '<textarea id="txtResponseShortAnswer" rows="5" mb-4" cols="40" wrap="soft" style="font-size: 20px;"  placeholder="Enter your response here" aria-label="Input for Short Answer"></textarea>'

    document.querySelector('#btnReturnToClass').addEventListener('click', (event) => {
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
