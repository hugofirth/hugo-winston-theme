// DOM Elements
const elements = {
  body: document.querySelector('body'),
  menuTrigger: document.querySelector('#toggle-menu-main-mobile'),
  menuContainer: document.querySelector('#menu-main-mobile'),
  hamburger: document.querySelector('.hamburger'),
  darkModeTrigger: document.querySelector('#toggle-dark-mode'),
  darkModeIcon: document.querySelector('#dark-mode-icon'),
  dot: document.querySelector('.dot')
};

// Dark mode utilities
const darkMode = {
  getSystemPreference: () => 
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
  
  getStoredPreference: () => {
    const stored = localStorage.getItem('darkMode');
    return stored !== null ? stored === 'true' : null;
  },

  updateUI: (isDark) => {
    const { body, darkModeIcon, dot } = elements;
    
    if (isDark) {
      body.classList.add('dark-mode');
      darkModeIcon?.classList.remove('bi-moon');
      darkModeIcon?.classList.add('bi-sun');
    } else {
      body.classList.remove('dark-mode');
      darkModeIcon?.classList.remove('bi-sun');
      darkModeIcon?.classList.add('bi-moon');
    }
  },

  toggleAnimation: () => {
    const { dot } = elements;
    if (!dot) return;
    
    dot.classList.remove('dot-flicker');
    // Force reflow to restart animation
    void dot.offsetWidth;
    dot.classList.add('dot-flicker');
  }
};

// Initialize dark mode
const isDarkMode = darkMode.getStoredPreference() ?? darkMode.getSystemPreference();
darkMode.updateUI(isDarkMode);

// Event Listeners
if (elements.menuTrigger && elements.menuContainer && elements.hamburger) {
  elements.menuTrigger.addEventListener('click', () => {
    elements.menuContainer.classList.toggle('open');
    elements.hamburger.classList.toggle('is-active');
    elements.body.classList.toggle('lock-scroll');
  });
}

if (elements.darkModeTrigger) {
  elements.darkModeTrigger.addEventListener('click', () => {
    const isDark = elements.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
    darkMode.updateUI(isDark);
    if (isDark) {
      darkMode.toggleAnimation();
    }
  });
}

