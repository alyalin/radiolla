const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/radiolla/'
  }
} : {
  router: {
    base: '/'
  }
};

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Radiolla — music for inspiration',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js app based on mixcloud api. Music for work, inspiration, life.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//widget.mixcloud.com/media/js/widgetApi.js', body: true }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#90BD41' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  ...routerBase,

  modules: [
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/axios'
  ]
};
