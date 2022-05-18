<template>
  <div class="container">
    <ul
      v-show="infoStatus === 'news'"
      class="list"
      v-if="currentPageNews"
    >
      <div v-if="showLess">
        <li
          v-for="news in currentPageNews.data.slice(0, 10)"
          :key="news.postfix+'1'"
          @click="updatePage({link: news.link, postfix: news.postfix, selector: '.news-detail'})"
          class="item"
        >
          <img :src="news.img" />
          <p>{{news.title}}</p>
          <!-- <p>{{news.content}}</p> -->
        </li>
      </div>
      <div v-else>
        <li
          v-for="news in currentPageNews.data.slice(0, 35)"
          :key="news.postfix"
          @click="updatePage({link: news.link, postfix: news.postfix, selector: '.news-detail'})"
          class="item"
        >
          <img :src="news.img" />
          <p>{{news.title}}</p>
        </li>
      </div>
      <button
        v-show="showLess"
        @click="showLess = false"
      >Показать еще 20</button>
    </ul>
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
        <div class="arrows">
          <img
            @click="forDown()"
            :src="require('~/assets/icons/arrows/left.svg')"
            alt=""
          >
          <img
            @click="forUp()"
            :src="require('~/assets/icons/arrows/right.svg')"
            alt=""
          >
        </div>
        <!-- <div
          class="pagination"
          v-show="(infoStatus === 'news') || (infoStatus === 'pages')"
        >
          <h1 style="color: white">... из 123</h1>
        </div> -->
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
  data: () => ({
    showLess: true
  }),
  props: {
    infoStatus: String,
    volume: Boolean,
    videoPlay: Boolean,
    currentPageNews: Object,
    cities: Object,
  },
  methods: {
    forUp() {
      this.infoStatus === 'video' ? this.currentTimeUp() : this.scrollUp()
    },
    forDown() {
      this.infoStatus === 'video' ? this.currentTimeDown() : this.scrollDown()
    },
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
    currentTimeDown() {
      this.$emit('currentTimeDown')
    },
    currentTimeUp() {
      this.$emit('currentTimeUp')
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

.elements {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  align-items: center;
}

.list > div > ul {
  list-style-type: none;
  width: 500px;
}

.list > div > p {
  font-size: 15px;
}

.list > div > li > img {
  float: left;
  margin: 0 15px 0 0;
  width: 100px;
}

.list > div > li p {
  font: 200 12px/1.5 Georgia, Times New Roman, serif;
}

.list > div > li {
  padding: 10px 0;
}

.list > div > li > img {
  width: 90px;
  height: 60px;
}

li:hover {
  background: #eee;
}
</style>

