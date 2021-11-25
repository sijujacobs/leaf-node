const express = require("express");
const router = express.Router();
  
router.get("/", (req, res) => {
    res.send('<h2>LOGIN PAGE </h2>')
});
module.exports = router;
