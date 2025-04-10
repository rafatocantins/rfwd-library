# Component Usage Guide

This guide explains how to use the reusable components in the design system.

## Tabs Component

The tabs component allows you to organize content into separate views where only one view is visible at a time.

### HTML Structure

```html
<div class="tabs" id="your-tabs-id">
    <!-- Tab navigation -->
    <div class="tabs__nav" role="tablist">
        <a href="#tab1" class="tabs__tab tabs__tab--active" role="tab" aria-selected="true" aria-controls="tab1">Tab 1</a>
        <a href="#tab2" class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab2">Tab 2</a>
        <a href="#tab3" class="tabs__tab" role="tab" aria-selected="false" aria-controls="tab3">Tab 3</a>
    </div>

    <!-- Tab content panels -->
    <div id="tab1" class="tabs__panel tabs__panel--active" role="tabpanel" aria-labelledby="tab1">
        <h4>Tab 1 Content</h4>
        <p>Content for the first tab.</p>
    </div>
    <div id="tab2" class="tabs__panel" role="tabpanel" aria-labelledby="tab2">
        <h4>Tab 2 Content</h4>
        <p>Content for the second tab.</p>
    </div>
    <div id="tab3" class="tabs__panel" role="tabpanel" aria-labelledby="tab3">
        <h4>Tab 3 Content</h4>
        <p>Content for the third tab.</p>
    </div>
</div>
```

### Adding New Tabs

To add a new tab, simply add a new tab link in the `tabs__nav` section and a corresponding panel:

```html
<!-- Add a new tab link in the tabs__nav -->
<a href="#newTab" class="tabs__tab" role="tab" aria-selected="false" aria-controls="newTab">New Tab</a>

<!-- Add the corresponding panel -->
<div id="newTab" class="tabs__panel" role="tabpanel" aria-labelledby="newTab">
    <h4>New Tab Content</h4>
    <p>Content for the new tab.</p>
</div>
```

### JavaScript API

The tabs component provides a JavaScript API for programmatic control:

```javascript
// Activate a specific tab by its ID
TabSystem.activate('tab2');

// Initialize a dynamically added tab container
TabSystem.init('dynamic-tabs-id');
```

## Modal Component

The modal component displays content that requires user attention or interaction.

### HTML Structure

```html
<!-- Modal Trigger -->
<button data-modal-open="your-modal-id">Open Modal</button>

<!-- Modal Container -->
<div id="your-modal-id" class="modal-container">
    <div class="modal__overlay" data-modal-close></div>
    <div class="modal">
        <button class="modal__close" data-modal-close aria-label="Close modal">×</button>
        <div class="modal__header">
            <h2 class="modal__title">Modal Title</h2>
            <p class="modal__subtitle">Optional subtitle</p>
        </div>
        <div class="modal__content">
            <p>Modal content goes here.</p>
        </div>
        <div class="modal__actions">
            <button class="button" data-modal-close>Cancel</button>
            <button class="button button--filled">Confirm</button>
        </div>
    </div>
</div>
```

### Adding New Modals

To add a new modal, simply create the HTML structure as shown above with a unique ID, and add a trigger button with the `data-modal-open` attribute pointing to that ID.

### JavaScript API

The modal component provides a JavaScript API for programmatic control:

```javascript
// Open a modal by its ID
ModalSystem.open('your-modal-id');

// Close a modal by its ID
ModalSystem.close('your-modal-id');
```

## Events

Both components emit custom events that you can listen for:

### Tab Events

```javascript
document.getElementById('your-tabs-id').addEventListener('tab:changed', function(event) {
    console.log('Tab changed to:', event.detail.tabId);
});
```

### Modal Events

```javascript
document.getElementById('your-modal-id').addEventListener('modal:opened', function() {
    console.log('Modal opened');
});

document.getElementById('your-modal-id').addEventListener('modal:closed', function() {
    console.log('Modal closed');
});
```

## Accessibility

Both components are built with accessibility in mind:

- Proper ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader announcements

## Browser Support

These components work in all modern browsers (Chrome, Firefox, Safari, Edge).