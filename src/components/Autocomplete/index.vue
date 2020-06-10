<template>
  <div class="dropdown" :class="{'open' : open}">
    <input
      type="text"
      v-model="searchText"
      @input="searchChanged"
      @keydown.enter="suggestionSelected(matches[highlightIndex])"
      @keydown.down="down"
      @keydown.up="up"
      @keydown.esc="setOpen(false)"
      @blur="setOpen(false)"
    />
    <ul class="suggestion-list">
      <li
        v-for="(suggestion, index) in matches"
        :key="index"
        @mousedown.prevent
        @click="suggestionSelected(suggestion)"
        @keydown.enter="suggestionSelected(matches[highlightIndex])"
        :class="{'active' : index === highlightIndex}"
      >{{ suggestion.name }}</li>
    </ul>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
<style scoped>
</style>