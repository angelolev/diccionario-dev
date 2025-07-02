/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#a7c7e7',
        'pastel-dark-blue': '#3b5998',
        'pastel-pink': '#ffb6c1',
        'pastel-dark-pink': '#ff69b4',
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
