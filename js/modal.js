/**
 * Modal Component
 * Handles opening and closing of modal dialogs
 *
 * Usage:
 * 1. Include this script in your HTML
 * 2. Create modal HTML with the following structure:
 *    <div id="your-modal-id" class="modal-container">
 *      <div class="modal__overlay" data-modal-close></div>
 *      <div class="modal">
 *        <button class="modal__close" data-modal-close aria-label="Close modal">×</button>
 *        <div class="modal__header">
 *          <h2 class="modal__title">Modal Title</h2>
 *        </div>
 *        <div class="modal__content">
 *          <!-- Modal content here -->
 *        </div>
 *        <div class="modal__actions">
 *          <button class="button" data-modal-close>Cancel</button>
 *          <button class="button button--filled">Confirm</button>
 *        </div>
 *      </div>
 *    </div>
 *
 * 3. Create a trigger with data-modal-open attribute:
 *    <button data-modal-open="your-modal-id">Open Modal</button>
 *
 * The script will automatically handle all modals on the page.
 */

const ModalSystem = (function() {
    // Private variables and functions
    let initialized = false;
    let activeModals = [];

    /**
     * Initialize the modal system
     */
    function init() {
        if (initialized) return;

        // Set up event delegation on document body for better performance
        document.body.addEventListener('click', handleClick);

        // Close modal when Escape key is pressed
        document.addEventListener('keydown', handleKeydown);

        initialized = true;
    }

    /**
     * Handle click events for modal triggers and closers
     * @param {Event} event - The click event
     */
    function handleClick(event) {
        // Check if clicked element or its parent has data-modal-open
        const trigger = event.target.closest('[data-modal-open]');
        if (trigger) {
            event.preventDefault();
            const modalId = trigger.getAttribute('data-modal-open');
            openModal(modalId);
            return;
        }

        // Check if clicked element or its parent has data-modal-close
        const closer = event.target.closest('[data-modal-close]');
        if (closer) {
            event.preventDefault();
            const modalContainer = closer.closest('.modal-container');
            if (modalContainer) {
                closeModal(modalContainer.id);
            }
            return;
        }

        // Check if clicked on modal__overlay (background)
        if (event.target.classList.contains('modal__overlay')) {
            const modalContainer = event.target.closest('.modal-container');
            if (modalContainer) {
                closeModal(modalContainer.id);
            }
        }
    }

    /**
     * Handle keydown events for modals
     * @param {KeyboardEvent} event - The keydown event
     */
    function handleKeydown(event) {
        if (event.key === 'Escape' && activeModals.length > 0) {
            // Close the most recently opened modal
            closeModal(activeModals[activeModals.length - 1]);
        }
    }

    /**
     * Open a modal by ID
     * @param {string} modalId - The ID of the modal to open
     */
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        // Add active class to show the modal
        modal.classList.add('active');

        // Add to active modals stack
        activeModals.push(modalId);

        // Prevent scrolling on the body
        document.body.style.overflow = 'hidden';

        // Set focus on the first focusable element in the modal
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }

        // Announce to screen readers
        const modalTitle = modal.querySelector('.modal__title');
        if (modalTitle) {
            const ariaLive = document.createElement('div');
            ariaLive.setAttribute('aria-live', 'polite');
            ariaLive.classList.add('sr-only');
            ariaLive.textContent = `Dialog opened: ${modalTitle.textContent}`;
            document.body.appendChild(ariaLive);

            // Remove after announcement
            setTimeout(() => {
                document.body.removeChild(ariaLive);
            }, 1000);
        }

        // Trigger custom event
        modal.dispatchEvent(new CustomEvent('modal:opened', { bubbles: true }));
    }

    /**
     * Close a modal by ID
     * @param {string} modalId - The ID of the modal to close
     */
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        // Remove active class to hide the modal
        modal.classList.remove('active');

        // Remove from active modals stack
        const index = activeModals.indexOf(modalId);
        if (index > -1) {
            activeModals.splice(index, 1);
        }

        // Restore scrolling on the body if no more active modals
        if (activeModals.length === 0) {
            document.body.style.overflow = '';
        }

        // Return focus to the trigger that opened the modal
        const trigger = document.querySelector(`[data-modal-open="${modalId}"]`);
        if (trigger) {
            trigger.focus();
        }

        // Trigger custom event
        modal.dispatchEvent(new CustomEvent('modal:closed', { bubbles: true }));
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Public API
    return {
        open: openModal,
        close: closeModal
    };
})();