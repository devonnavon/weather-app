//api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
import keys from '@/../keys.json';

const getWeather = (cityId) => {
	console.log(keys.openWeather);
	fetch(
		`api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${keys.openWeather}`
	)
		.then((response) => {
			console.log(response);
			return response;
		})
		.catch((err) => {
			console.error(err);
			return err;
		});
};

export { getWeather };
