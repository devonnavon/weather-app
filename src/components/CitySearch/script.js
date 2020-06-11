import Autocomplete from '@/components/Autocomplete/index';
import cities from '@/assets/testcity.json';
import openWeather from '@/scripts/openWeather';

export default {
	name: 'CitySearch',
	components: {
		autocomplete: Autocomplete,
	},
	data() {
		return {
			selectedCity: null,
			cityOptions: cities,
		};
	},
};
