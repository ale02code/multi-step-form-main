const formStep1 = document.getElementById('form-step-1');
const btnNextStep = document.querySelector('.footer__submit-container__btn');

const nameContainer = document.getElementById('name-container');
const nameInput = document.getElementById('name-input');

const emailContainer = document.getElementById('email-container');
const emailInput = document.getElementById('email-input');

const phoneContainer = document.getElementById('phone-container');
const phoneInput = document.getElementById('phone-input');

formStep1.addEventListener('submit', (e) => {
  e.preventDefault();
});

const removeErrorState = () => {
  const textsErrors = document.querySelectorAll('.text-error');
  textsErrors.forEach((textError) => textError.remove());
  const inputErrors = document.querySelectorAll('.border-error');
  inputErrors.forEach((inputError) => inputError.classList.remove('border-error'));
}

const errorState = (container, input, text) => {
  removeErrorState();

  const textError = document.createElement('p');
  textError.textContent = text;
  input.classList.add('border-error');
  textError.classList.add('text-error');
  container.appendChild(textError);
};

btnNextStep.addEventListener('click', () => {
  if (nameInput.value === '') {
    errorState(nameContainer, nameInput, 'Name cannot be empty');
  } else if (/\d+/.test(nameInput.value)) {
    errorState(nameContainer, nameInput, 'Name cannot contain numbers');
  } else if (emailInput.value === '') {
    errorState(emailContainer, emailInput, 'Email cannot be empty');
  } else if (!/@/.test(emailInput.value) || !/\./.test(emailInput.value) || /\.\./.test(emailInput.value) || /@\./.test(emailInput.value) || /^\./.test(emailInput.value) || /\.$/.test(emailInput.value)) {
    errorState(emailContainer, emailInput, 'Looks like this is not an email');
  } else if (phoneInput.value === '') {
    errorState(phoneContainer, phoneInput, 'Phone number cannot be empty');
  } else if (!/\d+/.test(phoneInput.value)) {
    errorState(phoneContainer, phoneInput, 'Phone number cannot contain letters');
  } else if (phoneInput.value.length > 4 || phoneInput.value.length < 15) {
    errorState(phoneContainer, phoneInput, 'Phone number invalid');
  } else {
    
  }
});
