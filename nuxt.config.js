module.exports = {
  /*
  ** Build configuration
  */
  build: {},

  plugins: ['~/plugins/offline-handler'],

  /**
   * Cache components for better performance
   */
  cache: {
    max: 1000,
    maxAge: 900000,
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#23d160' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#23d160',
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],
};
