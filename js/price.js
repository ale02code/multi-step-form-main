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

const optionsPlay = document.querySelectorAll('.options-play');

const titleBill = document.querySelector(".step-4__bill__main__text__title");
const priceBill = document.querySelector(".step-4__bill__main__price");
const billAdd = document.querySelector(".step-4__bill__additional");
const totalBill = document.getElementById("total-price-bill");

const titleTotalBill = document.getElementById("total-text-bill");

let total = 0;
let payOn = 'month';

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

    titleTotalBill.textContent = "Total (per month)";
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

    titleTotalBill.textContent = "Total (per year)";
  }
}

changePriceToggle();

methodPay.addEventListener("change", () => {
  changePriceToggle();

  if (payOn === 'month') {
    titleBill.textContent = "Total (per month)";
    priceBill.textContent = `$9/mo`;
    totalBill.textContent = "$9/mo"
  } else {
    titleBill.textContent = "Total (per year)";
    priceBill.textContent = `$90/yr`;
    totalBill.textContent = "$90/yr"
  }

  if (payOn === 'month') {
    service.textContent = '+$1/mo';
    storage.textContent = '+$2/mo';
    profile.textContent = '+$2/mo';
  } else {
    service.textContent = '+$10/yr';
    storage.textContent = '+$20/yr';
    profile.textContent = '+$20/yr';
  }

  optionsPlay.forEach(option => {
    option.classList.remove("options-play-activate");
    onlineServiceCheck.checked = false;
    largerStorageCheck.checked = false;
    customizableProfileCheck.checked = false;
  })
})

// Options Play Selected Style
let planSeleted = "Arcade";
let pricePlanSeleted = 9;

let serviceTotal = 9;

optionsPlay.forEach(option => {
  option.addEventListener("click", (event) => {
    if (!event.target.classList.contains("options-play-activate")) {
      optionsPlay.forEach(opt => {
        opt.classList.remove("options-play-activate");
      });

      event.target.classList.add("options-play-activate");

      planSeleted = event.target.querySelector(".options-play__text__title").textContent;

      pricePlanSeleted = event.target.querySelector(".plan-price-selected").textContent;

      console.log("plan:", planSeleted, "price:", pricePlanSeleted);

      if (payOn === 'month') {
        if (planSeleted === "Arcade") {
          serviceTotal = 9;
        } else if (planSeleted === "Advanced") {
          serviceTotal = 12;
        } else if (planSeleted === "Pro") {
          serviceTotal = 15;
        }
      } else {
        if (planSeleted === "Arcade") {
          serviceTotal = 90;
        } else if (planSeleted === "Advanced") {
          serviceTotal = 120;
        } else if (planSeleted === "Pro") {
          serviceTotal = 150;
        }
      }

      titleBill.textContent = `${planSeleted} ${payOn === 'month' ? '$1/mo' : '$10/yr'}`;
      priceBill.textContent = pricePlanSeleted;

      totalBill.textContent = `$${(total === 0 ? serviceTotal : total + serviceTotal)}/mo`;
    }
  })
})

const containerTextOnlineService = document.createElement('div');
containerTextOnlineService.classList.add('step-4__bill__additional__texts');

const textTitleServiceOnline = document.createElement('p');
textTitleServiceOnline.classList.add('step-4__bill__additional__texts__title');

const textPriceServiceOnline = document.createElement('p');
textPriceServiceOnline.classList.add('step-4__bill__additional__texts__price');

onlineServiceCheck.addEventListener('input', () => {
  if (onlineContainer.classList.contains("additional-service-check")) {
    onlineContainer.classList.remove("additional-service-check");
  } else {
    onlineContainer.classList.add("additional-service-check");

    textTitleServiceOnline.textContent = "Online service";
    textPriceServiceOnline.textContent = `${payOn === 'month' ? '$1/mo' : '$10/yr'}`;

    total = total + (payOn === 'month' ? 1 : 10);
    totalBill.textContent = `$${serviceTotal + total}${(payOn === 'month' ? '/mo' : '/yr')}`;

    billAdd.appendChild(containerTextOnlineService);
    containerTextOnlineService.appendChild(textTitleServiceOnline);
    containerTextOnlineService.appendChild(textPriceServiceOnline);
  }
});

const containerTextLargerStorage = document.createElement('div');
containerTextLargerStorage.classList.add('step-4__bill__additional__texts');

const textTitleStorageLarger = document.createElement('p');
textTitleStorageLarger.classList.add('step-4__bill__additional__texts__title');

const textPriceStorageLarger = document.createElement('p');
textPriceStorageLarger.classList.add('step-4__bill__additional__texts__price');

largerStorageCheck.addEventListener('input', () => {
  if (largerStorageContainer.classList.contains("additional-service-check")) {
    largerStorageContainer.classList.remove("additional-service-check");
  } else {
    largerStorageContainer.classList.add("additional-service-check");

    textTitleStorageLarger.textContent = "Larger storage";
    textPriceStorageLarger.textContent = `${payOn === 'month' ? '$2/mo' : '$20/yr'}`;

    total = total + (payOn === 'month' ? 2 : 20);
    totalBill.textContent = `$${serviceTotal + total}${(payOn === 'month' ? '/mo' : '/yr')}`;

    billAdd.appendChild(containerTextLargerStorage);
    containerTextLargerStorage.appendChild(textTitleStorageLarger);
    containerTextLargerStorage.appendChild(textPriceStorageLarger);
  }
});

const containerTextCustomizableProfile = document.createElement('div');
containerTextCustomizableProfile.classList.add('step-4__bill__additional__texts');

const textTitleProfileCustomizable = document.createElement('p');
textTitleProfileCustomizable.classList.add('step-4__bill__additional__texts__title');

const textPriceProfileCustomizable = document.createElement('p');
textPriceProfileCustomizable.classList.add('step-4__bill__additional__texts__price');

customizableProfileCheck.addEventListener('input', () => {
  if (customizableProfileContainer.classList.contains("additional-service-check")) {
    customizableProfileContainer.classList.remove("additional-service-check");
  } else {
    customizableProfileContainer.classList.add("additional-service-check");

    textTitleProfileCustomizable.textContent = "Customizable profile";
    textPriceProfileCustomizable.textContent = `${payOn === 'month' ? '$2/mo' : '$20/yr'}`;

    total = total + (payOn === 'month' ? 2 : 20);
    totalBill.textContent = `$${serviceTotal + total}${(payOn === 'month' ? '/mo' : '/yr')}`;

    billAdd.appendChild(containerTextCustomizableProfile);
    containerTextCustomizableProfile.appendChild(textTitleProfileCustomizable);
    containerTextCustomizableProfile.appendChild(textPriceProfileCustomizable);
  }
});
