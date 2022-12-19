var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-menu-main-mobile');
var menuContainer = document.querySelector('#menu-main-mobile');
var hamburgerIcon = document.querySelector('.hamburger');
var darkmodeTrigger = document.querySelector('#toggle-dark-mode');

if (menuTrigger !== null) {
  menuTrigger.addEventListener('click', function(e) {
    menuContainer.classList.toggle('open');
    hamburgerIcon.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  });
}

if (darkmodeTrigger !== null) {
  darkmodeTrigger.addEventListener('click', function(e) {
    body.classList.toggle('dark-mode');	  
  });
}
