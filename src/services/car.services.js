const data = require('../../local-db/data.json');

const getCars = async () => {
    try {
        return data;
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
};
  
  module.exports = {
    getCars,
  };