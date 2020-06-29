
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'JAC Network - Premier Minecraft Network',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#268AEB' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/images/card.png' },
      { hid: 'description', name: 'description', content: 'Malesuada tincidunt in nunc egestas sed velit. Id et vitae vitae pellentesque dignissim amet enim.'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,300;0,400;0,500;0,600;1,700&display=swap'},
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css' },

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
      '@/assets/sass/app.scss',
      '@/assets/sass/frontend.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    '@nuxtjs/proxy',
    '@nuxtjs/auth'
  ],
  axios: {

  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/account/login', method: 'post', propertyName: 'token'},
          user: false,
        },
      }
    }
  },
  recaptcha: {
    siteKey: "6LdwQaoZAAAAAIw-tFo3Ibbk-LtZiuxsR1cdj_I8",
    version: 2,
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8000/api/',
      pathRewrite: {
        '^/api' : '/'
      }
    }
  },
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
