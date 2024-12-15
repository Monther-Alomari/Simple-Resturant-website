const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error'); 

  if (errorDisplay) {
    errorDisplay.innerText = message; 
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    errorDisplay.classList.add('active'); 
  }
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  if (errorDisplay) {
    errorDisplay.innerText = ''; 
    errorDisplay.classList.remove('active'); 
  }
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();

 
  if (fullNameValue === '') {
    setError(fullName, 'Full Name is required');
  } else {
    setSuccess(fullName);
  }

 
  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

 
  const phoneRegex = /^\d{10}$/; 
  if (phoneNumberValue === '') {
    setError(phoneNumber, 'Phone Number is required');
  } else if (!phoneRegex.test(phoneNumberValue)) {
    setError(phoneNumber, 'Provide a valid 10-digit phone number');
  } else {
    setSuccess(phoneNumber);
  }


  if (fullNameValue && isValidEmail(emailValue) && phoneRegex.test(phoneNumberValue)) {
    createSuccessNotification();
    form.reset(); 
    document.querySelectorAll('.success').forEach(el => el.classList.remove('success'));
  }
};


const handleInputChange = (input) => {
  input.value = input.value.toUpperCase();
  input.style.color = 'blue';
};


const createSuccessNotification = () => {
  let successMessage = document.getElementById('successMessage');

  if (!successMessage) {
    successMessage = document.createElement('p');
    successMessage.id = 'successMessage';
    successMessage.className = 'text-success text-center';
    successMessage.innerText = 'Form submitted successfully!';
    form.appendChild(successMessage);
  } else {
    successMessage.innerText = 'Form submitted successfully!';
  }
};
