/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        capitec: {
          blue: "#003DA5",
          red: "#E31B23",
          blueDark: "#002D7A",
          blueLight: "#4A8FE7",
          panel: "#0F2B3C",
          panelAlt: "#163B50",
        },
        gray: {
          50: "#F8F9FA",
          100: "#F0F2F5",
          200: "#E4E7EB",
          300: "#CDD3DA",
          500: "#6B7280",
          700: "#374151",
          900: "#1A1A2E",
        },
        feedback: {
          error: "#CC0000",
          success: "#28A745",
          warning: "#F5A623",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        input: "8px",
        card: "12px",
        panel: "16px",
        btn: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)",
        lg: "0 10px 25px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.06)",
        xl: "0 20px 40px -5px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
