// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the "Join a Class" button
    const joinClassButton = document.querySelector('#btnJoinClass'); // Ensure the button has this ID in your HTML
    if (joinClassButton) {
        joinClassButton.addEventListener('click', () => {
            // Fetch the studentgroups.html file
            fetch('/components/studentgroups.html')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(html => {
                    // Replace the current content with the studentgroups.html content
                    const contentDiv = document.querySelector('#content'); // Ensure your HTML has a container with this ID
                    if (contentDiv) {
                        contentDiv.innerHTML = html;
                    } else {
                        console.error('Content container (#content) not found in the DOM.');
                    }
                })
                .catch(error => console.error('Error loading studentgroups.html:', error));
        });
    } else {
        console.error('Join a Class button (#btnJoinClass) not found in the DOM.');
    }
});