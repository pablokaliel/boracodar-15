/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "Titillium": "Titillium Web",
    },
    extend: {},
    colors: {
      "background": "#F8FAFC",
      "subtitle-purple":"#7C3AED",
      "title-black":"#1E293B",
      "btn-bg":"#996DFF",
      "white":"#fff",
      "text-black":"#475569",
      "bar":"#E2E8F0",
      "dark":"#0F172A",
      "vantage":"#FBA94C",
      "bar-dark":"#334155",
      "text-dark":"#CBD5E1",
    },
  },
  plugins: [],
};

