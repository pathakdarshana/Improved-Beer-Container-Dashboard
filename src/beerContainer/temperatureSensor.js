getTemperature = () => {
	return getTempInDegreeCelcius();
}

getTempInDegreeCelcius = () => {
	temperature = getRandomValue();
	return `${temperature} °C`;
}

getRandomValue = () => {
	const max = 9;
	const min = 1;
	value = Math.floor(Math.random() * (max - min) + min);
	return value;
}

module.exports = getTemperature ;
