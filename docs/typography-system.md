# Typography System

This document outlines the typography system used in our design system. The typography system is designed to be scalable, accessible, and easy to use across all components.

## Font Tokens

### Font Family

```css
--font-family-base: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
--font-family-heading: var(--font-family-base);
--font-family-mono: 'Roboto Mono', monospace;
```

### Font Sizes

```css
--font-size-xs: 0.75rem;   /* 12px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-base: 1rem;    /* 16px */
--font-size-lg: 1.125rem;  /* 18px */
--font-size-xl: 1.25rem;   /* 20px */
--font-size-2xl: 1.5rem;   /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem;  /* 36px */
--font-size-5xl: 3rem;     /* 48px */
```

### Font Weights

```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line Heights

```css
--line-height-tight: 1.2;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
```

### Letter Spacing

```css
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0em;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;
```

## Text Styles

Our typography system includes predefined text styles that combine font size, weight, line height, and letter spacing for consistent typography across the application.

### Display Styles

Used for large headlines, typically at the top of pages.

```css
.text-display-large {
    font-size: var(--text-display-large-size);
    font-weight: var(--text-display-large-weight);
    line-height: var(--text-display-large-line-height);
    letter-spacing: var(--text-display-large-tracking);
}

.text-display-medium {
    font-size: var(--text-display-medium-size);
    font-weight: var(--text-display-medium-weight);
    line-height: var(--text-display-medium-line-height);
    letter-spacing: var(--text-display-medium-tracking);
}

.text-display-small {
    font-size: var(--text-display-small-size);
    font-weight: var(--text-display-small-weight);
    line-height: var(--text-display-small-line-height);
    letter-spacing: var(--text-display-small-tracking);
}
```

### Headline Styles

Used for section headings.

```css
.text-headline-large {
    font-size: var(--text-headline-large-size);
    font-weight: var(--text-headline-large-weight);
    line-height: var(--text-headline-large-line-height);
    letter-spacing: var(--text-headline-large-tracking);
}

.text-headline-medium {
    font-size: var(--text-headline-medium-size);
    font-weight: var(--text-headline-medium-weight);
    line-height: var(--text-headline-medium-line-height);
    letter-spacing: var(--text-headline-medium-tracking);
}

.text-headline-small {
    font-size: var(--text-headline-small-size);
    font-weight: var(--text-headline-small-weight);
    line-height: var(--text-headline-small-line-height);
    letter-spacing: var(--text-headline-small-tracking);
}
```

### Title Styles

Used for subsection headings and component titles.

```css
.text-title-large {
    font-size: var(--text-title-large-size);
    font-weight: var(--text-title-large-weight);
    line-height: var(--text-title-large-line-height);
    letter-spacing: var(--text-title-large-tracking);
}

.text-title-medium {
    font-size: var(--text-title-medium-size);
    font-weight: var(--text-title-medium-weight);
    line-height: var(--text-title-medium-line-height);
    letter-spacing: var(--text-title-medium-tracking);
}

.text-title-small {
    font-size: var(--text-title-small-size);
    font-weight: var(--text-title-small-weight);
    line-height: var(--text-title-small-line-height);
    letter-spacing: var(--text-title-small-tracking);
}
```

### Body Styles

Used for paragraph text and general content.

```css
.text-body-large {
    font-size: var(--text-body-large-size);
    font-weight: var(--text-body-large-weight);
    line-height: var(--text-body-large-line-height);
    letter-spacing: var(--text-body-large-tracking);
}

.text-body-medium {
    font-size: var(--text-body-medium-size);
    font-weight: var(--text-body-medium-weight);
    line-height: var(--text-body-medium-line-height);
    letter-spacing: var(--text-body-medium-tracking);
}

