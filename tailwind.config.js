/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#d47394',
        'pink-50': '#f7f1f4',
        'pink-100': '#f4ebec',
        'pink-200': '#eac7d4',
        'pink-500': '#d47394',
        'pink-600': '#b85d83',
        'matcha-light': '#f0f5f0',
        'matcha-medium': '#8db38d',
        'matcha-primary': '#7ba37b',
        accent: '#f4ebec',
        secondary: '#faf4f7',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
