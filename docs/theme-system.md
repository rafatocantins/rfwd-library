# Theme System

The theme system provides a way to switch between light and dark themes in the design system.

## Features

- Automatic theme detection based on system preferences
- Manual theme toggle with persistent preference storage
- Smooth transitions between themes
- Accessible theme toggle button

## Usage

The theme system is automatically initialized when the page loads. A theme toggle button is added to the top-right corner of the page.

### HTML Structure

The theme system uses the `data-theme` attribute on the `html` element to control the active theme:

```html
<html lang="en" data-theme="light">
  <!-- Page content -->
</html>
```

### CSS Variables

The theme system uses CSS variables to define colors and other theme-specific properties. These variables are defined in the `:root` selector for the light theme and in the `[data-theme="dark"]` selector for the dark theme.

```css
:root {
  /* Light theme variables */
  --primary: #DF0024;
  --background: #FFFFFF;
  /* ... */
}

[data-theme="dark"] {
  /* Dark theme variables */
  --primary: #FF4D6D;
  --background: #121212;
  /* ... */
}
```

### JavaScript API

The theme system provides a JavaScript API for programmatically controlling the theme:

```javascript
// Get the current theme
const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

// Set the theme
document.documentElement.setAttribute('data-theme', 'dark');

// Toggle the theme
const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
document.documentElement.setAttribute('data-theme', newTheme);
```

### Theme Toggle Button

The theme toggle button is automatically added to the page. It can be styled using the following CSS classes:

- `.theme-toggle`: The main button container
- `.theme-toggle__icon`: The icon container
- `.theme-toggle__icon--sun`: The sun icon (shown in dark mode)
- `.theme-toggle__icon--moon`: The moon icon (shown in light mode)

## Customization

### Custom Toggle Button

You can create your own theme toggle button by adding the following HTML:

```html
<button class="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">
  <span class="theme-toggle__icon theme-toggle__icon--sun">
    <!-- Sun icon SVG -->
  </span>
  <span class="theme-toggle__icon theme-toggle__icon--moon">
    <!-- Moon icon SVG -->
  </span>
</button>
```

### Custom Theme Colors

To customize the theme colors, modify the CSS variables in the `:root` and `[data-theme="dark"]` selectors in your CSS file.

## Accessibility

The theme toggle button is fully accessible:

- It has appropriate `aria-label` and `title` attributes
- It updates these attributes based on the current theme
- It respects the user's system preference for reduced motion
- It provides visual feedback on focus and hover

## Browser Support

The theme system works in all modern browsers that support CSS variables and the `localStorage` API.