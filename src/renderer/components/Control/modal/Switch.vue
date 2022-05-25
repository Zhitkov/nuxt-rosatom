<template>
  <transition name="modal">
    <div class="switch-modal">
      <div class="close">
        <img
          @click="close"
          :src="require('~/assets/icons/close.svg')"
          alt=""
        >
      </div>
      <ControlModalNews
        v-if="currentPageNews"
        :currentPageNews="currentPageNews"
        :infoStatus="infoStatus"
      >
      </ControlModalNews>
      <ControlModalElements
        @switchVideoPlay="switchVideoPlay"
        @switchVolume="switchVolume"
        :volume="volume"
        :videoPlay="videoPlay"
        :infoStatus="infoStatus"
        :cities="cities"
        
        :pageType="pageType"
        :pageModules="pageModules"
        :scrollValue="scrollValue"
      ></ControlModalElements>
      <!-- @currentTimeUp="currentTimeUp"
        @currentTimeDown="currentTimeDown" -->
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    infoStatus: String,
    volume: Boolean,
    currentPageNews: Object,
    cities: Object,
    videoPlay: Boolean,

    pageModules: Object,
    pageType: String,
    scrollValue: Number
  },
  data: () => ({
    volumeOn: true
  }),
  methods: {
    close() {
      return this.$emit('closeModal')
    },
    switchVolume() {
      this.$emit('switchVolume')
    },
    scrollUp() {
      this.$emit('scrollUp')
    },
    scrollDown() {
      this.$emit('scrollDown')
    },
    switchVideoPlay() {
      this.$emit('switchVideoPlay')
    },
    // currentTimeDown() {
    //   this.$emit('currentTimeDown')
    // },
    // currentTimeUp() {
    //   this.$emit('currentTimeUp')
    // }
  }

}
</script>

<style>
.switch-modal {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.499);
  z-index: 1;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: flex-end;
}
.switch-modal > div:first-child {
  text-align: right;
}
.switch-modal > div {
  width: 100vw;
  text-align: center;
  justify-content: flex-start;
}
.switch-modal > div > img {
  background-color: white;
}
.close {
  max-width: 200px;
  position: absolute;
}
</style>