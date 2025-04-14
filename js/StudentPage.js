// Handle form submission
document
  .querySelector("#studentSurveyForm")
  .addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    alert("Thank you for submitting the survey!");
    // You can add logic here to send the survey data to a server or process it further
  });