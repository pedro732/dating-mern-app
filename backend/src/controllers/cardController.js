const Cards = require('../models/dbCards'); // Asegúrate de que la ruta sea correcta

// Función para crear una nueva tarjeta
const createCard = async (req, res) => {
    const dbCard = req.body; // Obtener los datos de la tarjeta del cuerpo de la solicitud
    try {
        const newCard = await Cards.create(dbCard); // Crear la tarjeta en la base de datos
        res.status(201).send(newCard); // Enviar respuesta exitosa
    } catch (err) {
        res.status(500).send(err); // Manejo de errores
    }
};

// Función para obtener todas las tarjetas
const getCards = async (req, res) => {
    try {
        const cards = await Cards.find(); // Buscar todas las tarjetas en la base de datos
        res.status(200).send(cards); // Enviar las tarjetas como respuesta
    } catch (err) {
        res.status(500).send(err); // Manejo de errores
    }
};

// Exportar las funciones
module.exports = {
    createCard,
    getCards
};