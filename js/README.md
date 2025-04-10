# JavaScript Components

This directory contains JavaScript components for the design system.

## Button Component

The `button.js` file provides interactive functionality for buttons in the design system.

### Features

1. **Ripple Effect**: Creates a material design-inspired ripple effect when buttons are clicked
2. **Loading State Management**: Handles the loading state for buttons, including animation and text changes
3. **Scalable Architecture**: Uses a module pattern for clean, maintainable code

### Usage

#### Ripple Effect

Add the `button--ripple` class to any button to enable the ripple effect:

```html
<button class="button button--filled button--ripple">Ripple Effect</button>
```

#### Loading State

There are two ways to use loading states:

1. **Static Loading State**: Add the `button--loading` class to show a button in loading state (non-interactive):

```html
<button class="button button--filled button--loading">Loading</button>
```

2. **Interactive Loading Demo**: Add the `js-loading-trigger` class to create a button that shows loading state when clicked:

```html
<button class="button button--filled js-loading-trigger">Click to Load</button>
```

When a button enters loading state via JavaScript, the following happens:
- The `button--loading` class is added for visual styling
- The `button--disabled` class is added for visual styling
- The `disabled` HTML attribute is set to prevent interaction
- When loading completes, all these are removed

#### Disabled State

Use the `button--disabled` class for visual styling and the `disabled` attribute for functionality:

```html
<button class="button button--filled button--disabled" disabled>Disabled</button>
```

The component handles both:
- `button--disabled` class: Provides the visual styling of a disabled button
- `disabled` attribute: Prevents interaction with the button

#### Customizing Loading Behavior

You can customize the loading behavior using data attributes:

```html
<button 
  class="button button--filled js-loading-trigger"
  data-loading-time="3000"
  data-success-text="Completed!"
  data-success-time="2000">
  Click to Load
</button>
```

- `data-loading-time`: Duration of loading state in milliseconds (default: 2000)
- `data-success-text`: Text to display after loading completes (default: "Done!")
- `data-success-time`: Duration to show success text in milliseconds (default: 1500)

### API

The `ButtonComponent` module exposes the following methods:

- `ButtonComponent.init()`: Initialize all button functionality
- `ButtonComponent.createRipple(event)`: Create a ripple effect on a button
- `ButtonComponent.handleLoadingState(button)`: Handle loading state for a button

### Implementation Details

The component uses a module pattern to encapsulate functionality and prevent global namespace pollution. It automatically initializes when the DOM is loaded.

All styles are defined in the main CSS file, making the component more maintainable and allowing for easier theming.