import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      primary: "#283e32",
      secondary: "#c28850",
      white: "#f5f5f7",
      black: "#1d1d1f"
     }
    },
  },
  plugins: [],
}
export default config
