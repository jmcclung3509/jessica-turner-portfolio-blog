module.exports = {
    content: [
      "content/**/*.md",
      "components/**/*.{vue,js,ts}",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "App.{js,ts,vue}",
      "app.{js,ts,vue}",
      "Error.{js,ts,vue}",
      "error.{js,ts,vue}",
      "content/**/*.md",
    ],
    darkMode: "selector",
    plugins: [require("@tailwindcss/typography")],
  
  
    theme: {
      extend: {
        colors: {
          highlight: "var(--highlight)", 
          defaultText: "var(--default-text)",
  
          },
        },
      },
    
  
  };
  
  