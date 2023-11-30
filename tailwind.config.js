/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {
      colors: {
        softRed: "hsl(10,79%,65%)",
        Cyan: "hsl(186, 34%, 60%)",

        Dark_brown: "hsl(25, 47%, 15%)",
        Medium_brown: "hsl(28, 10%, 53%)",
        Cream: "hsl(27, 66%, 92%)",
        Very_pale_orange: "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
