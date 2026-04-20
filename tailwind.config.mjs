/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Rəngləri funksiya vasitəsilə təyin edirik ki, opacity/60 işləsin
                "primary": "withOpacityValue('--primary')",
                "secondary": "withOpacityValue('--secondary')",
                "tertiary": "withOpacityValue('--tertiary')",
                "surface": "withOpacityValue('--surface')",
                "on-surface": "withOpacityValue('--on-surface')",
                "on-surface-variant": "withOpacityValue('--on-surface-variant')",
                "surface-container-high": "withOpacityValue('--surface-container-high')",
                "surface-container-lowest": "withOpacityValue('--surface-container-lowest')",
                "primary-fixed": "withOpacityValue('--primary-fixed')",
                "tertiary-container": "withOpacityValue('--tertiary-container')",
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

// Opacity dəstəyi üçün köməkçi funksiya
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variable}), ${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };
}