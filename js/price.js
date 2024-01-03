const methodPay = document.getElementById('method-pay');

const arcadePrice = document.querySelector(".options-play__text__arcade-price");
const advancedPrice = document.querySelector(".options-play__text__advanced-price");
const proPrice = document.querySelector(".options-play__text__pro-price");

const optionsPlayTextYearFree = document.querySelectorAll(".options-play__text__months-free-invisible");

const month = document.getElementById("monthly");
const year = document.getElementById("yearly");

const service = document.getElementById("online-service-price");
const storage = document.getElementById("larger-storage-price");
const profile = document.getElementById("customizable-profile-price");

const onlineServiceCheck = document.getElementById("online-service");
const largerStorageCheck = document.getElementById("larger-storage");
const customizableProfileCheck = document.getElementById("customizable-profile");

const onlineContainer = document.getElementById("online-service-container");
const largerStorageContainer = document.getElementById("larger-storage-container");
const customizableProfileContainer = document.getElementById("customizable-profile-container");

// const checkBox = document.querySelectorAll(".check-add");
// const addContainer = document.querySelectorAll(".additional-service");

let payOn = '';

const changePriceToggle = () => {
  if (methodPay.value === '0') {
    payOn = 'month';

    arcadePrice.textContent = '$9/mo';
    advancedPrice.textContent = '$12/mo';
    proPrice.textContent = '$15/mo';

    if (!year.classList.contains("yearly-activate")) {
      year.classList.add("yearly-activate");
      month.classList.replace("monthly-activate", "monthly");
    }

    optionsPlayTextYearFree.forEach(text => {
      text.classList.replace("options-play__text__months-free", "options-play__text__months-free-invisible");
    })
  } else {
    payOn = 'year';

    arcadePrice.textContent = '$90/yr';
    advancedPrice.textContent = '$120/yr';
    proPrice.textContent = '$150/yr';

    if (!month.classList.contains("monthly-activate")) {
      month.classList.add("monthly-activate");
      year.classList.replace("yearly-activate", "yearly");
    }

    optionsPlayTextYearFree.forEach(text => {
      text.classList.replace("options-play__text__months-free-invisible", "options-play__text__months-free");
    })
  }
}

changePriceToggle();

methodPay.addEventListener("change", () => {
  changePriceToggle();

  if (payOn === 'month') {
    service.textContent = '$1/mo';
    storage.textContent = '$2/mo';
    profile.textContent = '$2/mo';
  } else {
    service.textContent = '$10/yr';
    storage.textContent = '$20/yr';
    profile.textContent = '$20/yr';
  }
})



onlineServiceCheck.addEventListener('change', () => {
  if (onlineContainer.classList.contains("additional-service-check")) {
    onlineContainer.classList.remove("additional-service-check");
  } else {
    onlineContainer.classList.add("additional-service-check");
  }
});

largerStorageCheck.addEventListener('change', () => {
  if (largerStorageContainer.classList.contains("additional-service-check")) {
    largerStorageContainer.classList.remove("additional-service-check");
  } else {
    largerStorageContainer.classList.add("additional-service-check");
  }
});

customizableProfileCheck.addEventListener('change', () => {
  if (customizableProfileContainer.classList.contains("additional-service-check")) {
    customizableProfileContainer.classList.remove("additional-service-check");
  } else {
    customizableProfileContainer.classList.add("additional-service-check");
  }
});