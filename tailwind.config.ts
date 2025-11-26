/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/components/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/theme.config.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [ ],
}
