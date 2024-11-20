/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A4C3F', // Main font color
        secondary: '#FFF5E1', // Light background color
        accent: '#F26D80', // Accent color for buttons or highlights
        background: '#FCD5DC', // Background for light sections
        headerBg: '#FCD5DC', // Header background color
        hoverPrimary: '#DA495C', // hover color
        'hero-bg': '#d7bb78', // Add the background color for better control
      },
      fontFamily: {
        title: ['Pacifico', 'sans-serif'],
        body: ['Montserrat', 'serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(131,145,156,1) 20%, rgba(241,237,231,1) 100%)',
        'cake-categories': 'linear-gradient(0deg, rgba(234,204,191,1) 0%, rgba(236,230,221,1) 100%)',
        'home-banner': 'linear-gradient(90deg, rgba(234,204,191,1) 25%, rgba(236,230,221,1) 100%)',
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='48' height='64' viewBox='0 0 48 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48 28v-4L36 12 24 24 12 12 0 24v4l4 4-4 4v4l12 12 12-12 12 12 12-12v-4l-4-4 4-4zM8 32l-6-6 10-10 10 10-6 6 6 6-10 10L2 38l6-6zm12 0l4-4 4 4-4 4-4-4zm12 0l-6-6 10-10 10 10-6 6 6 6-10 10-10-10 6-6zM0 16L10 6 4 0h4l4 4 4-4h4l-6 6 10 10L34 6l-6-6h4l4 4 4-4h4l-6 6 10 10v4L36 8 24 20 12 8 0 20v-4zm0 32l10 10-6 6h4l4-4 4 4h4l-6-6 10-10 10 10-6 6h4l4-4 4 4h4l-6-6 10-10v-4L36 56 24 44 12 56 0 44v4z' fill='%23d89801' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

