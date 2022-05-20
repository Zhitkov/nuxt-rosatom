<template>
  <div
    v-show="infoStatus === 'news'"
    class="list"
  >
    <div
      class="showLess"
      v-if="showLess"
    >
      <div
        v-for="news in currentPageNews.data.slice(0, 10)"
        :key="news.postfix+'1'"
        @click="updatePage({link: news.link, postfix: news.postfix, selector: '.news-detail'})"
        class="item"
      >
        <img :src="news.img" />
        <p>{{news.title}}</p>
        <!-- <p>{{news.content}}</p> -->
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
        class="item"
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
export default {
  data: () => ({
    showLess: true
  }),
  props: {
    infoStatus: String,
    currentPageNews: Object,
  }

}
</script>

<style scoped>
.list {
  background-color: white;
  overflow:scroll;
}
.list > .showLess > p {
  font-size: 15px;
}

.list > .showLess > .item > img {
  float: left;
  margin: 0 15px 0 0;
  width: 100px;
}

.list > .showLess > .item > p {
  font: 200 12px/1.5 Georgia, Times New Roman, serif;
}

.list > .showLess > .item {
  padding: 10px 0;
}

.list > .showLess > .item > img {
  width: 90px;
  height: 60px;
}

.item:hover {
  background: #eee;
}
</style>