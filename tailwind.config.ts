import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      screens: {
        sm: '320px',
        md: '768px',
        lg: '976px',
        xl: '1300px',
      },
      colors: {
        'dark-bg': '#1B1B1B',
        content: '#FFFFFF',
        pureWhite: '#FFFFFF',
        'background-dark': '#1D1D1D',
        stroke: '#303030',
        accent: '#DB504A',
        yellow: '#FFDC82',
        'content-black': '#272727',
        'gray-light': '#d3dce6',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '15': '15px',
      },
      borderRadius: {
        '6xl': '10px',
        '50xl': '50%',
      },
      width: {
        '277': '277px',
        '571': '571px',
        '193': '193px',
      },
      gap: {
        '40': '40px',
        '20': '20px',
      },
    },
  },
  plugins: [],
};
export default config;
