
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Hide any previous success message
    document.getElementById('successMessage').style.display = 'none';
    
    // Show the loading animation
    document.getElementById('loading').style.display = 'block';
    
    // Simulate a delay for the form submission process (e.g., AJAX call simulation)
    setTimeout(() => {
        // Hide the loading animation
        document.getElementById('loading').style.display = 'none';
        
        // Show the success message
        document.getElementById('successMessage').style.display = 'block';
        
        // After 2 seconds, redirect to the home page
        setTimeout(() => {
            window.location.href = "main.html"; // Redirect to home page
        }, 2000); // Delay before redirection
    }, 3000); // Simulate a 3-second loading time
}



// Function to simulate AI typing effect
function typeAIResponse(element, message) {
    let index = 0;
    element.textContent = ''; // Clear existing text
    const typingSpeed = 50; // Milliseconds between each character
    function type() {
        if (index < message.length) {
            element.textContent += message.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }
    type(); // Start typing
}
