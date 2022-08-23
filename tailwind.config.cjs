/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Sora', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['fantasy', 'dracula'],
		darkTheme: 'dracula',
	},
};
