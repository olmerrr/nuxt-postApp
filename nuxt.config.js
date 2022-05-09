export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-post-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/core-components.js',
    '~/plugins/date-filter.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyATp4cidSPLpSaYMLIUqI6OFtE74WgVaVk",
          authDomain: "nuxt-blog-d11a6.firebaseapp.com",
          databaseURL: "https://nuxt-blog-d11a6-default-rtdb.firebaseio.com",
          projectId: "nuxt-blog-d11a6",
          storageBucket: "nuxt-blog-d11a6.appspot.com",
          messagingSenderId: "159494976249",
          appId: "1:159494976249:web:5f113f54e64c5bcd312828"
        },
        services: {
          auth: {
            auth: true // Just as example. Can be any other service.
          }
        }
      }

    ]
  ],
  axios: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-d11a6-default-rtdb.firebaseio.com/',
    credentials: false
  },

  build: {
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-d11a6-default-rtdb.firebaseio.com/'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
