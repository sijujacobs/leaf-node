const express = require('express');
const mainRouter = express.Router();

const homeRoute = require('./home');
const loginRoute = require('./login');
const carRoute = require('./car');

mainRouter.get('/', (req, res) => {
    res.send('<h2>WELCOME - AWS-NODE-CURD App </h2><h3>CI-CD</h3><h4>THANKS GIVING 6:40AM</h4>')
});
mainRouter.use("/home",homeRoute);
mainRouter.use("/login",loginRoute);
mainRouter.use("/car", carRoute);

module.exports = mainRouter;
