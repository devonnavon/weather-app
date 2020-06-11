import { getWeather } from '../scripts/openWeather';
import { ToggleButton } from 'vue-js-toggle-button';

export default {
	name: 'WeatherDisplay',
	props: {
		cityId: null,
	},
	components: {
		'toggle-button': ToggleButton,
	},
	methods: {
		loadWeatherData() {
			this.weatherData = 'Loading...';
			getWeather(this.cityId).then((response) => {
				this.weatherData = response;
			});
		},
		convertTemp(to) {
			if (typeof this.weatherData === 'string') return '';
			let temp = this.weatherData.main.temp;
			if (to.toUpperCase() === 'F') return (temp - 273.15) * (9 / 5) + 32;
			else if (to.toUpperCase() === 'C') return temp - 273.15;
		},
		toggleTemp(e) {
			this.toggleFlag = e.value;
		},
	},
	watch: {
		cityId: function() {
			this.loadWeatherData();
		},
	},
	computed: {
		celcius() {
			return this.convertTemp('C');
		},
		fahrenheit() {
			return this.convertTemp('F');
		},
	},
	data() {
		return {
			weatherData: 'Please select a city',
			toggleFlag: true,
		};
	},
};
