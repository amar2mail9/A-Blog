/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "10%": { width: "10%" },
          "20%": { width: "20%" },
          "30%": { width: "30%" },
          "40%": { width: "40%" },
          "50%": { width: "50%" },
          "60%": { width: "60%" },
          "70%": { width: "70%" },
          "80%": { width: "80%" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        typing: "typing 5.5s steps(30) infinite", // Runs only once and stays at the final state
        blink: "blink .75s step-end infinite", // Blinking continues infinitely
      },
    },
  },
  plugins: [],
};
