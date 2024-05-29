const axios = require('axios');

// URL da API do IBGE para produtos de geociências
const url = 'https://servicodados.ibge.gov.br/api/v1/produtos/geociencias';

// Função assíncrona para fazer a requisição à API
async function consultarProdutosGeociencias() {
    try {
        const response = await axios.get(url);
        console.log("Dados recebidos:", response.data);
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error.response ? error.response.data : error.message);
    }
}

// Chama a função de consulta
consultarProdutosGeociencias();
