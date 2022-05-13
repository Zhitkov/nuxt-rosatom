<template>
  <div class="container">
    
    <div class="page">
      <div class="item">page</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pages: Object
  }

}
</script>

<style>
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
}

.list {
  display: flex;
  width: 30%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  flex-direction: column;
}
.list > .item {
  width: 80%;
  padding: 10% 5%;
}

</style>