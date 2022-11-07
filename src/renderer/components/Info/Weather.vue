<template>
  <div class="weather-container">
      <div style="margin: 20px;" v-for="(city, index) in cities" :key="index">
        <img :src="city.img" alt="" />

        <!-- <InfoWidgetWeather
            v-if="currentCity === index"
            :api-key="weatherApi"
            units="uk"
            :latitude="city.lat"
            :longitude="city.lon"
            language="ru"
            text-color="#0053a0"
            ipregistry-key="#0053a0"
          /> -->
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      checkImg: true
    }
  },
  mounted: function () {
    if (this.checkImg) {
      console.log(1);
      for (let i = 0; i < 6; i++) {
        this.addWeatherImg({ city: this.cities[Object.keys(this.cities)[i]].name, index: Object.keys(this.cities)[i] });
      }        
      this.checkImg = false;
    }

  },
  props: {
    cities: Object,
    currentCity: String,
    weatherApi: String,
  },
  methods: {
    ...mapActions({ addWeatherImg: 'weather/getWeatherByCity' }),
  },
}
</script>

<style>
.weather-container {
  display: grid;
    grid-template-columns: repeat(3, 33.3%);
    /* grid-template-rows: repeat(2, 33.3%); */
    /* grid-gap: 12vh 2vw; */
    text-align: center;
    justify-content: center;
}
.weather-item {
  background-color: white;
  color: black;
  border: solid 2px blue;
  margin: 0;
}

.weather-container > div > img {
  width: 24vw;
}
</style>
