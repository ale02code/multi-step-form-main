const methodPay = document.getElementById('method-pay');

const arcadePrice = document.querySelector(".options-play__text__arcade-price");
const advancedPrice = document.querySelector(".options-play__text__advanced-price");
const proPrice = document.querySelector(".options-play__text__pro-price");

const optionsPlayTextYearFree = document.querySelectorAll(".options-play__text__months-free-invisible");

const month = document.getElementById("monthly");
const year = document.getElementById("yearly");

const changePriceToggle = () => {
  if (methodPay.value === '0') {
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
})