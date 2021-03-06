module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      green: {
        light: '#E0EEC6',
        DEFAULT: '#7CA982',
        dark: '#0C3F36',
      },
      gray: {
        darkest: '#1F2D3D',
        dark: '#3C4858',
        DEFAULT: '#7E8784',
        light: '#E0E6ED',
        lightest: '#F9FAFC',
      },
      white:{
        DEFAULT: '#fff'
      },
      textColor: {
        'darkgreen': '#0C3F36',
        'primary': '#fff',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      }
    }
  }
}
