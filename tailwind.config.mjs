/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                "primary": "var(--primary)",
                "secondary": "var(--secondary)",
                "tertiary": "var(--tertiary)",
                "surface": "var(--surface)",
                "on-surface": "var(--on-surface)",
                "on-surface-variant": "var(--on-surface-variant)",
                "surface-container-high": "var(--surface-container-high)",
                "surface-container-lowest": "var(--surface-container-lowest)",
                "primary-fixed": "var(--primary-fixed)",
                "tertiary-container": "var(--tertiary-container)",
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