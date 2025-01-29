module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#f3f3f3",
        "secondary":"#5e5d5d",
        "accent":"#ca9166",
      }
    },
  },
  plugins: [],
};
