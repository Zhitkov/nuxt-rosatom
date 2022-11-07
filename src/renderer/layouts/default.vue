<template>
  <nuxt />
</template>

<!-- <script>
export default {
};
</script> -->

<style>

div.mx-video-player__controls{
  display: none !important;
}
div.mx-video-player__mask-progress.mx-video-player__mask-progress_show{
  display: none !important;
}
div.mx-video-player__controls.mx-video-player__controls_hide{
  display: none !important;
}
div.mx-video-player__mask-progress.mx-video-player__mask-progress_show{
  display: none !important;
}
a.disabled {
    pointer-events: none !important;
    text-decoration: none;
    color: black;
}
.for-weather {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#__nuxt {
  height: 100vh;
  width: 100vw;
}

@font-face {
    font-family: "Open Sans";
    src: local("Open Sans"),     url(~/assets/OpenSans-VariableFont_wdth\,wght.ttf) format("truetype");}

html {
    font-family: "Open Sans";
  overflow: hidden;
}
</style>