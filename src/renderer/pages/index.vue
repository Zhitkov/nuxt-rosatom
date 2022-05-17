<template>
  <div class="e-nuxt-container">
    <NuxtLink to="/info">Info</NuxtLink>
    <NuxtLink to="/control">Control</NuxtLink>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data () {
    return {
      externalContent: ''
    }
  },
  methods: {
    openURL (url) {
      window.open(url)
    }
  }
}
</script>

<style>
/* html,body, #__nuxt, #__layout{
  height:100vh!important;
  width: 100vw!important;
} */

html * {
  font-family: Roboto, sans-serif;
}


</style>
