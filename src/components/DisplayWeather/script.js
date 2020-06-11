// import {getWeather} from '@/scripts/openWeather';

import { getWeather } from '../scripts/openWeather';

export default {
	name: 'WeatherDisplay',
	props: {
		cityId: null,
	},
	methods: {
		getWeatherData() {
			if (this.cityId === null) {
				console.log(getWeather);
				return 'Please select a city';
			} else {
				return getWeather(this.cityId);
			}
		},
	},
	data() {
		return {
			weatherData: this.getWeatherData(),
		};
	},
};
