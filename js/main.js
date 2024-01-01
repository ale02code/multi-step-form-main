const formStep1 = document.getElementById('form-step-1');
const btnNextStep = document.querySelector('.footer__submit-container__btn__next');
const textBack = document.querySelector(".footer__submit-container__back");

const footerContent = document.querySelector(".footer__submit-container");

const nameContainer = document.getElementById('name-container');
const nameInput = document.getElementById('name-input');

const emailContainer = document.getElementById('email-container');
const emailInput = document.getElementById('email-input');

const phoneContainer = document.getElementById('phone-container');
const phoneInput = document.getElementById('phone-input');

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

formStep1.addEventListener('submit', (e) => {
  e.preventDefault();
});

let stepNumber = 1;

const stepState = () => {
  const totalSteps = 4;
  const stepClass = "main__header__progress__step";
  const stepsClassActive = "main__header__progress__step-active";

  for (let i = 1; i <= totalSteps; i++) {
    const step = document.getElementById(i);

    if (i === stepNumber) {
      step.classList.replace(stepClass, stepsClassActive);
    } else {
      step.classList.replace(stepsClassActive, stepClass);
    }
  }
}

stepState();

const stepOne = () => {
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
  } else {
    return true;
  }

  return false;
}

if (stepNumber === 1) {
  textBack.style.visibility = "hidden";
}

let stepIsVisible = 1;

const stepVisibility = () => {
  const maxSteps = 4;
  const stepNotVisibleClass = "isNotVisible";

  for (let i = 1; i <= maxSteps; i++) {
    const stepVisible = document.querySelector(`.step-${i}`);

    console.log(`.step-${i}:`, stepVisible);

    if (i === stepIsVisible) {
      stepVisible.classList.remove(stepNotVisibleClass);
    } else {
      stepVisible.classList.add(stepNotVisibleClass);
    }
  }
};

stepVisibility();

const backVisible = () => {
  if (stepIsVisible === 1) {
    textBack.style.visibility = "hidden";
  } else {
    textBack.style.visibility = "visible";
  }
}

btnNextStep.addEventListener("click", () => {
  if (stepNumber === 1) {
    if (stepOne()) {
      removeErrorState();
      textBack.style.visibility = "visible";
      stepNumber = stepNumber + 1;
      stepState();
      stepIsVisible = stepIsVisible + 1;
      stepVisibility();
    }
  } else if (stepNumber < 4) {
    stepNumber = stepNumber + 1;
    stepState();
    stepIsVisible = stepIsVisible + 1;
    stepVisibility();
    backVisible();
  } else {
    console.log(stepIsVisible, stepNumber);
  }
});

textBack.addEventListener("click", () => {
  stepNumber = stepNumber - 1;
  stepState();
  stepIsVisible = stepIsVisible - 1;
  stepVisibility();
  backVisible();
})
