<template>
  <div class="">
    <div>
      <div
        class="container"
        v-show="currentCity === ''"
      >
        Выберите Погоду
      </div>
      <div v-show="currentCity !== ''">
        <div
          v-for="(city, index) in cities"
          :key="index"
        >

          <InfoWidgetWeather
            v-if="currentCity === index"
            :api-key="weatherApi"
            units="uk"
            :latitude="city.lat"
            :longitude="city.lon"
            language="ru"
            text-color="#0053a0"
            ipregistry-key="#0053a0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cities: Object,
    currentCity: String,
    weatherApi: String
  },
}
</script>

<style>
</style>