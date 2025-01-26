import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Ejemplo de cómo enviar un token de autenticación
    }
});

export default instance;