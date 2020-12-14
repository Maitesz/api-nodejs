
const axios = require('axios');

const URL_SERVICIO = 'http://157.245.138.232:9091/api/v1/test/superheroes';


const obtenerHeroesPromise = () => {
    return new Promise((resolve, reject) => {
        axios(URL_SERVICIO).then((response) => {
            resolve(response);
        }).catch((err) => {
            console.error('Error al llamar servicio de heroes: ', err);
            reject(err);
        })
    });
}

const obtenerHeroes = async () => {
    let response;
    try {
        const axiosResponse = await axios(URL_SERVICIO);
        response = axiosResponse.data;
    } catch (err) {
        console.error('Error al llamar servicio de heroes: ', err);
        throw err;
    }
    return response;
}
const obtenerHeroesID = async (id) => {
    let response;
    try {
        const axiosResponse = await axios(URL_SERVICIO+'/'+id);
        response = axiosResponse.data;
    } catch (err) {
        console.error('Error al llamar servicio de heroesID: ', err);
        throw err;
    }
    return response;
}

module.exports = {
    obtenerHeroes,
    obtenerHeroesID
};
