/**
 * Tabs Component
 * Handles tab functionality for the design system
 *
 * Usage:
 * 1. Include this script in your HTML
 * 2. Create tabs with the following structure:
 *    <div id="your-tabs-id" class="tabs">
 *      <div class="tabs__nav" role="tablist">
 *        <a href="#tab1" class="tabs__tab" role="tab" aria-selected="true">Tab 1</a>
 *        <a href="#tab2" class="tabs__tab" role="tab">Tab 2</a>
 *        <!-- Add more tabs as needed -->
 *      </div>
 *      <div id="tab1" class="tabs__panel" role="tabpanel">
 *        <!-- Content for Tab 1 -->
 *      </div>
 *      <div id="tab2" class="tabs__panel" role="tabpanel">
 *        <!-- Content for Tab 2 -->
 *      </div>
 *      <!-- Add more panels as needed -->
 *    </div>
 *
 * The script will automatically initialize all tab containers with the class "tabs".
 */

const TabSystem = (function() {
    // Private variables and functions
    let initialized = false;

    /**
     * Initialize the tab system
     */
    function init() {
        if (initialized) return;

        // Find all tab containers
        const tabContainers = document.querySelectorAll('.tabs');

        // Initialize each container
        tabContainers.forEach(container => {
            initTabContainer(container);
        });

        // Check if URL has a hash and activate the corresponding tab
        handleUrlHash();

        // Listen for hash changes
        window.addEventListener('hashchange', handleUrlHash);

        initialized = true;
    }

    /**
     * Initialize a single tab container
     * @param {HTMLElement} container - The tab container element
     */
    function initTabContainer(container) {
        // Find the tab navigation container (either tabs__list or tabs__nav)
        const tabNav = container.querySelector('.tabs__list, .tabs__nav');
        if (!tabNav) return;

        const tabs = tabNav.querySelectorAll('.tabs__tab');

        // Set up click events for tabs
        tabs.forEach(tab => {
            // Set ARIA attributes if not already set
            if (!tab.getAttribute('role')) {
                tab.setAttribute('role', 'tab');
            }

            // Set up click event
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                activateTab(container, targetId);

                // Update URL hash without scrolling
                history.pushState(null, null, '#' + targetId);

                // Dispatch custom event
                container.dispatchEvent(new CustomEvent('tab:changed', {
                    bubbles: true,
                    detail: { tabId: targetId }
                }));
            });

            // Add keyboard navigation
            tab.addEventListener('keydown', function(e) {
                // Handle arrow keys for accessibility
                if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                    e.preventDefault();

                    const allTabs = Array.from(tabNav.querySelectorAll('.tabs__tab'));
                    const currentIndex = allTabs.indexOf(this);
                    let newIndex;

                    if (e.key === 'ArrowLeft') {
                        newIndex = currentIndex > 0 ? currentIndex - 1 : allTabs.length - 1;
                    } else {
                        newIndex = currentIndex < allTabs.length - 1 ? currentIndex + 1 : 0;
                    }

                    allTabs[newIndex].focus();
                    allTabs[newIndex].click();
                }
            });
        });

        // Activate the first tab if none is active
        const activeTabs = tabNav.querySelectorAll('.tabs__tab--active');
        if (activeTabs.length === 0 && tabs.length > 0) {
            const firstTabId = tabs[0].getAttribute('href').substring(1);
            activateTab(container, firstTabId);
        }
    }

    /**
     * Handle URL hash changes
     */
    function handleUrlHash() {
        if (window.location.hash) {
            const hash = window.location.hash;
            const tabLink = document.querySelector(`.tabs__tab[href="${hash}"]`);
            if (tabLink) {
                const tabsContainer = tabLink.closest('.tabs');
                if (tabsContainer) {
                    activateTab(tabsContainer, hash.substring(1));
                }
            }
        }
    }

    /**
     * Activate a specific tab
     * @param {HTMLElement} container - The tab container element
     * @param {string} tabId - ID of the tab to activate
     */
    function activateTab(container, tabId) {
        if (!container) return;

        // Find the tab navigation container (either tabs__list or tabs__nav)
        const tabNav = container.querySelector('.tabs__list, .tabs__nav');
        if (!tabNav) return;

        // Deactivate all tabs and panels
        const allTabs = tabNav.querySelectorAll('.tabs__tab');
        const allPanels = container.querySelectorAll('.tabs__panel');

        allTabs.forEach(tab => {
            tab.classList.remove('tabs__tab--active');
            tab.setAttribute('aria-selected', 'false');
        });

        allPanels.forEach(panel => {
            panel.classList.remove('tabs__panel--active');
        });

        // Activate the selected tab and panel
        const selectedTab = tabNav.querySelector(`.tabs__tab[href="#${tabId}"]`);
        const selectedPanel = container.querySelector(`#${tabId}`);

        if (selectedTab && selectedPanel) {
            selectedTab.classList.add('tabs__tab--active');
            selectedTab.setAttribute('aria-selected', 'true');
            selectedPanel.classList.add('tabs__panel--active');
        }
    }

    /**
     * Manually activate a tab by its ID
     * @param {string} tabId - ID of the tab panel to activate
     */
    function activateTabById(tabId) {
        const panel = document.getElementById(tabId);
        if (!panel) return;

        const container = panel.closest('.tabs');
        if (container) {
            activateTab(container, tabId);
        }
    }

    /**
     * Manually initialize a new tab container that was added dynamically
     * @param {string|HTMLElement} container - The tab container element or its ID
     */
    function initNewTabContainer(container) {
        if (typeof container === 'string') {
            container = document.getElementById(container);
        }

        if (container && container.classList.contains('tabs')) {
            initTabContainer(container);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Public API
    return {
        activate: activateTabById,
        init: initNewTabContainer
    };
})();