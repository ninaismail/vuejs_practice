/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Aktifo: ["Aktifo"],
      },
      colors: {
      bg: "#FCFCFC",
      content: "rgb(71, 85, 105)",
      accent1: "rgb(53,93,131)",
      accent2: "rgb(255,122,0)",
      darkaccent1: "rgb(154, 229, 154)",
      darkaccent2: "rgb(154, 229, 154)",
      },
    }
  },
  plugins: [],
}

