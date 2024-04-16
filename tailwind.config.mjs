import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Lexend Exa Variable", ...defaultTheme.fontFamily.sans],
			},
			letterSpacing: {
				"normal": "-10px", 
			},
			boxShadow:{
				"lg": "8px 8px 0px black"
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
 