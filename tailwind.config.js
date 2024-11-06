/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        // Add more colors as needed
        primary: '#6A373B', // Your main font color
        secondary: '#F9EAE2', // Light background color
        accent: '#B98587', // Accent color for buttons or highlights
        background: '#E3E8EB', // Background for light sections
        headerBg: '#E3F2F9', // Header background color
        hoverPrimary: '#85524F', // Darker shade for hover
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Add any fonts you plan to use
      },
    },
  },
  plugins: [],
}

