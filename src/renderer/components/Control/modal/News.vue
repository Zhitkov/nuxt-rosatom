<template>
  <div v-show="infoStatus === 'news'" class="news-list">
    <div class="showLess" v-if="showLess">
      <transition-group name="news">
        <div
          v-for="news in currentPageNews.data.slice(0, 10)"
          :key="news.postfix + '1'"
          @click="
            updatePage({
              link: news.link,
              postfix: news.postfix,
              selector: '.news-detail',
            })
          "
          class="news-item"
        >
          <img :src="news.img" />
          <p>{{ news.title }}</p>
          <!-- НЕ ЗАБУДЬ ЗДЕСЬ ВЫВОДЯТСЯ НЕ ВСЕ НОВОСТИ -->
        </div>
      </transition-group>
    </div>
    <div class="showLess" v-else>
      <transition-group name="news">
        <div
          v-for="news in currentPageNews.data.slice(0, 35)"
          :key="news.postfix"
          @click="
            updatePage({
              link: news.link,
              postfix: news.postfix,
              selector: '.news-detail',
            })
          "
          class="news-item"
        >
          <img :src="news.img" />
          <p>{{ news.title }}</p>
        </div>
      </transition-group>
    </div>
    <button v-show="showLess" @click="showLess = false">Показать еще 20</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    showLess: true,
  }),
  methods: {
    ...mapActions({ updatePage: 'pages/getHTML' }),
  },
  props: {
    infoStatus: String,
    currentPageNews: Object,
  },
}
</script>

<style>
.news-enter-active,
.news-leave-active,
.news-leave-from-class,
.news-enter-from-class,
.news-enter-active-class,
.news-enter-to-class,
.news-leave-from-class,
.news-leave-active-class,
.news-leave-to-class {
  transition: opacity 0.5s ease;
}
.news-enter,
.news-leave-to,
.news-enter-from,
.news-leave-to,
.news-leave-from-class {
  opacity: 0;
}
.news-list {
  background-color: white;
  overflow: scroll;
  width: 60vw !important;
  overflow-x: hidden;
}
.news-list > .showLess {
  height: 100%;
}
.news-list > .showLess > p {
  font-size: 15px;
}

.news-list .news-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.news-list .news-item > img {
  float: left;
  margin: 0 15px 0 0;
  height: 150px;
  width: 220px;
}

.news-list > .showLess > .news-item > p {
  font: 200 12px/1.5 Georgia, Times New Roman, serif;
}

.news-list > .showLess > .news-item {
  padding: 10px 0;
}

.news-list > .news-item {
  width: 100%;
}

.item:hover {
  background: #eee;
}

#__layout > div > div.switch-modal > div.news-list > div > span {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 20px;
}
</style>
