const Iot = require("../models/iotCrudModels");
const mongoose = require("mongoose");


const postTempData = async (req, res) => {
  try {
    const temp = await Iot.updateOne({_id:new mongoose.Types.ObjectId("6633e52dd15e5fa72fab2ec6")},{ $set: req.body })
    console.log(temp)
    res.json({"meassage":"successayada poori subine"});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports = {
    postTempData
};
