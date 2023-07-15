/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ["./src/**/*.{html,ts,tsx}"],
   theme: {
       extend: {
           backgroundImage: {
               'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
           },
           fontFamily: {
               'crimson-text': ['Crimson Text', 'serif'],
               'roboto': ['Roboto', 'sans-serif'],
               'tilt-prism': ['Tilt Prism', 'cursive'],
               'montserrat': ['Montserrat', 'sans-serif'],
               'open-sans': ['Open Sans', 'sans-serif'],
               'inter': ['Inter', 'sans-serif'],
           },
           colors: {
               primary: {
                   50: '#F3F6FC',
                   100: '#E7EEF9',
                   200: '#C2D5F1',
                   300: '#9DBCE9',
                   400: '#75A3E1',
                   500: '#4E89D9',
                   600: '#3D6CB3',
                   700: '#2B4F8D',
                   800: '#1A3267',
                   900: '#091541',
               },
               secondary: {
                   50: '#F2FDFF',
                   100: '#C1F6F7',
                   200: '#6EE5E9',
                   300: '#11D1D6',
                   400: '#00C7CF',
                   500: '#00B3BA',
                   600: '#00A0A5',
                   700: '#008C91',
                   800: '#00777D',
                   900: '#00646A',
               },
               accent: {
                   50: '#FCE7F3',
                   100: '#F8C0DF',
                   200: '#F297C8',
                   300: '#EA6FAE',
                   400: '#E44694',
                   500: '#D926A9',
                   600: '#BD1F91',
                   700: '#A2177A',
                   800: '#87105F',
                   900: '#6C0A45',
               },
           },
       }
   },
   plugins: [require('@tailwindcss/forms')],
};

