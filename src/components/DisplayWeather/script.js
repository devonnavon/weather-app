// import {getWeather} from '@/scripts/openWeather';

import { getWeather } from '../scripts/openWeather';
// import keys from '@/../keys.json';

export default {
	name: 'WeatherDisplay',
	props: {
		cityId: null,
	},
	methods: {
		getWeatherData() {
			if (this.cityId === null) {
				return 'Please select a city';
			} else {
				getWeather(this.cityId).then((response) => {
					this.theData = response;
				});
				return this.theData;
			}
		},
	},
	watch: {
		cityId: function() {
			this.getWeatherData();
		},
	},
	// computed: {
	// 	weatherData() {
	// 		return this.getWeatherData();
	// 	},
	// },
	data() {
		return {
			theData: 'Please select a city',
		};
	},
};
