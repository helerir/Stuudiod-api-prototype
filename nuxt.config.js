import pkg from './package';

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:400,400i,700,900' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/scss/styles_screen.scss',
    "swiper/dist/css/swiper.css",
    "vue-select/src/scss/vue-select.scss"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
    ** Router
    */

  router: {
    mode: "hash",
    base: "/stuudiod/",
    exact: true
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/moment'
  ],

  /*
  ** Build configuration
  */
  build: {
    publicPath: 'https://pre.loomdigital.ee/stuudiod/',
    extractCSS: true,
    postcss: {
      map: false,
      plugins: {
        'postcss-flexbugs-fixes': {}
      }
    }
  }
}
