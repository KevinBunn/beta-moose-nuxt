export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Beta Moose Official',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/betamoose-favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // {src: '~plugins/wavesurfer', mode: 'client'}
  ],

  serverMiddleware: ['~/api', '~/api/'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.baseUrl
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        // We can choose either light or dark theme, even individually tell each component which theme to render.
        dark: {
          primary: '#392F5A',
          accent: '#F092DD',
          accent1: '#FFAFF0',
          accent2: '#EEC8E0',
          secondary: '#A8C7BB',
          error: '#b71c1c',
        },
        light: {
          primary: '#392F5A',
          accent: '#F092DD',
          accent1: '#FFAFF0',
          accent2: '#EEC8E0',
          secondary: '#A8C7BB',
          error: '#b71c1c',
        },
      }
    }
  },

  env: {
    baseUrl: process.env.BASE_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true
  }
}
