<template>
  <nav class="navbar">
    <!-- <div class="navbar-logo">

      <img
        :src="logo"
        alt="logo"
      >
    </div> -->
    <div class="navbar-title">
      <h2>Страна Росатом</h2>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar-menu',
  props: {
    logo: String
  }

}
</script>

<style>
nav.navbar {
  width: 100vw;
  height: 23vh;
  display: flex;
  justify-content: space-between;
  padding: 2vh 0;
  background-color: #0065ab;
  background-image: url('~/assets/control/top.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
nav.navbar > .navbar-logo {
  width: 20%;
  height: 100%;
}
nav.navbar > .navbar-logo > img {
  width: 100%;
  height: 100%;
}
nav.navbar > .navbar-title {
  width: 100%;
  text-align: center;
  justify-content: center;
  align-self: center;
}
nav.navbar > .navbar-title > h2 {
  font-weight: 500;
  color: white;
  font-size: 22pt;
}

</style>