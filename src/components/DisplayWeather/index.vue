<template>
  <div class="display-weather">
    <div id="loading" v-if="switching"></div>
    <div id="displays" v-else-if="citySelected && weatherData != null">
      <toggle-button
        :value="true"
        :labels="{ checked: 'F', unchecked: 'C' }"
        @change="toggleTemp($event)"
      />
      <div v-if="toggleFlag" class="temp">
        <div>The temp is {{ fahrenheit.temp }} F but feels like {{ fahrenheit.feels_like }} F</div>
      </div>
      <div v-else class="temp">
        <div>The temp is {{ celcius.temp }} C but feels like {{ celcius.feels_like }} C</div>
      </div>
      <img :src="imageUrl" />
    </div>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
