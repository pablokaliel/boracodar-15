/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "Titillium": "Titillium Web",
    },
    extend: {},
    colors: {
      "orange":"#FBA94C",
      "white":"#FFF",
      "gray-50":"#F8FAFC",
      "gray-100":"#F1F5F9",
      "gray-200":"#E2E8F0",
      "gray-300":"#CBD5E1",
      "gray-400":"#94A3B8",
      "gray-500":"#64748B",
      "gray-600":"#475569",
      "gray-700":"#334155",
      "gray-800":"#1E293B",
      "gray-900":"#0F172A",
      "purple-100":"#996DFF",
      "purple-200":"#7C3AED",
      
    },
  },
  plugins: [],
};

