export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
      "site-bg":"url('./src/assets/images/sitebg.png')",
      "banner-bg":"url('./src/assets/images/bannerbg.png')",
      },
      backgroundColor:{
        "bannerColor":"#331959"
      },
      fontFamily: {
        'roboto': ['roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

