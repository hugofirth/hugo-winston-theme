const body = document.querySelector('body');
const menuTrigger = document.querySelector('#toggle-menu-main-mobile');
const menuContainer = document.querySelector('#menu-main-mobile');
const hamburgerIcon = document.querySelector('.hamburger');
const darkmodeTrigger = document.querySelector('#toggle-dark-mode');
const darkmodeIcon = document.querySelector('#dark-mode-icon');
const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
	(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

if (isDarkMode) {
  body.classList.add('dark-mode');
  darkmodeIcon.classList.remove('bi-moon');
  darkmodeIcon.classList.add('bi-sun');
} else {
  body.classList.remove('dark-mode');
  darkmodeIcon.classList.remove('bi-sun');
  darkmodeIcon.classList.add('bi-moon');
}

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
      darkmodeIcon.classList.remove('bi-moon');
      darkmodeIcon.classList.add('bi-sun');
    } else if(darkmodeIcon !== null) {
      darkmodeIcon.classList.add('bi-moon');
      darkmodeIcon.classList.remove('bi-sun');
    }
  });
}

