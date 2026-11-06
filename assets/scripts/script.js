const headerBtn = document.querySelector('#header-btn');
const body = document.querySelector('body');
const header = document.querySelector('header');
const iconHeader = document.querySelector('#icon-header');
const openModal = document.querySelector('#open-modal');
const overlay = document.querySelector('#overlay');
const openModalBtn = document.querySelector('#ask-Info-Btn');
const myForm = document.querySelector('#myForm');
const closeModalBtn = document.querySelector('#close-modal')

headerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(iconHeader)
  iconHeader.classList.toggle('fa-moon');
  iconHeader.classList.toggle('fa-sun');
  body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');


})

window.addEventListener('scroll', (e) => {
  e.preventDefault();
  header.classList.toggle('scrolled', window.scrollY > 250);

})

openModalBtn.addEventListener('click', (e) => {
  myForm.reset()
  overlay.classList.add('open');
})


closeModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.classList.remove('open')

})

