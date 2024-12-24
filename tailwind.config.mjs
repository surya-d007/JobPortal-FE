/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"], // Add Poppins
        geistSans: ["var(--font-geist-sans)", "sans-serif"], // Optional
        geistMono: ["var(--font-geist-mono)", "monospace"], // Optional
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },

    borderRadius: {
      lg: "1rem",
    },
  },
  plugins: [],
};
