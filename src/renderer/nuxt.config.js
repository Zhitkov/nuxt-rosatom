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
    meta: [{ charset: "utf-8" }]
  },
  loading: false,
  plugins: [
    
    
    
  ],
  components: {
    dirs: [
      '~/components'
    ]
  },
  plugins: [{ src: '~plugins/vuex-shared-mutations.js', ssr: false }],
  axios: {
    // proxy: true
  },

  buildModules: [
    
  ],
  modules: ['@nuxtjs/axios']
};
