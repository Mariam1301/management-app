/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/primeng/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        primeng: "var(--font-family)",
        arialGeo: ["arialGeo", "sans-serif"],
      },
      colors: {
        "primeng-text": "var(--text-color)",
        "primeng-secondary-text": "var(--text-secondary-color)",
        "primeng-primary-color": "var(--primary-color)",
        "primeng-primary-text": "var(--primary-color-text)",
        "primeng-mask-bg": "var(--mask-bg)",
        "primeng-highlight-text": "var(--highlight-text-color)",
        "primeng-highlight-bg": "var(--highlight-bg	)",
        "primeng-surface-ground": "var(--surface-ground)",
        "primeng-surface-section": "var(--surface-section)",
        "primeng-surface-card": "var(--surface-card)",
        "primeng-surface-overlay": "var(--surface-overlay)",
        "primeng-surface-border": "var(--surface-border)",
        "primeng-surface-hover": "var(--surface-hover)",
        "primeng-surface": {
          0: "var(--surface-0)",
          50: "var(--surface-50)",
          100: "var(--surface-100)",
          200: "var(--surface-200)",
          300: "var(--surface-300)",
          400: "var(--surface-400)",
          500: "var(--surface-500)",
          600: "var(--surface-600)",
          700: "var(--surface-700)",
          800: "var(--surface-800)",
          900: "var(--surface-900)",
        },
        "primeng-primary": {
          0: "var(--primary-0)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
      },
      borderRadius: {
        primeng: "var(--border-radius)",
      },
    },
  },
  plugins: [],
};
