<template>
  <div>
    <InfoVideo v-show="infoStatus === 'video'"></InfoVideo>
    <InfoWeather v-show="infoStatus === 'weather'"></InfoWeather>
    <InfoPages :pages="pages" v-show="infoStatus === 'news' || 'pages'"></InfoPages>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['infoStatus', 'pages']),
  },
  methods: {
    ...mapActions(['getMission'])
  }

}
</script>

<style>

</style>