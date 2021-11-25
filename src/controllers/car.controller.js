
const data = require('../../local-db/data.json');
const CarService = require('../services/car.services');
const getCars = async (req, res, next) => {
  const cars = await CarService.getCars();
  return res.status(200).json({ status: 200, data: cars, message: "Succesfully Retrieved All Cars" });
};

module.exports = {
  getCars,
};