
const heroesProvider = require('../providers/heroes-provider');

const logicaObtenerHeroes = async (nombre) => {
    let response = [];
    try {
        const heroesResponse = await heroesProvider.obtenerHeroes();
        response = heroesResponse.data;
        if (nombre) {
            response = heroesResponse.data.filter((d) => d.nombre.includes(nombre));
        }
    } catch (err) {
        console.error('Error en el provider: ', err);
    }
    return response;
}
const logicaObtenerHeroesPorID = async (id) => {
    let response = [];
    try {
        const heroesResponse = await heroesProvider.obtenerHeroesID(id);
        response = heroesResponse.data;
    } catch (err) {
        console.error('Error en el provider: ', err);
    }
    return response;
}

module.exports = {
    logicaObtenerHeroes,
    logicaObtenerHeroesPorID
}
