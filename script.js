const nav = document.querySelector('.navbar');
const menu_btn = document.querySelector('.nav-hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

window.addEventListener('scroll', fixNav);
window.addEventListener('resize', closeMobile);

function handleScrollAndResize() {
  fixNav();
  closeMobile();
}

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 50) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

function closeMobile() {
  const windowWidth = window.outerWidth;
  if (windowWidth > 820) {
    menu_btn.classList.remove('is-active');
    mobile_menu.classList.remove('is-active');
  }
}
