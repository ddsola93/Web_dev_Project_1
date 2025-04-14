// Event listener for the "Join a Class" button
document.querySelector('#btnJoinClass').addEventListener('click', () => {
    // Redirect to StudentPage.html
    window.location.href = 'StudentPage.html';
});

// Event listener for the "Create a Class" button (optional, if needed)
document.querySelector('#btnCreateClass').addEventListener('click', () => {
    // Redirect to CreateClass.html (or any other page for creating a class)
    window.location.href = 'CreateClass.html';
}