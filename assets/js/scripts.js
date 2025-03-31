// DOM Elements
const elements = {
  body: document.querySelector('body'),
  menuTrigger: document.querySelector('#toggle-menu-main-mobile'),
  menuContainer: document.querySelector('#menu-main-mobile'),
  hamburger: document.querySelector('.hamburger'),
  darkModeToggles: document.querySelectorAll('.dark-mode-toggle'),
  darkModeIconDesktop: document.querySelector('#dark-mode-icon-desktop'),
  darkModeIconMobile: document.querySelector('#dark-mode-icon-mobile'),
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
    const { body, darkModeIconDesktop, darkModeIconMobile, dot } = elements;
    
    if (isDark) {
      body.classList.add('dark-mode');
      darkModeIconDesktop?.classList.remove('bi-moon');
      darkModeIconDesktop?.classList.add('bi-sun');
      darkModeIconMobile?.classList.remove('bi-moon');
      darkModeIconMobile?.classList.add('bi-sun');
    } else {
      body.classList.remove('dark-mode');
      darkModeIconDesktop?.classList.remove('bi-sun');
      darkModeIconDesktop?.classList.add('bi-moon');
      darkModeIconMobile?.classList.remove('bi-sun');
      darkModeIconMobile?.classList.add('bi-moon');
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

// Add click event listeners to all dark mode toggles
elements.darkModeToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const isDark = elements.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDark);
    darkMode.updateUI(isDark);
    if (isDark) {
      darkMode.toggleAnimation();
    }
  });
});

