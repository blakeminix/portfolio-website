/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  width: {
			'600': '600px',
			'800': '800px',
		  },
		},
	},
	plugins: [],
}
