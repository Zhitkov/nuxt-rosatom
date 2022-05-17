<template>
  <div>
    <InfoVideo
      :playerOptions="playerOptions"
      v-show="infoStatus === 'video'"
    ></InfoVideo>
    <InfoWeather
      v-show="infoStatus === 'weather'"
      :cities="cities"
      :currentCity="currentCity"
      :weatherApi="weatherApi"
    ></InfoWeather>
    <InfoPages
      v-show="(infoStatus === 'news') || (infoStatus ===  'pages')"
      :pageType="pageType"
      :pageModules="pageModules"
      :infoStatus="infoStatus"
      :scrollValue="scrollValue"
      @scrollToZero="scrollToZero"
    ></InfoPages>
  </div>
</template>

<script>

import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      infoStatus: 'infoStatus',
      playerOptions: 'playerOptions',
      pageModules: 'pages/pageModules',
      pageType: 'pages/pageType',
      scrollValue: 'pages/scrollValue',
      cities: 'weather/cities',
      currentCity: 'weather/currentCity',
      weatherApi: 'weather/weatherApi'
    }),
  },
  methods: {
    ...mapActions(['getMission']),
    ...mapMutations({ scrollToZero: 'pages/SCROLL_TO_ZERO' }),
    // ...mapMutations({ SCROLL_UP: 'pages/SCROLL_UP', SCROLL_DOWN: 'pages/SCROLL_DOWN' })
  }

}
</script>

<style>
body {
  margin: 0;
}
</style>