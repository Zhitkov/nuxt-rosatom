<template>
  <div>
    <videoPlay v-bind="playerOptions"/>
  </div>
</template>


<script>
import {videoPlay} from 'vue3-video'
import 'vue3-video/dist/style.css'


export default {
  // data: () => ({
    
  // }),
  // name: 'info-video',
  components: {
    videoPlay
  },
  props: {
    playerOptions: Object
  },
  // methods: {
  //   some() {
  //   }
  // },
  // computed: {
  //   player() {
  //     return this.$refs.videoPlayer.player
  //   }
  // },
      
  // watch: {
    // playerOptions: function () {
    //   this.$nextTick(function () {
    //     if (this.dataPlayerOptions.sources.src !== this.playerOptions.sources.src) {
    //       console.log('change src');
    //       this.dataPlayerOptions.sources.src = require(this.playerOptions.sources.src)
    //     }
    //     if (this.dataPlayerOptions.muted !== this.playerOptions.muted) {
    //       console.log('change mute');
    //       this.dataPlayerOptions.muted = this.playerOptions.muted
    //     }

    //   })
    // }

    // playerOptions: function () {
    //   this.$nextTick(function () {
    //     if (this.dataPlayerOptions.sources[0].src !== this.playerOptions.sources[0].src) {
    //       console.log('change src');
    //       console.log('this.dataPlayerOptions.sources[0].src', this.dataPlayerOptions.sources[0].src);
    //       console.log('require(this.playerOptions.sources[0].src)', require(this.playerOptions.sources[0].src));
    //       this.dataPlayerOptions.sources[0].src = require(this.playerOptions.sources[0].src);
    //     }
    //   })
    // }
  }
  // computed: {
  //   ...mapGetters(['playerOptions'])
  // },
}
</script>

<style>
.video-player-box > div {
  width: 100vw;
  height: 100vh;
}
</style>