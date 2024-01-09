const nav = document.querySelector('.navbar');

const menu_btn = document.querySelector('.nav-hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 50) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

window.addEventListener('resize', closeMobile);

function closeMobile() {
  var w = window.outerWidth;
  if (w > 820) {
    menu_btn.classList.remove('is-active');
    mobile_menu.classList.remove('is-active');
  }
}
