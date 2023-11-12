/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-title": {
          "0%": { transform: "translateY(inherit)" },
          "100%": { transform: "translateY(0px)" }
        },
        "fade-out-title": {
          "0%": {
            opacity: 1
          },
          "100%": {
            opacity: 0
          }
        }
      }
    }
  },
  plugins: []
};
