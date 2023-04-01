/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'login-hero-image': "url('/img/login-hero-image.webp')",
      }
    },
  },
  plugins: [],
}

