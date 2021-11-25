
const express = require("express");
const router = express.Router();
  
router.get("/", (req, res) => {
    res.send('<h2>CAR PAGE </h2>')
});

const carController = require('../controllers/car.controller');
router.get("/all", carController.getCars);

module.exports = router;