/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        "principal": ['Red Hat Display, sans-serif'],
      },
      
      colors:{
        //Primary
        "Soft-orange": "hsl(35, 77%, 62%)",
         "Soft-red": "hsl(5, 85%, 63%)",
        //Neutral
         "Off-white": "hsl(36, 100%, 99%)",
         "Grayish-blue": "hsl(233, 8%, 79%)",
         "Dark-grayish-blue": "hsl(236, 13%, 42%)",
         "Very-dark-blue": "hsl(240, 100%, 5%)",
      },

      screens: {
        'mobile': '375px',
        'pc': '1440px',
        'md1': '900px',
      },
		},
	},
	plugins: [],
}
