/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", './src/**/*.{js,ts,jsx,tsx}',"./src/**/*.{html,js}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["iranyekan"],
      },
    },
  },
  // plugins: [require("daisyui"), require('flowbite/plugin')],
  // plugins: [require("tw-elements/dist/plugin.cjs")],
  // daisyUI config (optional - here are the default values)
};
