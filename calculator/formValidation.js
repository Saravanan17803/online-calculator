document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Get form values
    let fullName = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validation flags
    let isValid = true;

    // Validate Full Name
    if (fullName.length < 5) {
        document.getElementById('nameError').textContent = 'Full Name must be at least 5 characters';
        isValid = false;
    }

    // Validate Email ID
    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Enter a valid Email ID';
        isValid = false;
    }

    // Validate Phone Number
    if (phone.length !== 10 || phone === '123456789') {
        document.getElementById('phoneError').textContent = 'Phone Number must be a 10-digit number and not 123456789';
        isValid = false;
    }

    // Validate Password
    if (password.length < 8 || password === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters, cannot be "password" or the same as your name';
        isValid = false;
    }

    // Validate Confirm Password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert('Registration Successful!');
        // You can proceed with form submission or any other logic here
    }
});
