/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: { 
		colors:{
			"gray-20":"#F8F4EB",
			"gray-50":"#dfe2ed",
			"gray-100":"#ccd2df",
			"gray-500": "#001c5e",
			"primary-100":"#e0e9ff",
			"primary-300":"#a3c2ff",
			"primary-500":"#6696ff",
			"secondary-400":"#FFCD58", //light yellow
			"secondary-500":"#FFC132", //dark yellow 
		},
		backgroundImage:(theme) => ({
			"gradient-yellowred" : "linear-gradient(90deg,#618eff 0%, #FFC837 100%)",
			"mobile-home":"url('./assets/HomePageGraphic.png')"
		}),
		fontFamily: {
			dmsans:["DM Sans", "sans-serif"],
			montserrat: ["Montserrat", "sans-serif"]
	   },
	   content:{
		evolvetext:"url('./assets/EvolveText.png')",
		a:"url('./assets/car'1.png)",
		b:"url('./assets/2.png')",
		c:"url('./assets/3.png')",
		d:"url('./assets/4.png')",
		e:"url('./assets/5.png')",
		f:"url('./assets/6.png')",
		g:"url('./assets/7.png')",		
	},
	
	  },
	  screens:{
		xs:"480px",
		sm: "768px",
     	md: "1060px",
	  }

	},
	plugins: [],
  }	