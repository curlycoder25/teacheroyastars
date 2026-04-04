/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "#155f98",
				"secondary": "#b5161e",
				"tertiary": "#7b5400",
				"surface": "#f3f6ff",
				"on-surface": "#213041",
				"on-surface-variant": "#4e5d6f",
				"surface-container-high": "#d1e4ff",
				"surface-container-lowest": "#ffffff",
				"primary-fixed": "#83bdfd",
				"tertiary-container": "#feb300",
				// Digər rəngləri ehtiyac olduqca bura əlavə edə bilərsən
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