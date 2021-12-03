const elHamburgerBtn = document.querySelector(".hamburger-button");
const elHeader = document.querySelector(".header__container");

elHamburgerBtn.addEventListener('click', ()=> {
  elHeader.classList.toggle('header__open');
})