<template>
  <div
    v-show="infoStatus === 'news'"
    class="news-list"
  >
    <div
      class="showLess"
      v-if="showLess"
    >
      <div
        v-for="news in currentPageNews.data.slice(0, 10)"
        :key="news.postfix+'1'"
        @click="updatePage({link: news.link, postfix: news.postfix, selector: '.news-detail'})"
        class="news-item"
      >
        <img :src="news.img" />
        <p>{{news.title}}</p>
        <!-- НЕ ЗАБУДЬ ЗДЕСЬ ВЫВОДЯТСЯ НЕ ВСЕ НОВОСТИ -->
      </div>
    </div>
    <div
      class="showLess"
      v-else
    >
      <div
        v-for="news in currentPageNews.data.slice(0, 35)"
        :key="news.postfix"
        @click="updatePage({link: news.link, postfix: news.postfix, selector: '.news-detail'})"
        class="news-item"
      >
        <img :src="news.img" />
        <p>{{news.title}}</p>
      </div>
    </div>
    <button
      v-show="showLess"
      @click="showLess = false"
    >Показать еще 20</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    showLess: true
  }),
  methods: {
  ...mapActions({ updatePage: 'pages/getHTML' }),
  },
  props: {
    infoStatus: String,
    currentPageNews: Object,
  }

}
</script>

<style>
.news-list {
  background-color: white;
  overflow:scroll;
  width: 300px;
}
.news-list > .showLess > p {
  font-size: 15px;
}

.news-list > .showLess > .news-item > img {
  float: left;
  margin: 0 15px 0 0;
  width: 100px;
}

.news-list > .showLess > .news-item > p {
  font: 200 12px/1.5 Georgia, Times New Roman, serif;
}

.news-list > .showLess > .news-item {
  padding: 10px 0;
}

.news-list > .showLess > .news-item > img {
  width: 90px;
  height: 60px;
}
.news-list > .news-item {
  width: 100%;
}

.item:hover {
  background: #eee;
}
</style>