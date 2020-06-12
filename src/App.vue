<template>
	<div id="app">
		<CitySearch />
	</div>
</template>

<script>
import CitySearch from './components/CitySearch/index.vue';

export default {
	name: 'App',
	components: {
		CitySearch,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: left;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
