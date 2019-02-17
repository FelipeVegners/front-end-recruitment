import axios from 'axios';

// Criando a API com o Axios e apontando para o localhost
const api = axios.create({
    baseURL: '/data'
});

export default api;