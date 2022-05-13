<template>
  <div>
    <videoPlayer
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
    >
    </videoPlayer>
  </div>
</template>


<!-- customEventName="customstatechangedeventname"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @statechanged="playerStateChanged($event)" -->


<script>
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'
import { mapGetters } from 'vuex'

export default {
  // name: 'info-video',
  components: { videoPlayer },
  computed: {
    ...mapGetters(['playerOptions'])
  }
  // data: () => ({
    
  // })
}
</script>

<style>
.video-player-box > div {
    width: 100vw; 
    height: 100vh
}
</style>