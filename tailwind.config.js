module.exports = {
  // mode: "jit",
  // purge: ["./public/**/*.html"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "coderig-primary": "#2174EA",
        "coderig-secondary": "#485668",
        "coderig-indigo": "#5665F2",
        "coderig-bg": "#F4F9FF",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
      FrankRuhlLibre: ["Frank Ruhl Libre, serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
