function validateForm(event) {
  event.preventDefault();

  // Fetching values of inputs
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Validating name
  if (name === '') {
    showError('Name is required');
    return;
  }

  // Validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('Please enter a valid email');
    return;
  }

  // Validating password
  if (password === '') {
    showError('Password is required');
    return;
  }

  // If all validations pass, submit the form
  alert('Form submitted successfully!');
}

function showError(message) {
  // Displaying error message
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.textContent = message;

  const form = document.getElementById('myForm');
  form.insertBefore(errorDiv, form.firstChild);
}
