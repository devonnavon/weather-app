<template>
	<div class="display-weather">
		<div>{{ weatherData }}</div>

		<toggle-button
			:value="true"
			:labels="{ checked: 'F', unchecked: 'C' }"
			@change="toggleTemp($event)"
		/>
		<div v-if="toggleFlag">{{ fahrenheit }}</div>
		<div v-else>{{ celcius }}</div>
	</div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
