/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      greenBg: '#005160',
      black: {
        0: "black",
        100: "#222222",
        200: "#040404"
      },
      gray:{
        50:"#F1F0F4",
        100:"#D4D1DC",
        200:"#BFBACB",
        300:"#A29BB3",
        400:"#9088A5",
        500:"#746A8E",
        600:"#6A6081",
        700:"#524B65",
        800:"#403A4E",
        900:"#312D3C",
      },
    },
    borderWidth:{
      "1":"1px",
      "2":"2px",
    },
    fontSize: {
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '24': '24px',
      '28': '28px',
      '32': '32px',
      '36': '36px',
      '40': '40px',
      '48': '48px',
      '56': "56px",
      '64': '64px',
    },
    borderRadius: {
      'none': '0',
      "4" : "4px",
      "8" : "8px",
      "10" : "10px",
      "12" : "12px",
      "16" : "16px",
      "20" : "20px",
      "24" : "24px",
      "30" : "30px",
      "full":"100%",
    },
  },
  plugins: [],
};
