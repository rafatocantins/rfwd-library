/**
 * Theme Switcher
 * Handles switching between light and dark themes
 */
(function() {
    // Theme constants
    const THEME_STORAGE_KEY = 'preferred-theme';
    const DARK_THEME = 'dark';
    const LIGHT_THEME = 'light';
    
    // Initialize theme on page load
    document.addEventListener('DOMContentLoaded', function() {
        initTheme();
        createThemeToggle();
    });
    
    /**
     * Initialize theme based on stored preference or system preference
     */
    function initTheme() {
        // Check for stored theme preference
        const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        
        if (storedTheme) {
            // Use stored theme preference
            setTheme(storedTheme);
        } else {
            // Check for system preference
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDarkScheme ? DARK_THEME : LIGHT_THEME);
        }
    }
    
    /**
     * Create and append the theme toggle button
     */
    function createThemeToggle() {
        // Create toggle button if it doesn't exist
        if (!document.querySelector('.theme-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'theme-toggle';
            toggle.setAttribute('aria-label', 'Toggle dark mode');
            toggle.setAttribute('title', 'Toggle dark mode');
            
            // Create sun icon (for dark mode)
            const sunIcon = document.createElement('span');
            sunIcon.className = 'theme-toggle__icon theme-toggle__icon--sun';
            sunIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
            
            // Create moon icon (for light mode)
            const moonIcon = document.createElement('span');
            moonIcon.className = 'theme-toggle__icon theme-toggle__icon--moon';
            moonIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
            
            // Append icons to toggle button
            toggle.appendChild(sunIcon);
            toggle.appendChild(moonIcon);
            
            // Add click event listener
            toggle.addEventListener('click', toggleTheme);
            
            // Append toggle button to body
            document.body.appendChild(toggle);
        }
    }
    
    /**
     * Toggle between light and dark themes
     */
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || LIGHT_THEME;
        const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        
        setTheme(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }
    
    /**
     * Set the theme by updating the data-theme attribute
     * @param {string} theme - The theme to set ('light' or 'dark')
     */
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update toggle button aria-label
        const toggle = document.querySelector('.theme-toggle');
        if (toggle) {
            toggle.setAttribute('aria-label', `Toggle ${theme === DARK_THEME ? 'light' : 'dark'} mode`);
            toggle.setAttribute('title', `Toggle ${theme === DARK_THEME ? 'light' : 'dark'} mode`);
        }
    }
})();