const headerBtn = document.querySelector('#header-btn');
const body = document.querySelector('body');
const header = document.querySelector('header');
const iconHeader = document.querySelector('#icon-header');

headerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(iconHeader)
  iconHeader.classList.toggle('fa-moon');
  iconHeader.classList.toggle('fa-sun');
  body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');


})


