<template>
  <div>
    <InfoVideo v-show="infoStatus === 'video'"></InfoVideo>
    <InfoWeather v-show="infoStatus === 'weather'"></InfoWeather>
    <InfoPages
      v-show="(infoStatus === 'news') || (infoStatus ===  'pages')"
      :pageType="pageType"
      :pageModules="pageModules"
      :infoStatus="infoStatus"
      :scrollValue="scrollValue"
    ></InfoPages>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({ infoStatus: 'infoStatus', pageModules: 'pages/pageModules', pageType: 'pages/pageType', scrollValue: 'pages/scrollValue' }),
  },
  methods: {
    ...mapActions(['getMission']),
    // ...mapMutations({ SCROLL_UP: 'pages/SCROLL_UP', SCROLL_DOWN: 'pages/SCROLL_DOWN' })
  }

}
</script>

<style>
body {
  margin: 0;
}
</style>