<template>
  <div class="container">
    <div class="page">
      <div
        v-for="(pageModule, index) in pageModules"
        :key="index"
        v-show="index === pageType"
        class="page-item"
        :ref="index" @scroll="scroller"
      >
        <!-- <div @scroll="scroller" class="page-item-container" v-html="pageModule.pages.data"></div> -->
        <div :style="'width: ' + (infoWidth?'100vw;':'60vw')" class="page-item-container">
        <img v-show="infoStatus === 'news' && !infoWidth && !pageModule.pages.data" :src="require('@/assets/control/newsStart.svg')" alt="">
          <iframe
          :style="' width: 100%; height: ' + (pageModule.pages.height?pageModule.pages.height:'200vh')"
            name="google-disable-x-frame-options"
            frameborder="0"
            :src="pageModule.pages.data"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    pageModules: Object,
    pageType: String,
    scrollValue: Number,
    infoWidth: Boolean,
    infoStatus: Boolean
  },
  methods: {
    ...mapMutations({ changeScrollValue: 'pages/CHANGE_SCROLL_VALUE' }),
    scroller(e) {
      this.changeScrollValue(e.target.scrollTop)
    }
  },
  watch: {
    // 'this.$refs[this.pageType][0].ownerDocument.firstElementChild.scrollTop': function() {
    //   this.$nextTick(function () {
    //     console.log(1);
    //     if (this.$refs[this.pageType][0].scrollTop !== this.scrollValue) {
    //       this.scrollValue = this.$refs[this.pageType][0].ownerDocument.firstElementChild.scrollTop
    //     }
    //   })
    // },
    scrollValue: function () {
      this.$nextTick(function () {
        if (this.$refs[this.pageType][0].scrollTop !== this.scrollValue) {
          this.$refs[this.pageType][0].scrollTop = this.scrollValue
        }
      })
    },
  },
}
</script>

<style>
#__layout
  > div
  > div.switch-modal
  > div.container
  > div
  > div:nth-child(1)
  > div.pages
  > div
  > div
  > div:nth-child(2)
  > div
  > div.container
  > ol {
  display: none;
}

.page > .page-item > div > img {
  width: 100%;
  height: auto;
}

.container {
  width: 100%;
  min-width: 70vh;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.449);
}
.page {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.page > .page-item {
  width: 100%;
  /* padding: 0 15%; */
  text-align: left;
  height: 100%;
  background-color: white;
  overflow: scroll;
  padding: 20px 50px;
}
.more_photo img {
  width: 300px;
  height: 200px;
}

 .js.csstransforms {
    overflow: hidden !important;
}
.page > .page-item > .page-item-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.page > .page-item > .page-item-container div.str {
  display: none;
}
.page > .page-item > .page-item-container > .cell {
  width: 100%;
}



.page-item > div > p {
  padding: 1% 0;
}

.list {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow: scroll;
}

.page-header__media {
  position: absolute;
  /* top: 0; */
  left: 0;
  width: 100%;
  height: 40%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
}

.page-header {
  /* z-index: 810; */
}
</style>
