const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6c70c6bb00ddd2cc3c50ac5e4d388bc4`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}