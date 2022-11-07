<template>
  <div class="container">
    <div class="elements">
      <div v-show="infoStatus !== 'weather'">
        <div
          v-show="infoStatus === 'video'"
          @click="switchVolume"
          class="volume"
        >
          <img
            v-show="volume"
            :src="require('~/assets/icons/volume/on.svg')"
            alt=""
          />
          <img
            v-show="!volume"
            :src="require('~/assets/icons/volume/off.svg')"
            alt=""
          />
        </div>
        <div
          v-show="infoStatus === 'video'"
          @click="switchVideoPlay()"
          class="volume"
        >
          <img
            v-show="videoPlay"
            :src="require('~/assets/icons/video/on.svg')"
            alt=""
          />
          <img
            v-show="!videoPlay"
            :src="require('~/assets/icons/video/off.svg')"
            alt=""
          />
        </div>
        <div
          v-show="infoStatus === 'news' || infoStatus === 'pages'"
          class="pages"
        >
          <InfoPages
            :pageType="pageType"
            :pageModules="pageModules"
            :infoStatus="infoStatus"
            :scrollValue="scrollValue"
          ></InfoPages>
        </div>
      </div>
      <div v-show="infoStatus === 'weather'">
        <div class="for-weather">
          <InfoWeather
            v-show="infoStatus === 'weather'"
            :cities="cities"
          ></InfoWeather>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  props: {
    infoStatus: String,
    volume: Boolean,
    videoPlay: Boolean,
    currentPageNews: Object,
    cities: Object,

    pageModules: Object,
    pageType: String,
    scrollValue: Number,
  },
  methods: {
    // forUp() {
    //   this.infoStatus === 'video' ? this.currentTimeUp() : this.scrollUp()
    // },
    // forDown() {
    //   this.infoStatus === 'video' ? this.currentTimeDown() : this.scrollDown()
    // },
    switchVolume() {
      this.$emit('switchVolume')
    },
    switchVideoPlay() {
      this.$emit('switchVideoPlay')
    },
    scrollUp() {
      this.$emit('scrollUp')
    },
    scrollDown() {
      this.$emit('scrollDown')
    },
    ...mapActions({ updatePage: 'pages/getHTML' }),
    ...mapMutations({ changeCity: 'weather/CHANGE_CURRENT_CITY' }),
  },
}
</script>

<style>
.elements {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  align-items: center;
}
</style>
