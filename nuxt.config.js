
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://app.snipcart.com' },
      { rel: 'preconnect', href: 'https://cdn.snipcart.com' },
      { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.0.13/default/snipcart.css' },
      { rel: 'stylesheet', href: '//cdn-images.mailchimp.com/embedcode/classic-10_7.css'}
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
    '@/assets/css/style.css',
    '@/assets/css/aos.css',
    '@/assets/fonts/icomoon/style.css',
    '@/assets/css/owl.theme.default.min.css',
    '@/assets/css/magnific-popup.css',

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
   {src: '~/plugins/vue-carousel',ssr:false},
   {src: '~/plugins/vue-mark-display', ssr: false }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
