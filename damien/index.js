// Toggle Navbar in Mobile
const  toggle = document.getElementById('toggle');
const navMobile = document.getElementById('nav-mobile');
toggle.addEventListener('click', ()=>{
  navMobile.classList.toggle('show-nav');
})