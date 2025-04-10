# RFWD UI Component Library

## Summary

RFWD Library is a collection of reusable, themeable UI components designed for modern web development. It provides developers with a set of pre-built, styled elements like buttons, modals, alerts, and more, aiming to accelerate development and ensure visual consistency across projects. This library is ideal for developers building web applications or websites who need a reliable foundation for their user interface.

## Features

*   **Reusable Components:** Includes common UI elements:
    *   Alerts (with Toaster functionality)
    *   Buttons
    *   Cards
    *   Modals
    *   Tabs
    *   Tooltips
*   **Themeable:** Easily customize the look and feel using CSS variables (tokens) and a theme switcher utility. See `styles/tokens.css` and `js/theme-switcher.js`.
*   **Typography System:** Defined styles for headings, paragraphs, and other text elements. See `styles/typography.css`.
*   **Documentation:** Detailed usage guides for components available in the `/docs` directory.

## Installation

**Prerequisites:**
*   A basic understanding of HTML, CSS, and JavaScript.
*   A web project setup where you can include CSS and JavaScript files.

**Steps:**

1.  **Include CSS:** Link the necessary CSS files in the `<head>` of your HTML document. Start with the core styles and add component styles as needed.

    ```html
    <head>
      <!-- Core Styles & Tokens -->
      <link rel="stylesheet" href="styles/tokens.css">
      <link rel="stylesheet" href="styles/main.css">
      <link rel="stylesheet" href="styles/typography.css">
      <link rel="stylesheet" href="styles/theme.css">

      <!-- Component Styles (Example) -->
      <link rel="stylesheet" href="styles/buttons.css">
      <link rel="stylesheet" href="styles/alerts.css">
      <!-- Add other component CSS files as needed -->
    </head>
    ```

2.  **Include JavaScript:** Add the necessary JavaScript files before the closing `</body>` tag. Include component scripts for the elements you intend to use.

    ```html
    <body>
      <!-- Your HTML content -->

      <!-- Component Scripts (Example) -->
      <script src="js/button.js"></script>
      <script src="js/alert-toaster.js"></script>
      <!-- Add other component JS files as needed -->

      <!-- Optional: Theme Switcher -->
      <script src="js/theme-switcher.js"></script>
    </body>
    ```

## Usage

Once installed, you can use the components by adding the appropriate HTML structure and CSS classes.

**Example: Using a Button**

```html
<button class="button button--primary">Primary Button</button>
<button class="button button--outlined">Secondary Button</button>
```

**Example: Using an Alert**

```html
<div class="alert alert--info" role="alert">
  This is an informational alert.
</div>
```

Refer to the files in the `/docs` directory for detailed documentation and examples for each component (e.g., `docs/button-component.md`).

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these general steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Ensure your code follows the project's coding style.
5.  Commit your changes (`git commit -am 'Add some feature'`).
6.  Push to the branch (`git push origin feature/your-feature-name`).
7.  Create a new Pull Request.
