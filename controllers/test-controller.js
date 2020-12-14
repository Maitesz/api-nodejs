
const router = require('express').Router();
const heroesService = require('../services/heroes-service');

router.get('/nombre/:nombre', async (req, res) => {
    const { nombre } = req.params;
    const heroesResponse = await heroesService.logicaObtenerHeroes(nombre);
    res.json({
        message: 'Buscando por nombre!',
        data: heroesResponse
    });
})
router.get('/id/:id', async (req, res) => {
    const { id } = req.params;
    const heroesResponse = await heroesService.logicaObtenerHeroesPorID(id);
    res.json({
        message: 'Buscando por ID!',
        data: heroesResponse
    });
})

module.exports = router;
