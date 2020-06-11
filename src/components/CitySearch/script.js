import Autocomplete from '@/components/Autocomplete/index';
import DisplayWeather from '@/components/DisplayWeather/index';
import cities from '@/assets/testcity.json';

export default {
	name: 'CitySearch',
	components: {
		autocomplete: Autocomplete,
		'display-weather': DisplayWeather,
	},
	computed: {
		selectedId() {
			if (this.selectedCity === null) {
				return null;
			} else {
				return this.selectedCity.id;
			}
		},
	},
	data() {
		return {
			selectedCity: null,
			cityOptions: cities,
		};
	},
};
