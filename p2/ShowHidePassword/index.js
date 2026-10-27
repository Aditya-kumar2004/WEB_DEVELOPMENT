// Select the input field and the button
const passwordField = document.getElementById('passwordField');
const toggleBtn = document.getElementById('toggleBtn');

// Add a click event listener to the button
toggleBtn.addEventListener('click', function () {
    // Check the current type of the input field
    if (passwordField.type === 'password') {
        // Change type to text to reveal the password
        passwordField.type = 'text';
        // Optional: Update the button text
        toggleBtn.textContent = 'Hide password';
    } else {
        // Change type back to password to hide it
        passwordField.type = 'password';
        // Optional: Reset the button text
        toggleBtn.textContent = 'Show password';
    }
});
