/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f9f8fc",
        secondary: "radial-gradient(85% 120% at 50% 120%, rgba(255, 255, 255, .24) 0%, rgba(255, 255, 255, 0) 100%);",
        tertiary: "#151030",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        sm: "768px",
        md: "1024px",
      },
      backgroundImage: {
        "hero-medıum": "url('/src/assets/hero.png')",
        "hero-top": "url('/src/assets/hero.png')",
        "hero-rp": "url('/src/assets/rp6.png')",
      },
    },
  },
  plugins: [],
};