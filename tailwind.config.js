/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        poetsen: ['"Poetsen One"', 'cursive'],
        staat: ['Staatliches', 'cursive'],
      },
    },
  },
  plugins: [],
};