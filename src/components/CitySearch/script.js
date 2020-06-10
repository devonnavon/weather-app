import Autocomplete from '@/components/Autocomplete/index';
import cities from '@/assets/testcity.json';

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
