<template>
  <div class="info">
    <InfoTimer
      :infoStatus="infoStatus"
      v-show="(playerOptions.src !== require('~/assets/videos/greetings.mp4')) || (infoStatus!=='video')"
    ></InfoTimer>
    <div>
      <Transition name="info">
        <InfoVideo
          :playerOptions="playerOptions"
          v-show="infoStatus === 'video'"
        ></InfoVideo>
      </Transition>
      <Transition name="info">
        <InfoWeather
          v-show="infoStatus === 'weather'"
          :cities="cities"
          :currentCity="currentCity"
          :weatherApi="weatherApi"
        ></InfoWeather>
      </Transition>
      <Transition name="info">
        <InfoPages
          v-show="(infoStatus === 'news') || (infoStatus ===  'pages')"
          style="max-width: 100vw"
          :pageType="pageType"
          :pageModules="pageModules"
          :infoStatus="infoStatus"
          :scrollValue="scrollValue"
        ></InfoPages>
      </Transition>
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
.info-enter-active,
.info-leave-active,
.info-leave-from-class,
.info-enter-from-class,
.info-enter-active-class,
.info-enter-to-class,
.info-leave-from-class,
.info-leave-active-class,
.info-leave-to-class {
  transition: opacity 0.5s ease;
}
.info-enter,
.info-leave-to,
.info-enter-from,
.info-leave-to,
.info-leave-from-class {
  opacity: 0;
}
.info {
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: flex-end;
}
</style>