.text-body-small {
    font-size: var(--text-body-small-size);
    font-weight: var(--text-body-small-weight);
    line-height: var(--text-body-small-line-height);
    letter-spacing: var(--text-body-small-tracking);
}
```

### Label Styles

Used for buttons, form labels, and other UI elements.

```css
.text-label-large {
    font-size: var(--text-label-large-size);
    font-weight: var(--text-label-large-weight);
    line-height: var(--text-label-large-line-height);
    letter-spacing: var(--text-label-large-tracking);
    text-transform: uppercase;
}

.text-label-medium {
    font-size: var(--text-label-medium-size);
    font-weight: var(--text-label-medium-weight);
    line-height: var(--text-label-medium-line-height);
    letter-spacing: var(--text-label-medium-tracking);
    text-transform: uppercase;
}

.text-label-small {
    font-size: var(--text-label-small-size);
    font-weight: var(--text-label-small-weight);
    line-height: var(--text-label-small-line-height);
    letter-spacing: var(--text-label-small-tracking);
    text-transform: uppercase;
}
```

## Usage in Components

Our components have been updated to use these typography tokens for consistent styling:

### Buttons

Buttons use the label styles for text:

```css
.button {
    font-family: var(--font-family-base);
    font-size: var(--text-label-large-size);
    font-weight: var(--text-label-large-weight);
    line-height: var(--text-label-large-line-height);
    letter-spacing: var(--text-label-large-tracking);
    /* Other button styles */
}

.button--small {
    font-size: var(--text-label-medium-size);
    /* Other small button styles */
}
```

### Cards

Cards use title and body styles:

```css
.card__title {
    font-size: var(--text-title-large-size);
    font-weight: var(--text-title-large-weight);
    line-height: var(--text-title-large-line-height);
    letter-spacing: var(--text-title-large-tracking);
    /* Other title styles */
}

.card__content p {
    font-size: var(--text-body-medium-size);
    font-weight: var(--text-body-medium-weight);
    line-height: var(--text-body-medium-line-height);
    letter-spacing: var(--text-body-medium-tracking);
    /* Other paragraph styles */
}
```

### Modals

Modals use headline, title, and body styles:

```css
.modal__title {
    font-size: var(--text-headline-medium-size);
    font-weight: var(--text-headline-medium-weight);
    line-height: var(--text-headline-medium-line-height);
    letter-spacing: var(--text-headline-medium-tracking);
    /* Other title styles */
}

.modal__subtitle {
    font-size: var(--text-body-medium-size);
    font-weight: var(--text-body-medium-weight);
    line-height: var(--text-body-medium-line-height);
    letter-spacing: var(--text-body-medium-tracking);
    /* Other subtitle styles */
}

.modal__content {
    font-size: var(--text-body-large-size);
    font-weight: var(--text-body-large-weight);
    line-height: var(--text-body-large-line-height);
    letter-spacing: var(--text-body-large-tracking);
    /* Other content styles */
}
```

## Accessibility Considerations

Our typography system is designed with accessibility in mind:

1. **Font Sizes**: All font sizes are defined in relative units (rem) to respect user preferences.
2. **Line Heights**: Generous line heights improve readability, especially for users with dyslexia or visual impairments.
3. **Color Contrast**: Text colors have been chosen to meet WCAG 2.1 AA standards for contrast.
4. **Font Weights**: We use appropriate font weights to ensure text is readable at all sizes.
5. **Letter Spacing**: Proper letter spacing improves readability, especially for uppercase text.

## Responsive Typography

Our typography system is responsive by default:

- Font sizes are defined in relative units (rem)
- Components adjust typography for different screen sizes
- Media queries are used to adjust typography for mobile devices

```css
@media (max-width: 768px) {
    .modal__title {
        font-size: var(--text-headline-small-size);
    }
    
    /* Other responsive typography adjustments */
}
```

## Using Typography Classes

You can apply typography styles directly using utility classes:

```html
<h1 class="text-display-large">Page Title</h1>
<h2 class="text-headline-medium">Section Heading</h2>
<p class="text-body-large">This is a paragraph with large text.</p>
<span class="text-label-small">Small label text</span>
```

This approach ensures consistent typography across your application.