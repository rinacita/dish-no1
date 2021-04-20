export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DISH//「No.1」Special Site',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'TVアニメ「僕のヒーローアカデミア」オープニングテーマ、4/10配信シングルDISH//「No.1」スペシャルサイト。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'DISH//「No.1」Special Site',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.sonymusic.co.jp/Music/Info/DISH/No1/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'DISH//「No.1」Special Site',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'TVアニメ「僕のヒーローアカデミア」オープニングテーマ、4/10配信シングルDISH//「No.1」スペシャルサイト。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.sonymusic.co.jp/Music/Info/DISH/No1/img/ogp.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/common.scss', '@/assets/css/styles.scss'],

  router: {
    base: '/dish-no1/',
    // base: '/Music/Info/DISH/No1/',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-jsonp'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Noto+Sans+JP': [400, 700],
        },
        display: 'swap',
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
