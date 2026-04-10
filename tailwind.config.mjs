/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#040404',
        foreground: '#e0e0e0',
      },
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
