const btnMobileMenu = document.getElementById('btn-mobile-menu');
const btnMobileClose = document.getElementById('btn-mobile-close');

btnMobileMenu.addEventListener('click', toggleMenu);
btnMobileClose.addEventListener('click', toggleMenu);

function toggleMenu (){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}