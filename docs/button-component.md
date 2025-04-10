# Button Component

Buttons allow users to take actions with a single tap. They communicate actions that users can take and are typically placed in dialogs, forms, cards, and toolbars.

## Button Variants

Our design system includes several button variants to accommodate different use cases and visual hierarchies:

### Filled Button

The most prominent button style, used for primary actions.

```html
<button class="button button--filled">Filled Button</button>
```

### Outlined Button

A medium-emphasis button used for secondary actions.

```html
<button class="button button--outlined">Outlined Button</button>
```

### Text Button

A low-emphasis button used for tertiary actions.

```html
<button class="button button--text">Text Button</button>
```

### Elevated Button

A filled button with a shadow, providing additional visual emphasis.

```html
<button class="button button--elevated">Elevated Button</button>
```

### Tonal Button

A button with a lighter background color, useful for secondary actions that still need some visual prominence.

```html
<button class="button button--tonal">Tonal Button</button>
```

## Button Sizes

Buttons come in three sizes to accommodate different UI needs:

### Small Button

```html
<button class="button button--filled button--small">Small Button</button>
```

### Medium Button (Default)

```html
<button class="button button--filled button--medium">Medium Button</button>
<!-- or simply -->
<button class="button button--filled">Medium Button</button>
```

### Large Button

Large buttons have increased size, font size, and weight for greater emphasis.

```html
<button class="button button--filled button--large">Large Button</button>
```

## Button States

Buttons have different states to provide visual feedback to users:

### Default

The normal state of the button.

### Hover

When the user hovers over the button.

### Pressed/Active

When the user is actively pressing the button.

```html
<!-- These states are automatically applied through CSS -->
<button class="button button--filled">Button</button>
```

### Focused

When the button receives focus, typically through keyboard navigation.

### Disabled

When the button is not available for interaction.

```html
<button class="button button--filled" disabled>Disabled Button</button>
```

## Buttons with Icons

Icons can be added to buttons to provide additional context:

### Icon Left

```html
<button class="button button--filled button--icon-left">
    <span class="button__icon">
        <!-- SVG icon here -->
    </span>
    Icon Left
</button>
```

### Icon Right

```html
<button class="button button--filled button--icon-right">
    Right Icon
    <span class="button__icon">
        <!-- SVG icon here -->
    </span>
</button>
```

### Icon Only

Icon-only buttons are circular and can be used in any variant or size. They use predefined icon classes for consistent styling.

```html
<button class="button button--filled button--icon-only">
    <span class="button__icon button__icon--add"></span>
</button>
```

#### Available Icon Classes

The following icon classes are available:

- `button__icon--add`: Plus icon
- `button__icon--arrow-left`: Left arrow icon
- `button__icon--arrow-right`: Right arrow icon
- `button__icon--search`: Search/magnifying glass icon
- `button__icon--close`: X/close icon

#### Icon-Only Button Sizes

Icon-only buttons can also be sized:

```html
<button class="button button--filled button--icon-only button--small">
    <span class="button__icon button__icon--add"></span>
</button>

<button class="button button--filled button--icon-only button--large">
    <span class="button__icon button__icon--add"></span>
</button>
```

#### Custom Icons

You can also use custom icons or external icon libraries by adding your own CSS classes:

```css
.button__icon--custom::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("path/to/your/icon.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
```

Then use it in your button:

```html
<button class="button button--filled button--icon-only">
    <span class="button__icon button__icon--custom"></span>
</button>
```

## Click Effects

Special effects can be applied to buttons to enhance the user experience:

### Ripple Effect

A material design-inspired ripple effect when the button is clicked.

```html
<button class="button button--filled button--ripple">Ripple Effect</button>
```

### Loading State

Indicates that an action is in progress after the button is clicked. The loading spinner adapts to the button variant and size.

```html
<button class="button button--filled button--loading">Loading</button>
<button class="button button--outlined button--loading">Loading</button>
<button class="button button--tonal button--loading">Loading</button>

<!-- Different sizes -->
<button class="button button--filled button--loading button--small">Loading</button>
<button class="button button--filled button--loading button--large">Loading</button>
```

The loading state can be toggled with JavaScript:

```javascript
// Add loading state
button.classList.add('button--loading');
button.disabled = true;

// Remove loading state when operation completes
button.classList.remove('button--loading');
button.disabled = false;
```

## Button as Link

Buttons can also be styled as links:

```html
<a href="#" class="button button--filled">Link Button</a>
```

## Button Groups

Multiple buttons can be grouped together for related actions:

```html
<div style="display: flex; gap: 0; border-radius: var(--radius-md); overflow: hidden;">
    <button class="button button--filled" style="border-radius: 0;">Left</button>
    <button class="button button--filled" style="border-radius: 0; border-left: 1px solid rgba(255,255,255,0.2); border-right: 1px solid rgba(255,255,255,0.2);">Middle</button>
    <button class="button button--filled" style="border-radius: 0;">Right</button>
</div>
```

## Accessibility Considerations

- All buttons have appropriate contrast ratios for text and background colors
- Focus states are clearly visible for keyboard navigation
- Disabled buttons have visual indicators and are removed from the tab order
- Button text is descriptive of the action it performs
- Buttons with icons include appropriate aria-labels when text is not present

## Best Practices

1. **Use the right variant for the job**:
   - Use filled buttons for primary actions
   - Use outlined or text buttons for secondary actions
   - Use elevated buttons sparingly for actions that need extra emphasis

2. **Button text should be concise and action-oriented**:
   - Use verbs that clearly explain what will happen
   - Keep text short (1-3 words is ideal)
   - Avoid vague terms like "OK" or "Click Here"

3. **Button placement**:
   - Place primary actions on the right in dialogs and forms
   - Group related actions together
   - Maintain consistent button ordering across the application

4. **Button sizing**:
   - Use appropriate size for the context (small for dense UIs, large for touch targets)
   - Maintain consistent sizing for buttons with similar importance

5. **Loading states**:
   - Show loading indicators for actions that take time to complete
   - Disable the button during loading to prevent multiple submissions

## Implementation Details

The button component is built with CSS custom properties (variables) for easy theming and consistency. Key features include:

- Responsive sizing
- Consistent spacing
- Accessible focus states
- Smooth transitions
- Support for icons and text
- Various interactive states

The implementation uses flexbox for alignment and custom properties for theming, making it easy to adapt to different design requirements.