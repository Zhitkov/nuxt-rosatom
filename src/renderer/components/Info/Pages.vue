<template>
  <div class="container">
    <div
      id="page"
      class="page"
    >
      <div
        v-for="(pageModule, index) in pageModules"
        :key="index"
        v-show="index === pageType"
        class="page-item"
        :ref="index"
      >
        <div v-html="pageModule.pages.data">

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
    scrollValue: Number
  },
  methods: {
    ...mapMutations({ changeScrollValue: 'pages/CHANGE_SCROLL_VALUE' }),
    scroller() {
      this.changeScrollValue(this.$refs[this.pageType][0].scrollTop);
    }
  },
  mounted() {
    for (const pageType in this.$refs) {
      this.$refs[pageType][0].addEventListener('scroll', this.scroller);
    }
  },

  // watch: {
  //   'this.$refs[this.pageType][0].scrollTop': function () {
  //     this.$nextTick(function () {
  //       console.log(1);
  //     })
  //   }
  // },
  watch: {
    scrollValue: function () {
      this.$nextTick(function () {
        if (this.$refs[this.pageType][0].scrollTop !== this.scrollValue) {
          this.$refs[this.pageType][0].scrollTop = this.scrollValue;
        }
      })
    }
  }

}

</script>

<style>
.page > .page-item > div > img {
  width: 100%;
  height: auto;
}

.container {
  /* max-width: 70vw; */
  width: 100%;
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
  height: 100%;
  background-color: white;
  overflow: scroll;
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
</style>
