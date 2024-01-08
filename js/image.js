const imageContainer = document.querySelector('.header');
const image = document.createElement('img');

if (window.innerWidth < 600) {
  image.src = 'assets/images/bg-sidebar-mobile.svg';
  image.style.width = "100%"
  imageContainer.appendChild(image);
} else {
  image.src = 'assets/images/bg-sidebar-desktop.svg';
  imageContainer.appendChild(image);
}