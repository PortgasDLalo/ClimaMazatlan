const axios = require('axios');

//Coordenadas de Mazatlan
let lat = 23.25;
let lng = -106.49;

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=04cf77d4fb1bc2bf2014b941c95d60bb&units=metric`);
    const humedad = resp.data.main.humidity;
    const tempe = resp.data.main.temp;
    const temp_minima = resp.data.main.temp_min;
    const temp_maxima = resp.data.main.temp_max;
    const viento = resp.data.wind.speed * 3.6;
    const rafag = resp.data.wind.gust * 3.6;

    console.log(`\nLa ciudad de Mazatlán esta a ${tempe.toFixed(2)} °C
con vientos de ${viento.toFixed(2)} Km/h con ráfagas de ${rafag.toFixed(2)} Km/h
como una minima de ${temp_minima.toFixed(2)} °C y una maxima de ${temp_maxima.toFixed(2)} °C
Con una humedad de ${humedad} %`);

}

getClima(lat, lng);