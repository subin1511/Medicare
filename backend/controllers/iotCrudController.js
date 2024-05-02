const Iot = require("../models/iotCrudModels");


const postTempData = async (req, res) => {
  try {
    const temp = await Iot.updateOne({_id:"6633e11555fc84b80244a555"},{ $set: req.body })
    console.log(temp)
    res.json({"meassage":"successayada poori subine"});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports = {
    postTempData
};
