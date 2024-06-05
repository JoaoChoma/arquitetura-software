// lambda-order-processor.js
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const order = JSON.parse(event.body);
  
  // Processamento do pedido
  const params = {
    TableName: 'Orders',
    Item: order
  };
  
  await docClient.put(params).promise();
  
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Pedido processado com sucesso!' })
  };
};
