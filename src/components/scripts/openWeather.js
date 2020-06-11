//api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
import keys from '@/../keys.json';

async function getWeather(cityId) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${keys.openWeather}`
	);
	return await response.json();
}

export { getWeather };
