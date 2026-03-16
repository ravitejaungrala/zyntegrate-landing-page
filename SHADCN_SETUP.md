# Shadcn & Tailwind Setup Instructions

Your project is currently using **Vanilla CSS**. To fully support the Shadcn components provided (which use Tailwind CSS utility classes), you should follow these steps:

## 1. Install Tailwind CSS
If you want to use Tailwind utility classes (`bg-primary`, `rounded-lg`, etc.):
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 2. Configure Tailwind
Update your `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        border: "#e2e8f0",
        // Add other variables from your index.css
      }
    },
  },
  plugins: [],
}
```

## 3. Why /components/ui?
It is standard practice to keep reusable base components (like Buttons, Cards, Badges) in a dedicated `/components/ui` folder. This:
- Separates **foundational UI** from **feature-specific** components.
- Makes it easier to maintain a consistent design system.
- Follows the [shadcn/ui](https://ui.shadcn.com) convention, which many developers are familiar with.

## 4. Current Status
I have implemented the **Orbital Animation** and **Animated Borders** using **Vanilla CSS** in `index.css` and component-specific CSS files so they work immediately without further setup.
