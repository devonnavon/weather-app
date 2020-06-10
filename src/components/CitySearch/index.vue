<template>
  <div class="city-search">
    <div class="autocomplete">
      <!-- <input class="autocomplete-input" placeholder="Search City" aria-label="Search City" />
      <ul class="autocomplete-result-list"></ul>-->
      <label for="autocomplete-dropdown">Select Your City:</label>
      <autocomplete id="autocomplete-dropdown" :options="cityOptions" v-model="selectedCity" />
    </div>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>