import { getWeather, getGiphy } from '../scripts/openWeather';
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
			this.citySelected = true;
			this.switching = true;
			getWeather(this.cityId)
				.then(sleeper(1000))
				.then((response) => {
					this.weatherData = response;
					this.updateImage();
					this.switching = false;
				});
		},
		convertTemp(to) {
			if (typeof this.weatherData === 'string') return '';
			let temp = this.weatherData.main;
			let temps = [temp.temp, temp.feels_like];
			let final = [];
			temps.forEach((e) => {
				if (to.toUpperCase() === 'F') {
					final.push(Math.round((e - 273.15) * (9 / 5) + 32));
				} else if (to.toUpperCase() === 'C') {
					final.push(Math.round(e - 273.15));
				}
			});
			return { temp: final[0], feels_like: final[1] };
		},
		toggleTemp(e) {
			this.toggleFlag = e.value;
		},
		updateImage() {
			getGiphy(this.weatherData.weather[0].description).then((response) => {
				this.imageUrl = response.data.images.original.url;
			});
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
			weatherData: null,
			citySelected: false,
			switching: false,
			toggleFlag: true,
			imageUrl: null,
		};
	},
};

function sleeper(ms) {
	return function(x) {
		return new Promise((resolve) => setTimeout(() => resolve(x), ms));
	};
}
