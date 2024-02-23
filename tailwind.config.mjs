/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
				"animation": {
				  "background-shine": "background-shine 2s linear infinite",
				  "animation-circle-infinite": "spin 2s linear infinite",
				  "text-gradient": "text-gradient 1.5s linear infinite"
				},
				"keyframes": {
				  "background-shine": {
					"from": {
					  "backgroundPosition": "0 0"
					},
					"to": {
					  "backgroundPosition": "-200% 0"
					}
				  },
				  "text-gradient": {
					"to": {
					  "backgroundPosition": "200% center"
					}
				  }
				}		  
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
