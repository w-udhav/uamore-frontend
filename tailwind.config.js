/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": ["Playfair Display", "serif"],
        "satoshi-regular": ["Satoshi-Regular", "sans-serif"],
        "satoshi-medium": ["Satoshi-Medium", "sans-serif"],
        "satoshi-semibold": ["Satoshi-SemiBold", "sans-serif"],
        "satoshi-bold": ["Satoshi-Bold", "sans-serif"],
      },
      colors: {
        //? Primary
        ivoryWhite: "#F8F5F2", //Clean, soft background
        charcoalBlack: "#1A1A1A", //Bold for text and contrast
        richBurgundy: "#4C1C24", //Luxurious accent

        //? Secondary
        softGold: "#D4AF37", //Subtle shimmer for icons, borders
        dustyRose: "#C7A7A1", //Subtle shimmer for icons, borders

        //Use gradients like Ivory White → Soft Gold for a premium glow effect.
      },
    },
  },
  plugins: [],
};
