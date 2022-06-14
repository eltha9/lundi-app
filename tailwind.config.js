module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: {
				900: '#161421',
				700: '#332B61',
				500: '#4B418A',
				300: '#877DC9',
				100: '#EBE9F5',
			},
			secondary: {
				900: '#433217',
				700: '#8B621F',
				500: '#FCAE30',
				300: '#FFD590',
				100: '#FFF6EA',
			},
			ternary: {
				900: '#172527',
				700: '#1B4147',
				500: '#256A75',
				300: '#6EB1BC',
				100: '#E6F2F3',
			},
			greyscale: {
				black: '#191919',
				800: '#2D2D2D',
				700: '#4B4B4B',
				600: '#666666',
				500: '#757575',
				400: '#CCCCCC',
				300: '#E5E5E5',
				200: '#F7F7F7',
				white: '#FEFEFE',
			},
			semantic: {
				positive: {
					700: '#044D2B',
					500: '#119055',
					100: '#E2F8E0',
				},
				warning: {
					700: '#642C04',
					500: '#E28D50',
					100: '#F9E8CF',
				},
				negative: {
					700: '#580E09',
					500: '#CC3E2F',
					100: '#FFDEDA',
				},
				info: {
					700: '#0F3266',
					500: '#4AA8D8',
					100: '#E1F7FF',
				},
			},
			dark: {
				80: 'rgba(25,25,25,.8)',
				60: 'rgba(25,25,25,.6)',
				40: 'rgba(25,25,25,.4)',
				20: 'rgba(25,25,25,.2)',
			},
			light: {
				80: 'rgba(254,254,254,.8)',
				60: 'rgba(254,254,254,.6)',
				40: 'rgba(254,254,254,.4)',
				20: 'rgba(254,254,254,.2)',
			},
			background: {
				700: '#E4E2DD',
				500: '#F1F1EE',
				100: '#F5F5F5',
			},
		},
		fontFamily: {
			sato: ['sato-v', 'sans-serif'],
			salva: ['salva', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};
