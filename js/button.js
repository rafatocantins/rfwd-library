/**
 * Button Component
 * Handles interactive features for buttons
 *
 * This module provides functionality for:
 * 1. Ripple effects on click
 * 2. Loading state management
 * 3. Interactive button behaviors
 *
 * Usage:
 * - Add class 'button--ripple' for ripple effect
 * - Add class 'js-loading-trigger' for loading state demo
 * - Add data attributes to customize behavior:
 *   - data-loading-time: milliseconds for loading state (default: 2000)
 *   - data-success-text: text to show after loading (default: "Done!")
 *   - data-success-time: milliseconds to show success text (default: 1500)
 */

// Button Component Module
const ButtonComponent = (function() {
    // Private variables and functions
    const DEFAULT_LOADING_TIME = 2000;
    const DEFAULT_SUCCESS_TIME = 1500;
    const DEFAULT_SUCCESS_TEXT = 'Done!';

    /**
     * Creates a ripple effect on button click
     * @param {Event} event - The click event
     */
    function createRipple(event) {
        const button = event.currentTarget;

        // Remove any existing ripple elements
        const ripple = button.querySelector('.ripple');
        if (ripple) {
            ripple.remove();
        }

        // Create new ripple element
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        // Position the ripple based on click location
        const rect = button.getBoundingClientRect();
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add('ripple');

        // Add ripple to button
        button.appendChild(circle);

        // Remove ripple after animation completes
        setTimeout(() => {
            circle.remove();
        }, 600);
    }

    /**
     * Handles loading state for buttons
     * @param {HTMLElement} button - The button element
     */
    function handleLoadingState(button) {
        if (button.disabled) return;

        // Get configuration from data attributes or use defaults
        const loadingTime = parseInt(button.dataset.loadingTime) || DEFAULT_LOADING_TIME;
        const successTime = parseInt(button.dataset.successTime) || DEFAULT_SUCCESS_TIME;
        const successText = button.dataset.successText || DEFAULT_SUCCESS_TEXT;

        // Store original text
        const originalText = button.textContent;

        // Apply loading state
        button.classList.add('button--loading');

        button.disabled = true; // Add the disabled HTML attribute

        // Simulate async operation
        setTimeout(() => {
            // Remove loading state
            button.classList.remove('button--loading');
            button.textContent = successText;

            // Reset after success display
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false; // Remove the disabled HTML attribute
            }, successTime);
        }, loadingTime);
    }

    /**
     * Initialize all button functionality
     */
    function init() {
        // Initialize ripple effect for buttons with ripple class
        document.querySelectorAll('.button--ripple').forEach(button => {
            button.addEventListener('click', createRipple);
        });

        // Initialize loading state triggers
        document.querySelectorAll('.js-loading-trigger').forEach(button => {
            button.addEventListener('click', function() {
                handleLoadingState(this);
            });
        });

        // Initialize any buttons that should start in loading state
        document.querySelectorAll('.button--loading').forEach(button => {
            // If it's just for display, leave it as is
            if (!button.classList.contains('js-loading-trigger')) return;

            // Otherwise, make it interactive
            button.classList.remove('button--loading');
        });
    }

    // Public API
    return {
        init: init,
        createRipple: createRipple,
        handleLoadingState: handleLoadingState
    };
})();

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', ButtonComponent.init);