/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


module.exports = {
  ssr: false,
  target: 'static',
  head: {
    title: 'nuxt-rosatom',
    meta: [{ charset: "utf-8" }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  },
  loading: false,
  style: `body {
  margin: 0 !important;
}`,
  plugins: [
    
    
    
  ],
  components: {
    dirs: [
      '~/components'
    ]
  },
  plugins: [{ src: '~plugins/vuex-shared-mutations.js', ssr: false }, { src: '~/plugins/vuex-cache.js', ssr: false }],
  axios: {
    // proxy: true
  },

  buildModules: [
    
  ],
  modules: ['@nuxtjs/axios']
};
