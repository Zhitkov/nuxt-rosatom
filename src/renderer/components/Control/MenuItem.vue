<template>
  <div class="inside-item">
    <div class="logo">
      <img
        :src="logo"
        alt=""
      >
    </div>
    <div class="title">
      <h4>{{title}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu-item',
  props: {
    logo: String,
    title: String,
    allSize: Boolean
  }
}
</script>

<style scoped>
.inside-item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inside-item {
  color: #48779c
}
</style>