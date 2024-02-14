/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		extend: {
			colors: {
				mainColor: '#43B803',
				colorBgc: '#F2F2F7'
			},
		},
	},


	daisyui: {
		themes: [{
			myTheme: {
				'primary': '#43B803',
				'secondary': '#ffed4a',
				'accent': '#37cdbe',
				'neutral': '#3d4451',
				'neutral-focus': '#2a2e37',
				'neutral-content': '#ffffff',
				'base-100': '#ffffff',
				'base-200': '#f9fafb',
				'base-300': '#d1d5db',
				'base-content': '#1f2937',
				'info': '#2094f3',
				'success': '#009485',
				'warning': '#ff9900',
				'error': '#ff5724',
			}
		}]
	},


	plugins: [require('daisyui')],

	


}



