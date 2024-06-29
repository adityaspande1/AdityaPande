/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shim: 'shimmer 2s linear infinite',
        
      },
      keyframes: {
        shimmer: {
          from: {
            'background-position': '0% 0%',
          },
          to: {
            'background-position': '-200% 0%',
          },
        },
        
      },
    },
  },
  plugins: [],
}

