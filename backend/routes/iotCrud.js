const express = require("express");

const router = express.Router();

const iotCrud = require("../controllers/iotCrudController");


router.post("/temperature", iotCrud.postTempData);


module.exports = router;
