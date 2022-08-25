/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Sora', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			gridTemplateRows: {
				layout: '64px minmax(auto, 1fr)',
			},
			gridTemplateColumns: {
				searchBar: 'minmax(auto, 1fr) 48px',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['autumn', 'dracula'],
		darkTheme: 'dracula',
	},
};
