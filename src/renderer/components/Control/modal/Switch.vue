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
      <ControlModalElements
        @switchVideoPlay="switchVideoPlay()"
        :currentPageNews="currentPageNews"
        @scrollUp="scrollUp()"
        @scrollDown="scrollDown()"
        @switchVolume="switchVolume"
        @currentTimeUp="currentTimeUp"
        @currentTimeDown="currentTimeDown"
        :volume="volume"
        :videoPlay="videoPlay"
        :infoStatus="infoStatus"
        :cities="cities"
      ></ControlModalElements>
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
    videoPlay: Boolean
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
    currentTimeDown() {
      this.$emit('currentTimeDown')
    },
    currentTimeUp() {
      this.$emit('currentTimeUp')
    }
  }

}
</script>

<style>
.switch-modal {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.499);
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
}
.switch-modal > div:first-child {
  text-align: right;
}
.switch-modal > div {
  width: 100%;
  text-align: center;
  justify-content: flex-start;
}
.switch-modal > div > img {
  background-color: white;
}
.close {
  width: 200px;
  position: absolute;
}
</style>