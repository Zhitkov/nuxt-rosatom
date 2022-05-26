<template>
  <div class="info">
    <InfoTimer></InfoTimer>
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
        style="max-width: 100vw"
        :pageType="pageType"
        :pageModules="pageModules"
        :infoStatus="infoStatus"
        :scrollValue="scrollValue"
      ></InfoPages>
    </div>
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
  }

}
</script>

<style>
body {
  margin: 0;
}
.info{
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: flex-end;
}
</style>