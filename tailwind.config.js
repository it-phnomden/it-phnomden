/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sun-effect': "url('assets/sunlight.png')",
      },
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        // Add more custom opacity values here
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    }
  },
  plugins: [require("daisyui")],
  darkMode: 'class',
}

