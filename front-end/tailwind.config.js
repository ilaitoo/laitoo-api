/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./logged.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        160: "40rem",
      },
    },
  },
  plugins: [],
};
