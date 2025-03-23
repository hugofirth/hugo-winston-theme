var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-menu-main-mobile');
var menuContainer = document.querySelector('#menu-main-mobile');
var hamburgerIcon = document.querySelector('.hamburger');
var darkmodeTrigger = document.querySelector('#toggle-dark-mode');
var darkmodeIcon = document.querySelector('#dark-mode-icon');

if (menuTrigger !== null) {
  menuTrigger.addEventListener('click', function(e) {
    menuContainer.classList.toggle('open');
    hamburgerIcon.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  });
}

if (darkmodeTrigger !== null) {
  darkmodeTrigger.addEventListener('click', function(e) {
    const added = body.classList.toggle('dark-mode');
    if (added && darkmodeIcon !== null) {
      darkmodeIcon.classList.remove('bi-sun');
      darkmodeIcon.classList.add('bi-moon');
    } else if(darkmodeIcon !== null) {
      darkmodeIcon.classList.add('bi-sun');
      darkmodeIcon.classList.remove('bi-moon');
    }
  });
}

