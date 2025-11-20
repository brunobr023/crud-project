// src/services/api.js
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000, //corta a conexão se demorar mais de 50s
});

api.interceptors.response.use(
  (Response) => Response,
  (error) => {
    console.error("Erro na API:", error.message);
    //Retornar para uma pagina de erro
    return Promise.reject(error);
  }
);

export default api;