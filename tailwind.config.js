/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#8a70d6",       // Primary color
        secondary: "#e9e3ff",     // Secondary color
        gray: {
          darkest: "#424040",     // Darkest gray color
          lightest: "#fbfbfb",    // Lightest gray color
        },
        white: "#ffffff",         // White color
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",       // Set your desired blur strength
      },
    },
  },
  plugins: [
    
  ],
}

