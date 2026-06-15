import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Usa a CSS variable --accent injetada via layout.tsx
        // Uso: text-accent, bg-accent, bg-accent/20, border-accent
        accent: 'rgb(var(--accent) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}

export default config
