/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Aktifo: ["Aktifo"],
      },
      colors: {
      bg: "#F5F5F5",
      bg2: "#D9D9D9",
      accent1: "#32527B",
      accent2: "#477CA8",
      },
    }
  },
  plugins: [],
}

