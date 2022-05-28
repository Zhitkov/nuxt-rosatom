<template>
  <div>
    <!-- style="display: none" -->
    <v-idle
      style="display: none"
      @idle="onidle"
      :loop="false"
      :duration="300"
      :events="['mousemove', 'keypress', 'click', 'touchmove', 'touchstart', 'touchmove', 'scroll']"
    />
    <ControlModalSwitch
      v-show="modal"
      @closeModal="SWITCH_MODAL()"
      :infoStatus="infoStatus"
      :volume="volume"
      :videoPlay="videoPlay"
      :currentPageNews="currentPageNews"
      @switchVideoPlay="SWITCH_VIDEO_PLAY()"
      @switchVolume="SWITCH_VOLUME()"
      @scrollUp="SCROLL_UP()"
      @scrollDown="SCROLL_DOWN()"
      @updatePage="checker(newPage)"
      :cities="cities"
      :pageType="pageType"
      :pageModules="pageModules"
      :scrollValue="scrollValue"
    ></ControlModalSwitch>
    <!-- <ControlNavbar :logo="require(`~/assets/icons/rosatom.svg`)"></ControlNavbar> -->
    <ControlNavbar></ControlNavbar>
    <div class="control-container">
      <div class="control-items">
        <div
          class="control-item"
          v-for="item in controlItems"
          :key="item.title"
          @click="switchInfo(item.info)"
        >
          <ControlMenuItem
            :logo="item.logo"
            :title="item.title"
          ></ControlMenuItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'


export default {
  // created() {
  //   this.onidle
  // },
  computed: {
    ...mapGetters({
      controlItems: 'controlItems',
      infoStatus: 'infoStatus',
      volume: 'volume',
      videoPlay: 'videoPlay',
      modal: 'modal',
      currentPageNews: 'pages/currentPageNews',
      cities: 'weather/cities',
      pageType: 'pages/pageType',
      pageModules: 'pages/pageModules',
      scrollValue: 'pages/scrollValue'
    })
  },
  methods: {
    ...mapActions({ switchInfo: 'switchInfo' }),
    ...mapMutations({
      SWITCH_VOLUME: 'SWITCH_VOLUME',
      CURRENT_TIME_UP: 'CURRENT_TIME_UP',
      CURRENT_TIME_DOWN: 'CURRENT_TIME_DOWN',
      SWITCH_VIDEO_PLAY: 'SWITCH_VIDEO_PLAY',
      SWITCH_MODAL: 'SWITCH_MODAL',
      SCROLL_UP: 'pages/SCROLL_UP',
      SCROLL_DOWN: 'pages/SCROLL_DOWN'
    }),
    onidle() {
      this.switchInfo({ module: 'video', src: require('~/assets/videos/headcamp.mp4') })
      if (!this.modal) {
        this.SWITCH_MODAL()
      }
    },

  }
}
</script>


<style>
body {
  margin: 0;
}
.control-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 73vh;
  background-image: url("~/assets/control/bottom.png");
  background-repeat: no-repeat;
  background-size: auto;
  background-position-y: 70px;
}
.control-items {

  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  grid-template-rows: 13% 36.5% 30%;
  grid-gap: 20px;
  padding: 3vh 20vw;
  text-align: center;

  justify-content: center;
}
.control-item:first-child {
  grid-area: 1 / 1 / 1 / 4;
  display: flex;
  height: 100%;
}

.inside-item:first-child > .logo {
  /* background-color: black; */
}

.control-item {
  justify-content: center;

  background-color: #e9e9e9;
  border: 2px solid #1d4d79;
  border-radius: 10px;
  height: 150px;
}
</style>