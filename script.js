// Initialize map and direction services (if used elsewhere)
function initMap() {
    // Existing map initialization code
}

// Toggle password visibility
function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Dummy signup function
function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    console.log("Signing up with", username, password);
    alert('Signup successful!');
}

// Dummy login function
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    console.log("Logging in with", username, password);
    alert('Login successful!');
}
