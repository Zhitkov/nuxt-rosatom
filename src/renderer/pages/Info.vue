<template>
  <div class="info">
    <InfoTimer
      :infoStatus="infoStatus"
      v-if="(playerOptions.src !== require('~/assets/videos/greetings.mp4')) || (infoStatus!=='video')"
    ></InfoTimer>
    <div>
      <Transition :duration="{ enter: 0, leave: 0 }">
        <InfoVideo
          :playerOptions="playerOptions"
          v-show="infoStatus === 'video'"
        ></InfoVideo>
      </Transition>
      <Transition name="info">
        <div v-show="infoStatus === 'weather'" class="for-weather">
          <InfoWeather
            
            :cities="cities"
          ></InfoWeather>
        </div>
      </Transition>
      <Transition name="info">
        <InfoPages
          v-show="(infoStatus === 'news') || (infoStatus ===  'pages')"
          style="max-width: 100vw"
          :pageType="pageType"
          :pageModules="pageModules"
          :infoStatus="infoStatus"
          :scrollValue="scrollValue"
          :infoWidth="true"
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