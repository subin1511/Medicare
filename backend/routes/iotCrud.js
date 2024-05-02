const express = require("express");

const router = express.Router();

router.post('/temperature', (req, res) => {
    currentTemperature = req.body;
    console.log('Received temperature:', currentTemperature);
    res.sendStatus(200);
  });

module.exports = router;
