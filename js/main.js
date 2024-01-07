const main = document.querySelector('.main');
const mainStepContainer = document.getElementById('main-step');
const formStep1 = document.getElementById('form-step-1');
const btnsContainer = document.querySelector('.footer__submit-container');
const btnNextStep = document.querySelector('.footer__submit-container__btn__next');
const textBack = document.querySelector(".footer__submit-container__back");

const footer = document.querySelector(".footer");
const optionsSelect = document.querySelectorAll('.options-play');

const nameContainer = document.getElementById('name-container');
const nameInput = document.getElementById('name-input');

const emailContainer = document.getElementById('email-container');
const emailInput = document.getElementById('email-input');

const phoneContainer = document.getElementById('phone-container');
const phoneInput = document.getElementById('phone-input');

const step = document.querySelectorAll(".step");
const sub = document.getElementById("sub");

const textChangeMethodPay = document.querySelector(".step-4__bill__main__text__change");

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
  const stepClass = "main__step-container__progress__step";
  const stepsClassActive = "main__step-container__progress__step-active";

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

    if (i === stepIsVisible) {
      stepVisible.classList.remove(stepNotVisibleClass);
    } else {
      stepVisible.classList.add(stepNotVisibleClass);
    }
  }
};

stepVisibility();

const confirmBottom = document.createElement('button');
confirmBottom.classList.add('footer__submit-container__btn__confirm');
confirmBottom.textContent = "Confirm";

const replaceButtonNextStep = () => {
  if (stepNumber === 4) {
    btnNextStep.style.display = "none";
    confirmBottom.style.display = "block";

    confirmBottom.addEventListener("click", () => {
      step.forEach(stp => stp.style.display = "none");
      footer.style.display = "none";
      mainStepContainer.style.display = "none";
      sub.style.display = "flex";
    });

    btnsContainer.appendChild(confirmBottom);
  } else {
    confirmBottom.style.display = "none";

    btnNextStep.textContent = "Next Step";
    btnNextStep.style.display = "block";
  }
}

const backVisible = () => {
  if (stepIsVisible === 1) {
    textBack.style.visibility = "hidden";
  } else {
    textBack.style.visibility = "visible";
  }
}

const stepTwo = () => {
  const optionsArray = Array.from(optionsSelect);

  if (optionsArray.some(option => option.classList.contains("options-play-activate"))) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}

btnNextStep.addEventListener("click", () => {

  console.log("stepNumber:", stepNumber);

  if (stepNumber === 1) {
    if (stepOne()) {
      removeErrorState();
      textBack.style.visibility = "visible";
      stepNumber = stepNumber + 1;
      stepState();
      stepIsVisible = stepIsVisible + 1;
      stepVisibility();
    }
  } else if (stepNumber === 2) {
    console.log("stepTwo():");
    if (stepTwo()) {
      stepNumber = stepNumber + 1;
      stepState();
      stepIsVisible = stepIsVisible + 1;
      stepVisibility();
      backVisible();
    }
  } else if (stepNumber === 3) {
    stepNumber = stepNumber + 1;
    stepState();
    stepIsVisible = stepIsVisible + 1;
    stepVisibility();
    backVisible();
  } else {
    replaceButtonNextStep();
  }
});

textBack.addEventListener("click", () => {
  stepNumber = stepNumber - 1;
  stepState();
  stepIsVisible = stepIsVisible - 1;
  stepVisibility();
  backVisible();
  replaceButtonNextStep();
})

textChangeMethodPay.addEventListener('click', () => {
  stepNumber = 2;
  stepIsVisible = 2;
  stepState();
  stepVisibility();
  replaceButtonNextStep();
})