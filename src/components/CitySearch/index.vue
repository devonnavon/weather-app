<template>
  <div class="city-search">
    <div class="autocomplete">
      <label for="autocomplete-dropdown">Select Your City:</label>
      <autocomplete id="autocomplete-dropdown" :options="cityOptions" v-model="selectedCity" />
      <display-weather :cityId="selectedId" />
    </div>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>