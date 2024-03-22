/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-dark": "#050F13",
        "accent-blue": "#0E8FA0",
        "shady-blue": "#B5F6FF",
        "dark-grey": "#1E1E1E",
      },
    },
  },
  plugins: [],
};
