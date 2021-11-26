const data = require('../../local-db/data.json');
const AWS = require('aws-sdk');
// AWS --> IAM --> search for --> aws-elasticbeanstalk-ec2-role
// Select that from the list
// Click on ---> Attach policy ---> AmazonDynamoDBFullAccess

AWS.config.update({
    region: 'us-east-1'
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = 'product-inventory';

const getCars = async () => {
  const params = {
    TableName: dynamodbTableName,
  }

  try {
    const allProducts = await scanDynamoRecords(params, []);
    const body = {
      products : allProducts
    }
    return allProducts;
  } catch(error) {
    console.error('ERROR ---> car.services.js :: getCars');
    throw Error('Throw Error on fetching data ---> car.services.js');
  }
};
async function scanDynamoRecords(scanParams, itemArray) {
  try {
    const dynamoData = await dynamodb.scan(scanParams).promise();
    itemArray = itemArray.concat(dynamoData.Items)
    if(dynamoData.LastEvaluatedKey){
      scanParams.ExclusiveStartKey = dynamoData.LastEvaluatedKey;
      return await scanDynamoRecords(scanParams, itemArray);
    }
    return itemArray;
  } catch (error) {
    console.error('ERROR ---> PRODUCT :: scanDynamoRecords', error);
  }
}
// const getCars = async () => {
//     try {
//         return data;
//     } catch (e) {
//         throw Error('Error while Paginating Users')
//     }
// };
  
module.exports = {
  getCars,
};