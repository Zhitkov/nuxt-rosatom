<template>
  <div class="container">
    <!-- <div class="list" v-if="infoStatus === 'news'"> -->
    <div class="list" v-if="currentPageNews">
      <div v-for="news in currentPageNews" :key="news.postfix" @click="showNews(news.link, news.postfix, selector)" class="item">
        <div v-html="news.data"></div>
      </div>
    </div>
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
        <div class="arrows">
          <img @click="scrollUp()"
            :src="require('~/assets/icons/arrows/left.svg')"
            alt=""
          >
          <img @click="scrollDown()"
            :src="require('~/assets/icons/arrows/right.svg')"
            alt=""
          >
        </div>
        <div
          class="pagination"
          v-show="infoStatus === 'news' || 'pages'"
        >
          <h1 style="color: white">... из 123</h1>
        </div>
      </div>
      <div v-show="infoStatus === 'weather'">
        <h1>weather</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infoStatus: String,
    volume: Boolean,
    currentPageNews: Array
  },
  methods: {
    switchVolume() {
      this.$emit('switchVolume')
    },
    scrollUp() {
      this.$emit('scrollUp')
    },
    scrollDown() {
      this.$emit('scrollDown')
    }
  }

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