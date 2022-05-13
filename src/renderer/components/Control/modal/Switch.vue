<template>
  <transition name="modal">
    <div class="switch-modal">
      <div class="close" @click="close">
        <img
          :src="require('~/assets/icons/close.svg')"
          alt=""
        >
      </div>
      <ControlModalElements @switchVolume="switchVolume" :volume="volume" :infoStatus="infoStatus" ></ControlModalElements>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    infoStatus: String,
    volume: Boolean
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
  position: absolute;
}


</style>