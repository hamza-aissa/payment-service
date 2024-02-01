/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    colors: {
      primary: "#020611",
      secondary: "#45CBD9",
      w: "#FFFFFF",
      g: "#C6C4C8",
      circles: "#2F4A52",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        card: "linear-gradient(to right, #FFFFFF -500%, #14101D)",
      },
      boxShadow: {
        card: "4px 6px 30px 0px #13242E40",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  },
  plugins: [],
};
