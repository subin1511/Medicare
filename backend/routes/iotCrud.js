const express = require("express");

const router = express.Router();

router.get('/temperature', (req, res) => {
    currentTemperature = req.body;
    console.log('Received temperature:', currentTemperature);
    return "succccceesss"
  });

module.exports = router;
