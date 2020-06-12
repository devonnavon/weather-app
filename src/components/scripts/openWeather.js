//api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
import keys from '@/assets/keys.json';

async function getWeather(cityId) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${keys.openWeather}`,
		{ mode: 'cors' }
	);
	return await response.json();
}

async function getGiphy(descriptor) {
	const response = await fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=${keys.giphy}&s=${descriptor}`,
		{ mode: 'cors' }
	);
	return await response.json();
}

export { getWeather, getGiphy };
