/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      'clouds': "url('https://imgs.search.brave.com/7U2hnZpMATU-4NyQjTX1SQcmoqiw4eRNxzKJb9Rqz6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzgzNV9jbG91/ZHMtcG5nLnBuZw')",
    },
    colors: {
      rosa1: '#FADADD',
      rosa2: '#F4C2C2',
      rosa3: '#FF69B4'
    },
  },
};
export const plugins = [];
