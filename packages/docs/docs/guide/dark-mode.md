# Dark Mode

## How it's works ?

To enable the dark you have just to add `dark` class to the `<html />` of your page

```html
<!-- Dark mode not enabled -->
<html>
<body>
  <!-- Will be white -->
  <div id="app">
    <!-- ... -->
  </div>
</body>
</html>

<!-- Dark mode enabled -->
<html class="dark">
<body>
  <!-- Will be black -->
  <div id="app">
    <!-- ... -->
  </div>
</body>
</html>
```

## Tip

```typescript
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
```
