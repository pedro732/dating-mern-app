const express = require('express');
const { createCard, getCards } = require('../controllers/cardController'); // Importar las funciones del controlador

const router = express.Router();

// Rutas para las tarjetas
router.post('/dating/cards', createCard);
router.get('/dating/cards', getCards);

module.exports = router;