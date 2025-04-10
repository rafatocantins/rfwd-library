/**
 * Alert Toaster Component
 * A reusable alert toaster component with different variants
 */

class AlertToaster {
    constructor() {
        this.toasterContainer = null;
        this.createToasterContainer();
        this.activeToasts = [];
        this.toastIdCounter = 0;
    }

    /**
     * Create the main container for toasts
     */
    createToasterContainer() {
        // Check if container already exists
        if (document.getElementById('alert-toaster-container')) {
            this.toasterContainer = document.getElementById('alert-toaster-container');
            return;
        }

        // Create container
        this.toasterContainer = document.createElement('div');
        this.toasterContainer.id = 'alert-toaster-container';
        this.toasterContainer.className = 'alert-toaster-container';
        document.body.appendChild(this.toasterContainer);
    }

    /**
     * Show a toast notification
     * @param {string} message - The message to display
     * @param {string} variant - The variant of the toast (danger, success, warning, info, neutral)
     * @param {number} duration - Duration in milliseconds before auto-dismiss
     * @param {boolean} dismissible - Whether the toast can be manually dismissed
     */
    show(message, variant = 'neutral', duration = 5000, dismissible = true) {
        const toastId = `toast-${this.toastIdCounter++}`;
        
        // Create toast element
        const toast = document.createElement('div');
        toast.id = toastId;
        toast.className = `alert-toast alert-toast--${variant}`;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        
        // Get icon class based on variant
        const iconClass = this.getIconForVariant(variant);
        
        // Create toast content
        toast.innerHTML = `
            <div class="alert-toast__icon ${iconClass}"></div>
            <div class="alert-toast__content">
                <div class="alert-toast__message">${message}</div>
            </div>
            ${dismissible ? '<button class="alert-toast__close" aria-label="Close notification">×</button>' : ''}
        `;
        
        // Add to container
        this.toasterContainer.appendChild(toast);
        
        // Add to active toasts
        this.activeToasts.push({
            id: toastId,
            element: toast,
            timeoutId: null
        });
        
        // Add event listener for close button
        if (dismissible) {
            const closeButton = toast.querySelector('.alert-toast__close');
            closeButton.addEventListener('click', () => this.dismiss(toastId));
        }
        
        // Trigger enter animation
        setTimeout(() => {
            toast.classList.add('alert-toast--visible');
        }, 10);
        
        // Set auto-dismiss timeout
        if (duration > 0) {
            const timeoutId = setTimeout(() => {
                this.dismiss(toastId);
            }, duration);
            
            // Store timeout ID
            const toastObj = this.activeToasts.find(t => t.id === toastId);
            if (toastObj) {
                toastObj.timeoutId = timeoutId;
            }
        }
        
        return toastId;
    }
    
    /**
     * Dismiss a specific toast
     * @param {string} toastId - The ID of the toast to dismiss
     */
    dismiss(toastId) {
        const toastIndex = this.activeToasts.findIndex(t => t.id === toastId);
        if (toastIndex === -1) return;
        
        const toast = this.activeToasts[toastIndex];
        
        // Clear timeout if exists
        if (toast.timeoutId) {
            clearTimeout(toast.timeoutId);
        }
        
        // Trigger exit animation
        toast.element.classList.remove('alert-toast--visible');
        toast.element.classList.add('alert-toast--hiding');
        
        // Remove after animation completes
        setTimeout(() => {
            if (toast.element.parentNode) {
                toast.element.parentNode.removeChild(toast.element);
            }
            this.activeToasts.splice(toastIndex, 1);
        }, 300);
    }
    
    /**
     * Dismiss all active toasts
     */
    dismissAll() {
        [...this.activeToasts].forEach(toast => {
            this.dismiss(toast.id);
        });
    }
    
    /**
     * Get the appropriate icon class for a variant
     * @param {string} variant - The variant name
     * @returns {string} - CSS class for the icon
     */
    getIconForVariant(variant) {
        return `alert-icon--${variant}`;
    }
    
    /**
     * Convenience method for showing a danger toast
     */
    danger(message, duration = 5000, dismissible = true) {
        return this.show(message, 'danger', duration, dismissible);
    }
    
    /**
     * Convenience method for showing a success toast
     */
    success(message, duration = 5000, dismissible = true) {
        return this.show(message, 'success', duration, dismissible);
    }
    
    /**
     * Convenience method for showing a warning toast
     */
    warning(message, duration = 5000, dismissible = true) {
        return this.show(message, 'warning', duration, dismissible);
    }
    
    /**
     * Convenience method for showing an info toast
     */
    info(message, duration = 5000, dismissible = true) {
        return this.show(message, 'info', duration, dismissible);
    }
    
    /**
     * Convenience method for showing a neutral toast
     */
    neutral(message, duration = 5000, dismissible = true) {
        return this.show(message, 'neutral', duration, dismissible);
    }
}

// Initialize the toaster
const alertToaster = new AlertToaster();

// Initialize demo functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const demoForm = document.getElementById('alert-toaster-demo-form');
    if (demoForm) {
        demoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = document.getElementById('alert-message').value || 'This is a sample alert message';
            const variant = document.getElementById('alert-variant').value;
            const duration = parseInt(document.getElementById('alert-duration').value) || 5000;
            
            alertToaster.show(message, variant, duration);
        });
    }
});