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
          >
          <img
            v-show="!volume"
            :src="require('~/assets/icons/volume/off.svg')"
            alt=""
          >
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
          >
          <img
            v-show="!videoPlay"
            :src="require('~/assets/icons/video/off.svg')"
            alt=""
          >
        </div>
        <div
          v-show="(infoStatus === 'news') || (infoStatus ===  'pages')"
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
        <div class="weather-container">
          <div
            class="weather-item"
            v-for="(city, index) in cities"
            :key="index"
            @click="changeCity(index)"
          >
            <img
              :src="city.logo"
              alt=""
            >
            <h3>{{city.name}}</h3>
          </div>
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
    scrollValue: Number    
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
    ...mapMutations({ changeCity: 'weather/CHANGE_CURRENT_CITY' })
  }

}
</script>

<style>
.weather-container {
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  grid-template-rows: repeat(3, 33.3%);
  grid-gap: 20px;
  padding: 3vh 20vw;
  text-align: center;
}
.weather-item {
  background-color: white;
  color: black;
  border: solid 2px blue;
  margin: 0;
}

.weather-item img {
  background-color: black;
}
.pages {
  
}
.elements {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  align-items: center;
}
</style>

