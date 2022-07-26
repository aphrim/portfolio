module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "background": "var(--bg)",
            "foreground": "var(--fg)",
            "highlight": "var(--highlight)",
            "secondary": "var(--secondary)",
        },
          scrollbar: ['rounded'],
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}
