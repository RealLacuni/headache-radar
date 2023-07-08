/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ["./src/**/*.{html,js,ts,tsx}"],
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
               complementary1: {
                   50: '#FFE9EC',
                   100: '#FFBDC2',
                   200: '#FF8F94',
                   300: '#E31D53',
                   400: '#C61748',
                   500: '#A9123C',
                   600: '#8F0E30',
                   700: '#770B25',
                   800: '#5E0819',
                   900: '#46050E',
               },
               complementary3: {
                   50: '#FFF7E6',
                   100: '#FFE8B8',
                   200: '#FFD787',
                   300: '#E3A61D',
                   400: '#C9971B',
                   500: '#AD8818',
                   600: '#927917',
                   700: '#776A15',
                   800: '#5C5C13',
                   900: '#41440B',
               },
           },
       }
   },
   plugins: [],
};

