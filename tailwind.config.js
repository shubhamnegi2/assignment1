module.exports = {
  content: ['./*.html', './js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'], // Adds Poppins as the default sans-serif font
        openSans: ['Open Sans', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg': "url('../images/heroBg.png')",
        'stats-bg': "url('../images/statsBg.png')",
        'rewards-bg': "url('../images/rewardImg.png')",
        'services-bg': "url('../images/whoWeAreImg1.jpeg')",
        'tech-bg': "url('../images/whoWeAreImg2.jpeg')",
        'whatWeOffer-bg': "url('../images/whatWeOfferBg.svg')",
      },
    },
  },

  plugins: [],
};
