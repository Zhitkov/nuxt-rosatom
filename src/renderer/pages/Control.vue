<template>
  <div>
    <ControlModalSwitch
      v-show="modal"
      @closeModal="SWITCH_MODAL()"
      :infoStatus="infoStatus"
      :volume="volume"
      :currentPageNews="currentPageNews"
      @switchVolume="SWITCH_VOLUME()"
      @scrollUp="SCROLL_UP()" 
      @scrollDown="SCROLL_DOWN()" 
    ></ControlModalSwitch>
    <ControlNavbar :logo="require(`~/assets/icons/rosatom.svg`)"></ControlNavbar>
    <div class="control-items">
      <div
        class="control-item"
        v-for="item in controlItems"
        :key="item.title"
        @click="switchInfo(item.info)"
      >
        <ControlMenuItem
          :logo="item.logo"
          :title="item.title"
        ></ControlMenuItem>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'


export default {
  // data: () => ({

  // }),
  computed: {
    ...mapGetters({controlItems: 'controlItems', infoStatus: 'infoStatus', volume: 'volume', modal: 'modal', currentPageNews: 'pages/currentPageNews'})
  },
  methods: {
    ...mapActions(['switchInfo']),
    ...mapMutations({SWITCH_VOLUME:'SWITCH_VOLUME', SWITCH_MODAL:'SWITCH_MODAL', SCROLL_UP:'pages/SCROLL_UP', SCROLL_DOWN:'pages/SCROLL_DOWN'}),
    
  }
}
</script>


<style>
body {
  margin: 0;
}
.control-items {
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  grid-template-rows: 12% 44% 44%;
  grid-gap: 20px;
  padding: 3vh 20vw;
  text-align: center;

  justify-content: center;
}
.control-item:first-child {
  grid-area: 1 / 1 / 1 / 4;
  display: flex;
  height: 80px;
}

.item-inside:first-child > .logo {
  background-color: black;
}

.control-item {
  justify-content: center;

  background-color: #e9e9e9;
  border: 2px solid #1d4d79;
  border-radius: 5px;
  height: 150px;
}


</style>