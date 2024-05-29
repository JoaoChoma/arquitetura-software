const axios = require('axios');

// Substitua 'Maria' pelo nome que deseja consultar
const nome = 'Maria';

// Monta a URL da API
const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`;

// Função assíncrona para fazer a requisição à API
async function consultaNome() {
    try {
        const response = await axios.get(url);
        // Exibe os dados da resposta em formato string, com indentação para melhor visualização
        console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error.response ? error.response.data : error.message);
    }
}

// Chama a função de consulta
consultaNome();

