/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A373B', // Main font color
        secondary: '#F9EAE2', // Light background color
        accent: '#B98587', // Accent color for buttons or highlights
        background: '#E3E8EB', // Background for light sections
        headerBg: '#E3F2F9', // Header background color
        hoverPrimary: '#85524F', // Darker shade for hover
      },
    },
  },
  plugins: [],
}

