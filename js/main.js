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
})

const textError = document.createElement("p");

const errorState = (container, input, text) => {
  textError.textContent = text;
  input.classList.add("border-error");
  textError.classList.add('text-error');
  container.appendChild(textError);
}

btnNextStep.addEventListener('click', () => {
  if (nameInput.value === "") {
    errorState(nameContainer, nameInput, "Error");
  }
})