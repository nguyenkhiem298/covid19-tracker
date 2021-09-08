const axios = require('axios');

export const getCountrys = () => {
    return axios.get('https://api.covid19api.com/countries');
}