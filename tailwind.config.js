/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: '#1B1B1F',
        text: '#EBEBF599',

        primary: '#FFFFFF',
        secondary: '#FFD60A',

        input: {
          background: '#161618',
          text: '#FFFFF5DB',
          border: '#A8B1FF',
        },

        button: {
          background: '#32363F',
          text: '#FFFFF5DB',
          border: 'transparent',

          secondary: {
            border: '#747BFF',
            text: '#FFFFFF',
            backgrund: '#646CFF',
          }
        }
      }
    },
  },
  plugins: [
		({ addBase }) =>
		addBase({
			'*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      'html': {
        scrollBehavior: 'smooth',
      },
		})
	],
}
