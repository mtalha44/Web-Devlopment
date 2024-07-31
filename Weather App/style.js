const url = 'https://visual-crossing-weather.p.rapidapi.com/forecast?contentType=csv&unitGroup=us&aggregateHours=24&location=Washington%2CDC%2CUSA&shortColumnNames=false';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9e003a8668mshd78babec8410ac4p1a33a4jsn2123d30f4915',
		'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}