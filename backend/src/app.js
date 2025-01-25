const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Cors = require('cors'); // Importar CORS
const cardRoutes = require('./routes/cardRoutes'); // Importar las rutas de tarjetas

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json()); // Para analizar el cuerpo de las solicitudes JSON
app.use(Cors()); // Habilitar CORS
app.use('/api', cardRoutes); // Rutas de la API

// Primera ruta GET
app.get('/', (req, res) => {
    res.send('Bienvenido al mundo web');
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});