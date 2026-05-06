/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                /* Rəngləri bu formatda yazmaq mütləqdir ki, Tailwind opacity hesabını düzgün etsin */
                "primary": "rgb(var(--primary) / <alpha-value>)",
                "secondary": "rgb(var(--secondary) / <alpha-value>)",
                "tertiary": "rgb(var(--tertiary) / <alpha-value>)",
                "neutral": "rgb(var(--neutral) / <alpha-value>)",
                "surface": "rgb(var(--surface) / <alpha-value>)",
                "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
                "on-surface-variant": "rgb(var(--on-surface-variant) / <alpha-value>)",
                "surface-container-high": "rgb(var(--surface-container-high) / <alpha-value>)",
                "surface-container-lowest": "rgb(var(--surface-container-lowest) / <alpha-value>)",
                "primary-fixed": "rgb(var(--primary-fixed) / <alpha-value>)",
                "tertiary-container": "rgb(var(--tertiary-container) / <alpha-value>)",
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            borderRadius: {
                'DEFAULT': '1rem',
                'lg': '2rem',
                'xl': '3rem',
            }
        },
    },
    plugins: [],
}