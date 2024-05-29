const axios = require('axios');

// URL da API do IBGE para notícias
const url = 'http://servicodados.ibge.gov.br/api/v3/noticias/';

// Função assíncrona para fazer a requisição à API
async function consultarNoticias() {
    try {
        const response = await axios.get(url);
        console.log("Notícias recebidas:", response.data);
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error.response ? error.response.data : error.message);
    }
}

// Chama a função de consulta
consultarNoticias();
