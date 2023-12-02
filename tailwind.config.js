/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {
      colors: {
        softRed: "hsl(10,79%,65%)",
        staleCyan: "hsl(186, 34%, 60%)",
        activeSoftRed: "hsl(10,79%,75%)",
        activeCyan: "hsl(186, 34%, 70%)",

        darkBrown: "hsl(25, 47%, 15%)",
        mediumBrown: "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        veryPaleOrange: "hsl(33, 100%, 98%)",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
