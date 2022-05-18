<template>
  <div class="container">
    <div class="page">
      <div
        v-for="(pageModule, index) in pageModules"
        :key="index"
        v-show="index === pageType"
        class="item"
        :ref="index"
      >
        <div v-html="pageModule.pages.data">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageModules: Object,
    pageType: String,
    scrollValue: Number
  },
  methods: {
    scrollToZero() {
      this.$emit('scrollToZero')
    }
  },
  watch: {
    scrollValue: function () {
      this.$nextTick(function () {
        if (this.$refs[this.pageType][0].scrollHeight <= this.scrollValue) {
          console.log(111111);
          this.$refs[this.pageType][0].scrollTop = 0;
          return this.scrollToZero()
        }
        this.$refs[this.pageType][0].scrollTop = this.scrollValue;
      })
    }

  }

}

</script>

<style>
.page > .item > div > img {
  width: 100%;
  height: auto;
}

.container {
  width: 100vw;
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

.page > .item {
  width: 70%;
  height: 90%;
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
.list > .item {
  width: 100%;
}
</style>