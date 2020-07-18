export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'JAC Network - Modded Minecraft Gaming Community',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#268AEB' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/images/card.png' },
      { hid: 'description', name: 'description', content: 'Come join us today if your interested in anything Modded Minecraft including pixelmon!'}
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
    '~/plugins/axios',
    '~/plugins/moment',
    '~/plugins/modal',
    '~/plugins/clipboard'
  ],
  /*
  ** Nuxt.js dev-modules
  */

  /*
  ** Nuxt.js modules
  */
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
    '@nuxtjs/moment',
    '@nuxtjs/toast'
  ],
  axios: {
    baseURL: `/api`,
    headers: {
      'Content-Type': 'application/json'
    }
  },
  auth: {
    localStorage: false,
    cookie: {
      options: {
        expires: 7
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/admin'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/account/login', method: 'post', propertyName: 'token'},
          logout: false,
          user: false
        },
        tokenRequired: true,
        tokenType: 'Bearer',
        tokenName: 'Authorization',
      }
    },
  },
  recaptcha: {
    siteKey: "6Lc3KbAZAAAAAA-Bbu67874_qeeILIW7NQm9m6S2",
    version: 2,
  },
  proxy: {
    '/api': {
      target: 'http://jac.network:8080/api/',
      pathRewrite: {
        '^/api' : '/'
      }
    },
    '/verify': {
      target: 'https://api.mojang.com/users/profiles/minecraft/',
      pathRewrite: {
        '^/verify' : '/'
      }
    }
  },
  toast: {
    position: 'bottom-center',
    dismissInterval: 5000
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
  },
}
